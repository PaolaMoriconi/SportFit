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
      console.log("session",req.session.userLogin);
      if(user && user.email != req.session.userLogin.email){
        return false
      }
      return true
    }).withMessage('El email ya se encuentra registrado'),
  
]