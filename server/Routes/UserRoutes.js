const router = require("express").Router();
const Login = require("../controllers/LoginController");
const Register = require("../controllers/RegisterController");

router.post("/signup", Register);
router.post("/login", Login);

module.exports = router;
