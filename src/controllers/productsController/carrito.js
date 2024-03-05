const db = require("../../database/models")
const { Op } = require("sequelize")

module.exports = (req, res) => {
  
  db.Products.findAll()
  .then(products =>{
     
  res.render('products/carritoCompras', {
    products:products,user:req.session.userLogin
  })
  }) 
    }

