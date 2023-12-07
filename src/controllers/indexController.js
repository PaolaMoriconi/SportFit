const path = require("path")
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
  }
  
}

