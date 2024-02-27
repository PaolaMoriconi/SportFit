const { validationResult } = require("express-validator")
const db = require("../../database/models")
const { Op } = require("sequelize")

module.exports = (req, res) => {

  const errors = validationResult(req)
  const { image, imageBack } = req.files
  console.log("files:", req.files);

    
    if (errors.isEmpty()) {
      const { nombre, precio, descuento, talles, detalleProducto, categoria } =req.body
      db.Product.create({
        name:nombre,
        price:precio,
        discount:descuento,
        description:detalleProducto,
        image:image[0].filename,
        category_id:categoria
      })
      .then(({id})=>{
        db.Image.create({name:imageBack[0].filename,product_id:id}).then(() =>{
          res.redirect(`/products`)
        })
      })
      
    } else {
      
      res.render("/products", {
        user: req.session.userLogin,
        old: req.body,
        errors: errors.mapped(),
      });
    }

}
