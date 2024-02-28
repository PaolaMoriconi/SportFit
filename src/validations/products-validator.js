const { body } = require("express-validator");

module.exports = [
  body("nombre").notEmpty().withMessage("Este campo es obligario").bail(),
  body("image").custom((value) => {
    if (!req.files && !req.files.image) {
      reject("Debe seleccionar una imagen para la portada del producto");
    }
  }).withMessage("Debe seleccionar una imagen para la portada del producto"),
  body("imageBack").custom((value) => {
    if (!req.files && !req.files.imageBack) {
      reject("Debe seleccionar una imagen secundaria para el producto");
    }
  }).withMessage("Debe seleccionar una imagene secundaria para el producto"),
  body("precio").notEmpty().withMessage("Este campo es obligario").bail(),

  body("talles").notEmpty().withMessage("Este campo es obligario").bail(),
  body("categoria").notEmpty().withMessage("Este campo es obligario").bail(),
  body("colores").notEmpty().withMessage("Este campo es obligario").bail(),
  body("detalleProducto").notEmpty().withMessage("Este campo es obligario").bail(),
  
];
