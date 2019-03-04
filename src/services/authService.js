const User = require("../models").User;

exports.createUser = async userInfo => {
  try {
    let user = userInfo;
    user = await User.create(userInfo);
    return user;
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      err.message = "User already exists with that email";
      err.status = 409;
    }
    throw err;
  }
};

exports.authUser = async userInfo => {
  try {
    let user;
    user = await User.findOne({where: {email: userInfo.email}});
    if (!user) {
      let err = new Error("Email Not registered");
      err.status = 401;
      throw err;
    }
    user = await user.comparePassword(userInfo.password);
    return user;
  } catch (err) {
    throw err;
  }
};
