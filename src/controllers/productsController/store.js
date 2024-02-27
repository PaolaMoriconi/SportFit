const { validationResult } = require("express-validator")
const db = require("../../database/models")
const { Op } = require("sequelize")

module.exports = (req, res) => {

  const errors = validationResult(req)
  const { image, imageBack } = req.files

    
    if (errors.isEmpty()) {
      const { nombre, precio, descuento, talles, detalleProducto, categoria } =req.body
      db.Product.create({
        name:nombre,
        price:precio,
        discount:descuento,
        description:detalleProducto,
        image:"",
        category_id:categoria
      })
      .then(()=>{
        res.redirect(`/products`)
      })
      
    } else {
      
      res.render("/products", {
        user: req.session.userLogin,
        old: req.body,
        errors: errors.mapped(),
      });
    }

}
