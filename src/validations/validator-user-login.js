const { body } = require('express-validator')
const { compareSync } = require('bcryptjs')
const { leerJSON } = require('../data')

module.exports = [
  body('email')
    .notEmpty()
    .withMessage('Este campo es obligario')
    .bail()
    .isEmail()
    .withMessage('Ingrese un correo valido')
    .bail(),

  body('password')
    .notEmpty()
    .withMessage('Este campo es obligario')
    .bail()
    .custom((value, { req }) => {
      const users = leerJSON('users')
      console.log("value",value);
      console.log("email",req.body.email);
      const user = users.find(user => user.email === req.body.email.trim())
      console.log("password",user.password);
      console.log("?:",compareSync(value.trim(), user.password) );
      if (!user || !compareSync(value.trim(), user.password)) {
        return false
      }

      return true
    })
    .withMessage('Credenciales inválidas'),
]
