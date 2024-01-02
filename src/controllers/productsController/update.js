const { leerJSON, escribirJSON } = require('../../data')

module.exports = (req, res) => {

   const { nombre, precio, detalleProducto, categoria } = req.body

   const {id} = req.params

   const products = leerJSON('productos')

   const productUpdated = products.map(product =>{
          if(product.id == id) {                 
            product.nombre = nombre.trim();
            product.precio = precio;
            product.detalleProducto = detalleProducto.trim();
            product.categoria = categoria;
          }

          return product
   })

      escribirJSON(productUpdated, 'productos')
      return res.redirect('/admin')



}
