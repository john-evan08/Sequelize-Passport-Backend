const express = require("express");
const router = express.Router();
const {verifyUser} = require("../../middleware/passport");

const userController = require("../../controllers/userController");

router.post("/register", userController.register); //C
router.post("/login", userController.login);
router.get("/", verifyUser, userController.list); //R
router.put("/", verifyUser, userController.update); //U
router.delete("/:userId", verifyUser, userController.destroy); //D

module.exports = router;
