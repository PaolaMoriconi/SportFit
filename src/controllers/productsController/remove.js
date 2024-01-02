const { leerJSON, escribirJSON } = require('../../data')

module.exports = (req, res) => {
  const { id } = req.params
  const products = leerJSON('productos')

  const productsFiltered = products.filter((product) => product.id != id)

  escribirJSON(productsFiltered, 'productos')

  return res.redirect('/admin')
}
