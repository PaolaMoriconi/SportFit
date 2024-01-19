
const { leerJSON } = require('../data')

module.exports = {
  index: function (req, res) {
    const products = leerJSON('productos')
    console.log("Session",req.session.userLogin)
    return res.render('index', {
      products,user:req.session.user
    })
  },
  admin: (req, res) => {
    const products = leerJSON('productos')
    return res.render('dashboard', {
      products,user:req.session.user
    })
  },
  cart: (req, res) => {
    const list = leerJSON('productos')
  const products = [list[0],list[1],list[2]]

  res.render('products/carritoCompras', {
    products:products,user:req.session.user
  })


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
      user:req.session.user
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
      user:req.session.user
    })
  }

}
