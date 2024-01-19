const { leerJSON, escribirJSON } = require('../../data')
const Product = require('../../data/product')

module.exports = (req, res) => {
  const { nombre, precio, descuento, talles, detalleProducto, categoria } =
    req.body
  const { id } = req.params
  const { image, imageBack } = req.files
  const producto = new Product(
    id,
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
