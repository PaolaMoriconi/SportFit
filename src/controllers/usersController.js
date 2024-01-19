const { validationResult } = require("express-validator");
const { leerJSON } = require("../data");

module.exports = {
  register: (req, res) => {
    return res.render("users/register",{user:req.session.user});
  },

  login: (req, res) => {
    console.log("session login",req.session.user);
    return res.render("users/login",{user:req.session.user});
  },
  processLogin: (req, res) => {
    const errores = validationResult(req);
    console.log("errors:",errores);
    const { email } = req.body;

    if (errores.isEmpty()) {
      const { id, Nombre, rol } = leerJSON("users").find(
        user => user.Email === email
      );

      req.session.userLogin = {
        id,
        Nombre,
        rol,
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
};
