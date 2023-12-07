const path = require("path")
const { leerJSON } = require('../data')

const productsController = {
  detail: (req, res) => {
    const { id } = req.params
    const products = leerJSON('productos')
    const product = products.find((elemento) => elemento.id == id)
    res.render('./products/producDetail', { product })
  },

  edit: (req, res) => {
    const { id } = req.params
    return res.render('./products/productEdit')
  },
  add: (req, res) => {
    return res.render('products/productAdd')
  },
  cart: (req, res) => {
    res.render('./products/carritoCompras')
  },

  
}

module.exports = productsController;
