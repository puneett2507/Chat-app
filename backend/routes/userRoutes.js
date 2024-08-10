const express = require("express");
const { registerUser } = require("../controller/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
