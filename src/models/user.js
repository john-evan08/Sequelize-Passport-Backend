"use strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CONFIG = require("../../config/config");

module.exports = (sequelize, DataTypes) => {
  // A helper to define the User model with username, password fields
  const User = sequelize.define(
    "User",
    {
      first: DataTypes.STRING,
      last: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {isEmail: true}
      },
      password: DataTypes.STRING
    },
    {}
  );

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models["Dominant"], {through: "DominantUser"});
    User.belongsToMany(models["Subject"], {through: "SubjectUser"});
    User.hasMany(models["Event"]);
  };

  // Create User's methods

  // Hash Password, on password save or update.(Hook called before User.Create/Update)
  User.addHook("beforeSave", async function(user, options) {
    try {
      if (user.changed("password")) {
        let salt, hash;
        salt = await bcrypt.genSalt(10);
        hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
      }
    } catch (err) {
      throw err;
    }
  });

  // Compare Password
  User.prototype.comparePassword = async function(pw) {
    try {
      let pass;
      pass = await bcrypt.compare(pw, this.password);
      if (!pass) {
        let err = new Error("Invalid Password");
        err.status = 403;
        throw err;
      }
      return this;
    } catch (err) {
      throw err;
    }
  };

  // Get JSON Web Token(JWT) for Authentication
  User.prototype.getJWT = function() {
    let expiration_time = parseInt(CONFIG.jwt_expiration);
    return (
      "Bearer " +
      jwt.sign({user_id: this.id}, CONFIG.jwt_encryption, {
        expiresIn: expiration_time
      })
    );
  };

  return User;
};
