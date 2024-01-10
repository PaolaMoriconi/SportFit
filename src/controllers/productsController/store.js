
const { leerJSON, escribirJSON } = require('../../data')
const Product = require('../../data/product')


module.exports = (req, res) => {
  const { nombre, precio, descuento, talles,detalleProducto, categoria} =
    req.body

  const producto = new Product( 
    nombre,
    precio,
    descuento,
    talles,
    detalleProducto,
    categoria,
    req
  )

  const products = leerJSON('productos')

 
  products.push(producto)

  
  escribirJSON(products, 'productos')
  res.redirect(`/products/detail/${producto.id}`)
}
