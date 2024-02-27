
const db = require("../../database/models")
const { Op } = require("sequelize")
module.exports = (req, res) => {
  db.Product.findAll()
  .then(products =>{
    return res.render("products/products", {
      products,user:req.session.userLogin
    })
    
  })


}
