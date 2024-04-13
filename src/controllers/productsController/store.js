const { validationResult } = require("express-validator");
const db = require("../../database/models");
const { Op } = require("sequelize");
const fs = require('fs');

module.exports = async (req, res) => {
  const errors = validationResult(req);
  const images = req.files;

  let { nombre, precio, descuento, talles, section, subcategoria, descripcion, categoria, color, marca, stock } = req.body;

  if (errors.isEmpty()) {
    try {
      console.log("body",req.body)
      const product = await db.Product.create({
        name: nombre,
        price: precio,
        discount: descuento,
        description: descripcion,
        category_id: categoria,
        section_id: section,
        color_id: color,
        brand_id: marca,
        subcategorie_id:subcategoria, 
      })

      if(talles){
        if(typeof talles == "string"){
          talles = [talles]
        }

        talles.forEach( async t => {

          await db.ProductSize.create({
            product_id : product.id,
            size_id : t,
            quantity: stock

          })
        
        });
      }

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
    
      const colores = db.Color.findAll({
        order : ['name']
    })
    const categorias = db.Category.findAll({
        order : ['name']
    })
    const marcas = db.Brand.findAll({
        order : ['name']
    })
    const sections = db.Section.findAll({
        order : ['name']
    })

    const subcategorias = db.Subcategorie.findAll({
      order : ['name']
  })

    const talles = db.Size.findAll()

    
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

    Promise.all([colores,subcategorias, categorias, sections,marcas, talles])
    
    .then(([colores,subcategorias,categorias,sections,marcas, talles]) => {
      
      res.render("products/productAdd", {
        user: req.session.userLogin,
        old: req.body,
        errors: errors.mapped(),
        colores,
        categorias,
        talles,
        marcas,
        sections,
        subcategorias
      });
    });
  }
};
