const { body } = require("express-validator");

module.exports = [
  body("nombre").notEmpty().withMessage("Este campo es obligario").bail(),
  body("image").custom((value,{req}) => {
    if (!req.files && !req.files.image) {
      return false
    }
    return true
     }).withMessage("Debe seleccionar una imagen para la portada del producto"),
     
  body("precio").notEmpty().withMessage("Este campo es obligario").bail()
  .isNumeric().withMessage("Debe ser un valor numerico"),
  body("descuento").notEmpty().withMessage("Este campo es obligario").bail()
  .isNumeric().withMessage("Debe ser un valor numerico"),
  
  body("marca").notEmpty().withMessage("Este campo es obligario").bail(),
  body("categoria").notEmpty().withMessage("Este campo es obligario").bail(),
  body("colores").notEmpty().withMessage("Este campo es obligario").bail(),
  body("detalleProducto").notEmpty().withMessage("Este campo es obligario").bail(),
  
];
