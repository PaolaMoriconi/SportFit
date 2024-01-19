const { validationResult } = require("express-validator")
const { leerJSON, escribirJSON } = require("../data")
const User = require('../data/User')
 module.exports = {
    login : (req,res) => {
        return res.render('users/login')
    },
     processLogin: (req, res) => {
    const errores = validationResult(req);
    console.log("errors:",errores);
    const { email } = req.body;

    if (errores.isEmpty()) {
      const { id, name, role } = leerJSON("users").find(
        user => user.email === email
      );

      req.session.userLogin = {
        id,
        name,
        role,
      };
      
      if(req.body.remember == 'on'){
        res.cookie('user',{id,Nombre,rol}, 1000 * 60 * 15);
        res.cookie('remember',"true", 1000 * 60 * 15);
      }

      return res.redirect("/");
    } else {

      return res.render("users/login", {
        errors: errores.mapped(),
      });
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
       
    }


    }

    

 
