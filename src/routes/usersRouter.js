const express = require('express');
const router = express.Router();
const {login,register,processLogin} = require("../controllers/usersController");
const ValidatoruserLogin = require('../../validations/validator-user-login');
/* GET users listing. */

router
.get('/register', register)
.get('/login', login)
.post('/login', ValidatoruserLogin, processLogin)


module.exports = router;
