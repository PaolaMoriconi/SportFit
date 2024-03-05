const express = require("express");
const router = express.Router();
const {
  login,
  register,
  processRegister,
  processLogin,
  profile,
  updateProfile,
  test,
  logout
} = require("../controllers/usersController");

const usersRegisterValidator = require("../validations/users-register-validator");
const ValidatoruserLogin = require("../validations/validator-user-login");
const uploadProfile = require("../middlewares/uploadProfile");
const usersUpdateValidator = require("../validations/users-update-validator");

/* GET users listing. */

router
  .get("/register", register)
  .get("/login", login)
  .post(
    "/register",
    uploadProfile.single("avatar"),
    usersRegisterValidator,
    processRegister
  )
  .post("/login", ValidatoruserLogin, processLogin)

  .get("/perfil/:id", profile)
  .get("/all", test)
  .put(
    "/perfil/:id",
    uploadProfile.single("avatar"),
    usersUpdateValidator,
    updateProfile
  )
  .get('/logout',logout)

module.exports = router;
