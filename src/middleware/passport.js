const {ExtractJwt, Strategy} = require("passport-jwt");
const User = require("../models").User;
const CONFIG = require("../../config/config");
const passport = require("passport");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = CONFIG.jwt_encryption;

passport.use(
  new Strategy(opts, async function(jwt_payload, done) {
    try {
      let user;
      console.log(jwt_payload);
      user = await User.findById(jwt_payload.user_id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      done(err, false);
    }
  })
);

exports.verifyUser = passport.authenticate("jwt", {session: false});
