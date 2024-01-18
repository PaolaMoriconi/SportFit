const { validationResult } = require("express-validator");
const { leerJSON } = require("../data");

module.exports = {
  register: (req, res) => {
    return res.render("users/register");
  },

  login: (req, res) => {
    return res.render("users/login");
  },
  processLogin: (req, res) => {
    const errores = validationResult(req);
    console.log("errors:",errores);
    const { email } = req.body;

    if (errores.isEmpty()) {
      const { id, Nombre, Categoría } = leerJSON("users").find(
        user => user.Email === email
      );

      req.session.userLogin = {
        id,
        Nombre,
        Categoría,
      };

      return res.redirect("/");
    } else {
      return res.render("users/login", {
        errors: errores.mapped(),
      });
    }
  },
};
