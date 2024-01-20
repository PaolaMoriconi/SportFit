const { validationResult } = require("express-validator");
const { leerJSON, escribirJSON } = require("../data");
const User = require("../data/User");
module.exports = {
  login: (req, res) => {
    return res.render("users/login", { user: req.session.userLogin });
  },
  processLogin: (req, res) => {
    const errores = validationResult(req);

    console.log("errors:", errores);
    const { email } = req.body;

    if (errores.isEmpty()) {
      const { id, name, role } = leerJSON("users").find(
        (user) => user.email === email
      );

      req.session.userLogin = {
        id,
        name,
        role,
        email
      };

      if (req.body.remember == "on") {
        res.cookie("user", { id, name, role, email }, 1000 * 60 * 15);
        res.cookie("remember", "true", 1000 * 60 * 15);
      }

      return res.redirect("/");
    } else {
      return res.render("users/login", {
        errors: errores.mapped(),
      });
    }
  },
  profile: (req, res) => {
    const { id } = req.params;
    const users = leerJSON("users");
    const user = users.find((elemento) => elemento.id == id);
    return res.render("users/profile", {
      usuario: user,
      user: req.session.userLogin,
    });
  },
  updateProfile: (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      console.log(errores.mapped);
      res.render("users/profile", {
        user: req.session.userLogin,
        old: req.body,
        errors: errores.mapped(),
      });
    } else {
      const { id } = req.params;
      const { name, surname, email, adress, state, district, phone } = req.body;
      const users = leerJSON("users");

    




      const newArray = users.map((element) => {
        if (element.id == id) {
          return {
            id,
            name: name.trim(),
            surname: surname.trim(),
            email: email.trim(),
            adress: adress ? adress.trim() : "",
            state: state ? state.trim() : "",
            district: district ? district.trim() : "",
            phone: phone ? phone.trim() : "",
            password: element.password,
            role: element.role || "",
            avatar: req.file ? req.file.filename : element.avatar,
          };
        }
        return element;
      });
      escribirJSON(newArray, "users");
      const user = newArray.find((elemento) => elemento.id == id);
      console.log("user", user);
      req.session.userLogin = user;
      res.cookie("user", { id, name, role: user.role }, 1000 * 60 * 15);
      return res.render("users/profile", {
        usuario: user,
        user: req.session.userLogin,
      });
    }
  },
  register: (req, res) => {
    return res.render("users/register", { user: req.session.userLogin });
  },
  processRegister: (req, res) => {
    const errors = validationResult(req);
    const { name, surname, email, password } = req.body;

    const avatar =
      req.file && req.file.avatar
        ? req.file.avatar.filename
        : "default-avatar.jpg";

    if (errors.isEmpty()) {
      const users = leerJSON("users");

      const newUser = new User(name, surname, email, password, avatar);

      users.push(newUser);

      escribirJSON(users, "users");
      return res.redirect("/users/login");
    } else {
      return res.render("users/register", {
        old: req.body,
        errors: errors.mapped(),
      });
    }
  },
};
