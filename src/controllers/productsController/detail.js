const db = require("../../database/models")
const { Op } = require("sequelize")

module.exports = (req, res) => {
  
  const { id } = req.params

  db.Product.findByPk(id)
  .then(product =>{
    return res.render('products/productDetail', {
      product,user:req.session.userLogin
    })
    
  })

  /*const product = products.find((product) => product.id == id)


  res.render('products/productDetail', {
       product,user:req.session.userLogin
  
  })*/

}
