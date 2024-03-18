const { validationResult } = require("express-validator");
const db = require("../../database/models");
const { Op } = require("sequelize");
const fs = require('fs');

module.exports = async (req, res) => {
  const errors = validationResult(req);
  const images = req.files;
  if (errors.isEmpty()) {
    try {
      const { nombre, precio, descuento, talles, detalleProducto, categoria, colores, marca } = req.body;
    
      const product = await db.Product.create({
        name: nombre,
        price: precio,
        discount: descuento,
        description: detalleProducto,
        category_id: categoria,
        size_id: talles,
        color_id: colores,
        brand_id: marca 
      })

      const grupoImagenes = images.map(element => {
          return {name:element.filename,product_id:product.id}
      });

      db.Image.bulkCreate(grupoImagenes).then(()=>{
        res.redirect(`/products/detail/${product.id}`);
      })      
    } catch (error) {
      images.forEach(image => {
        fs.existsSync("public/images/products/" + image.filename) && fs.unlink("public/images/products/" + image.filename,
        (err) => {
          if (err) throw err;
          console.log(image.filename + ' was deleted');
        });
      });

      console.log(error);
    }

    } else {
    
      const colores = db.Color.findAll();
      const categorias = db.Category.findAll();
      const talles = db.Size.findAll();
      const marcas = db.Brand.findAll();
    
    //Borro las imagenes que se subieron
    images.forEach(image => {
      console.log("image: ",image);
      if(fs.existsSync("public/images/products/" + image.filename)) {
        fs.unlink("public/images/products/" + image.filename,(err) => {
          if (err) throw err;
          console.log(image.filename + ' was deleted');
        });
      }
    })

    Promise.all([colores, categorias, talles,marcas]).then(([colores, categorias,talles,marcas]) => {
      
      res.render("products/productAdd", {
        user: req.session.userLogin,
        old: req.body,
        errors: errors.mapped(),
        colores,
        categorias,
        talles,
        marcas
      });
    });
  }
};
