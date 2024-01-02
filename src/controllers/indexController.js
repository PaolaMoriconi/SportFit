const path = require("path")
const { leerJSON } = require('../data')

module.exports = {
  index: function (req, res) {
    const products = leerJSON('productos')
    return res.render('index', {
      products,
    })
  },
  cart: (req, res) => {
    res.render('./products/carritoCompras')
  },
  admin: (req, res) => {
    const products = leerJSON('productos')
    return res.render('dashboard', {
      products,
    })
  },
  searchAdmin : (req, res) => {

    const {keyword} = req.query

    const products = leerJSON('productos')

    const result = products.filter((product) => {
      
       return product.nombre.toLowerCase().includes(keyword.toLowerCase()) ||
         product.categoria.toLowerCase().includes(keyword.toLowerCase()) 
      
    })
     

    return res.render('dashboard', {
      products: result,
      keyword
    })
  }
  
}

