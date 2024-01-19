const { validationResult } = require("express-validator")
const { leerJSON, escribirJSON } = require("../data")
const User = require('../data/User')
 module.exports = {
    login : (req,res) => {
        return res.render('users/login')
    },
    processLogin : (req, res) => {
          const errors = validationResult(req);
            const {email} = req.body;

        if(errors.isEmpty()){

        const {id, name, rol} = leerJSON('users').find(user => user.email === email)

            req.session.userLogin = {
                id,
                name,
                rol
            }

            return res.redirect('/users/login')

        }else {
            return res.render('users/login',{
                errors : errors.mapped()
            })
        }

    },
    register : (req,res) => {
        return res.render('users/register')
    },
    processRegister : (req, res) =>{    
        const errors = validationResult(req)
        const { name, surname, email, password } = req.body
        
            const avatar =
              req.file && req.file.avatar
                ? req.file.avatar.filename
                : 'default-avatar.jpg'

       

        if (errors.isEmpty()) {
           
            const users = leerJSON('users')

    

            const newUser = new User(name, surname, email, password, avatar)
            
            users.push(newUser)

            escribirJSON(users,'users')
            return res.redirect('/users/login')
    

            
        }else {
             return res.render('users/register',{
                old : req.body,
                errors : errors.mapped()
             })
        }
        return res.send(errors)
    }


    }

    
