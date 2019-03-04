const authService = require("../services/authService");
const userService = require("../services/userService");

exports.register = async (req, res, next) => {
  try {
    let user;
    user = await authService.createUser(req.body);
    res.status(201).send({
      msg: "Successfully created new user",
      user: user.toJSON(),
      token: user.getJWT()
    });
    return;
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    let user;
    user = await authService.authUser(req.body);
    res.send({token: user.getJWT(), user: user.toJSON()});
  } catch (err) {
    next(err);
  }
};

exports.list = async (req, res, next) => {
  try {
    let users = await userService.list();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    let user, data;
    user = req.user;
    data = req.body;
    userService.update(user, data);
    res.status(200).send({message: "Updated User:" + user.email});
  } catch (err) {
    next(err);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    let users = await userService.destroy(req.params.userId);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
