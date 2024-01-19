const express = require('express')
const router = express.Router()
const {
  login,
  register,
  processRegister,
  processLogin,
} = require('../controllers/usersController')
const usersRegisterValidator = require('../validations/users-register-validator')
const ValidatoruserLogin = require('../validations/validator-user-login')
const uploadProfile = require('../middlewares/uploadProfile')
/* GET users listing. */

router
  .get('/register', register)
  .get('/login', login)
  .post(
    '/register',
    uploadProfile.single('avatar'),
    usersRegisterValidator,
    processRegister
  )
  .post('/login', ValidatoruserLogin, processLogin)

module.exports = router
