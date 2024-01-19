const { body } = require("express-validator");
const { compareSync } = require("bcryptjs");
const { leerJSON } = require("../src/data");

module.exports = [
  body("email")
    .notEmpty()
    .withMessage("Este campo es obligario").bail()
    .isEmail()
    .withMessage("Ingrese un correo valido")
    .bail(),

  body("password")
    .notEmpty()
    .withMessage("Este campo es obligario")
    .bail()
    .custom((value, { req }) => {
      const users = leerJSON("users");
      const user = users.find((user) => user.Email === req.body.email.trim());
        console.log("value",value);
        console.log("user.password",user.password);
      if (!user && value.trim() != user.password) {
        return false;
      }

      return true;
    })
    .withMessage("Credenciales inválidas")
];
