// general route for backend (easier for deployment)
const router = require("express").Router();

router.use("/users", require("./apiRoutes/users"));

module.exports = router;
