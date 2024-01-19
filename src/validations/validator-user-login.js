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
      const user = users.find((user) => user.email === req.body.email.trim())
      if (!user || !compareSync(value.trim(), user.password)) {
        return false
      }

      return true
    })
    .withMessage('Credenciales inválidas'),
]
