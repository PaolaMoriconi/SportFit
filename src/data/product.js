
 const { v4: uuidv4 } = require('uuid')




function Product(
  id,
  nombre,
  precio,
  detalleProducto,
  descuento,
  talles,
  categoria, 
  req
) {
  const { image, imageBack } = req.files
  this.id = uuidv4()
  this.nombre = nombre.trim()
  this.precio = precio
  this.detalleProducto = detalleProducto.trim()
  this.descuento = descuento || null
  this.talles = talles
  this.image = image ? image[0].filename : null
  this.imageBack = imageBack ? imageBack[0].filename : null
  this.categoria = categoria
}
module.exports = Product;