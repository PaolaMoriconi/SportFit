const { check, body } = require('express-validator');
const { leerJSON } = require('../data');

module.exports = [
  check('name')
    .notEmpty()
    .withMessage('Este campo obligatorio')
    .bail()
    .isLength({
      min: 3,
    })
    .withMessage('Minimo tres caracteres')
    .bail()
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('Solo caracteres alfabéticos'),

  check('surname')
    .notEmpty()
    .withMessage('Este campo obligatorio')
    .bail()
    .isLength({
      min: 3,
    })
    .withMessage('Minimo tres caracteres')
    .bail()
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('Solo caracteres alfabéticos'),

  body('email')
    .notEmpty()
    .withMessage('Este campo obligatorio')
    .bail()
    .isEmail()
    .withMessage('Email invalido')
    .custom((value, {req}) =>{
      const users = leerJSON('users')
      const user = users.find(user => user.email === value)
      
      if(user){
        return false
      }
      return true
    }).withMessage('El email ya se encuentra registrado'),

  check('password')
    .notEmpty()
    .withMessage('Este campo obligatorio')
    .isLength({
      min: 5,
      max: 12,
    })
    .withMessage('La contraseña debe tener entre 5 y 12 caracteres'),

  body('password2')
    .notEmpty()
    .withMessage('Verificar contraseña')
    .custom((value, { req }) => {
      if (value != req.body.password) {
        return false
      }
      return true
    })
    .withMessage('Las contraseñas no coinciden'),

  check('remember')
    .notEmpty().withMessage('Debes aceptar los terminos y condiciones para seguir')

  
]