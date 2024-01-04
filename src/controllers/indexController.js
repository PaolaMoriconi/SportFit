
const { leerJSON } = require('../data')

module.exports = {
  index: function (req, res) {
    const products = leerJSON('productos')
    return res.render('index', {
      products,
    })
  },
  admin: (req, res) => {
    const products = leerJSON('productos')
    return res.render('dashboard', {
      products,
    })
  },
  cart: (req, res) => {
    res.render('./products/carritoCompras')
  },

  searchAdmin: (req, res) => {
    const { keyword } = req.query

    const products = leerJSON('productos')

    const result = products.filter((product) => {
      return (
        product.nombre.toLowerCase().includes(keyword.toLowerCase()) ||
        product.categoria.toLowerCase().includes(keyword.toLowerCase())
      )
    })

    return res.render('dashboard', {
      products: result,
      keyword,
    })
  },
  search :(req, res) => {
    const { keyword } = req.query

    const products = leerJSON('productos')

    const resultado = products.filter((product) => {
      return (
        product.nombre.toLowerCase().includes(keyword.toLowerCase()) ||
        product.categoria.toLowerCase().includes(keyword.toLowerCase())
      )
    })

    return res.render('index', {
      products: resultado,
      keyword,
    })
  }

}
