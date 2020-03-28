var express = require("express");
var router = express.Router();
const controller = require("../controller/controller");

router.post("/login", controller.student_login);
router.get("/dashboard", controller.get_dashboard);

module.exports = router;
