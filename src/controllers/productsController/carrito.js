const db = require("../../database/models")
const { Op } = require("sequelize")

module.exports = (req, res) => {
  
  const list = leerJSON('productos')
  const products = [list[0],list[1],list[2]]
 

  res.render('products/carritoCompras', {
    products:products,user:req.session.userLogin
  })

}
