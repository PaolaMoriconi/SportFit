const { validationResult } = require("express-validator");
const db = require("../../database/models");
const { Op } = require("sequelize");

module.exports = (req, res) => {
  const errors = validationResult(req);
  const { image} = req.files;
  console.log("files:", req.files);

  if (errors.isEmpty()) {
    const { nombre, precio, descuento, talles, detalleProducto, categoria } =
      req.body;
    db.Product.create({
      name: nombre,
      price: precio,
      discount: descuento,
      description: detalleProducto,
      image: image[0].filename,
      category_id: categoria,
    }).then(
        () => {
          res.redirect(`/products`);
        }
      );
    } else {
    console.log("Errores: ", errors.mapped());
    const colores = db.Color.findAll();
    const categorias = db.Category.findAll();

    Promise.all([colores, categorias]).then(([colores, categorias]) => {
      console.log({ colores }, { categorias });
      res.render("products/productAdd", {
        user: req.session.userLogin,
        old: req.body,
        errors: errors.mapped(),
        colores,
        categorias,
      });
    });
  }
};
