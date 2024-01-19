const { leerJSON } = require('../../data')

module.exports = (req, res) => {
  
  const products = leerJSON('productos')

  res.render('products/products', {
       products,user:req.session.user
  })

}
