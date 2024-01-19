const { leerJSON } = require('../../data')

module.exports = (req, res) => {
  
  const list = leerJSON('productos')
  const products = [list[0],list[1],list[2]]
  console.log("products",products);

  res.render('products/carritoCompras', {
    products:products,user:req.session.user
  })

}
