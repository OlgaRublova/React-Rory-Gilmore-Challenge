const express = require("express");
const {register, login} = require("../controllers/auth")

//  calling router
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

//  exporting router
module.exports = router;