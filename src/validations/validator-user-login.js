const { body } = require('express-validator')
const { compareSync } = require('bcryptjs')
const db = require("../database/models");

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
      return db.User.findOne({
        where:{
          email:req.body.email
        }
      }).then(user =>{
        if(!user || !compareSync(value, user.password)) {
          return Promise.reject()
        }
      }).catch(error => {
        console.log(error)
        return Promise.reject('Credenciales inválidas')
      })

    })
    
]
