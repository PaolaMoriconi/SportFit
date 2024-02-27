const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");
const { Op } = require("sequelize");
/*
const { leerJSON, escribirJSON } = require("../data");
const User = require("../data/User");
*/
const db = require("../database/models");

module.exports = {
  login: (req, res) => {
    return res.render("users/login", { user: req.session.userLogin });
  },
  processLogin: (req, res) => {
    const errores = validationResult(req);

    const { email } = req.body;

    if (errores.isEmpty()) {
      db.User.findOne({
        where: {email},
        include: [{ association: "rols" }],
      }).then(({id,email,name,rols}) => {
        req.session.userLogin = {
          id,
          name,
          rol: rols.name,
          email,
        };

        if (req.body.remember == "on") {
          res.cookie("user", { id, name, rol:rols.name, email }, 1000 * 60 * 15);
          res.cookie("remember", "true", 1000 * 60 * 15);
        }

        return res.redirect("/");
      });
    } else {
      return res.render("users/login", {
        errors: errores.mapped(),
      });
    }
  },
  profile: (req, res) => {
    const { id } = req.params;

    db.User.findByPk(id, {
      include: [
        {
          association: "address",
        },
        {
          association: "rols",
        },
      ],
    }).then((usuario) => {
      return res.render("users/profile", {
        usuario,
        user: req.session.userLogin,
      });
    });

    /*const user = users.find((elemento) => elemento.id == id);
    return res.render("users/profile", {
      usuario: user,
      user: req.session.userLogin,
    });*/
  },
  updateProfile: (req, res) => {
    const errores = validationResult(req);
    const { name, surname, email, adress, state, district, phone } = req.body;
    const { id } = req.params;

    if (errores.isEmpty()) {
      const avatar = req.file;

      db.User.findByPk(id, {
        include: ["address"],
      }).then((user) => {
        db.Address.update(
          {
            address: adress,
            city: state,
            province: district,
          },
          {
            where: {
              id: user.id,
            },
          }
        ).then(() => {
          if (avatar) {
            existsSync("public/images/" + user.image) &&
              unlinkSync("public/images/" + user.image);
          }
          db.User.update(
            {
              name: name.trim(),
              surname: surname.trim(),
              email: email.trim(),
              phone,
              image: req.file ? req.file.filename : user.image,
              rol_id: user.user_id,
            },
            {
              where: {
                id,
              },
            }
          ).then((result) => {
            console.log(result);
            return res.redirect("/");
          });
        });
      });
    } else {
      res.render("users/profile", {
        user: req.session.userLogin,
        old: req.body,
        errors: errores.mapped(),
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
      db.User.create({
        name: name.trim(),
        surname: surname.trim(),
        email: email.trim(),
        password: hashSync(password.trim(), 10),
        rol_id: 2,
        image: avatar,
        phone: 111111,
      }).then((usuario) => {
        db.Address.create({
          user_id: usuario.id,
          address: "",
          city: "",
          province: "",
        }).then((adress) => {
          console.log(adress);
          return res.redirect("/users/profile");
        });
      });
    } else {
      return res.render("users/register", {
        old: req.body,
        errors: errors.mapped(),
      });
    }
  },
  test: (req, res) => {
    db.User.findAll({
      include: [{ association: "rols" }, { association: "address" }],
    })
      .then((response) => {
        res.send(response);
      })
      .catch((err) => console.log(err));
  },
};
