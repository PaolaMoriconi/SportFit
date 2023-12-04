const express = require('express');
const router = express.Router();
const {login,register} = require("../controllers/usersController");
/* GET users listing. */
router.
get('/register', register)
.get('/login', login)

module.exports = router;
