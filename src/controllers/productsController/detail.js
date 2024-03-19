const db = require("../../database/models")
const { Op } = require("sequelize")

module.exports = (req, res) => {
  
  const { id } = req.params

  db.Product.findByPk(id,{include:{association:"images"}})
  .then(product =>{
    return res.render('products/productDetail', {
      product,user:req.session.userLogin
    })
    
  })

}
