const User = require("../models").User;

exports.list = async () => {
  return User.findAll();
};

exports.update = async (user, data) => {
  user.set(data);
  try {
    user = await user.save();
    return user;
  } catch (err) {
    if (err.message == "Validation error") {
      err.message = "The email address is already in use";
      err.status = 409; //Conflict
      throw err;
    }
  }
};
exports.destroy = async userId => {
  return User.destroy({where: {id: userId}}).then(success => {
    if (success === 1) {
      return User.findAll();
    }
    let err = new Error("User Not Found, cannot delete");
    err.status = 404;
    throw err;
  });
};
