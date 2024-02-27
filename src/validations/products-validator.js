const { body } = require("express-validator");

module.exports = [
  body("nombre").notEmpty().withMessage("Este campo es obligario").bail(),
  body.custom((value) => {
    if (!req.files.image) {
      reject("Debe seleccionar imagenes para la portada del producto");
    }
  }),
  body.custom((value) => {
    if (!req.files.imageBack) {
      reject("Debe seleccionar una imagene secundaria para el producto");
    }
  }),
  body("precio").notEmpty().withMessage("Este campo es obligario").bail(),

  body("talles").notEmpty().withMessage("Este campo es obligario").bail(),
  body("categoria").notEmpty().withMessage("Este campo es obligario").bail(),
  body("colores").notEmpty().withMessage("Este campo es obligario").bail(),
  body("detalleProducto").notEmpty().withMessage("Este campo es obligario").bail(),
  
];
