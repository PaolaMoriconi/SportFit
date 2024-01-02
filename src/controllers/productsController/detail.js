const { leerJSON } = require('../../data')

module.exports = (req, res) => {
 
    const { id } = req.params
    const products = leerJSON('productos')
    const product = products.find((elemento) => elemento.id === +id)
    res.render('./products/producDetail', {
       ...product 
      })
  }


