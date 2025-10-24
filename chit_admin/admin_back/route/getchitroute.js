const express = require("express");
const { getchitentry } = require("../controler/chitgetcontrol")

const router = express.Router();

router.get("/getchit",getchitentry);

module.exports = router;
