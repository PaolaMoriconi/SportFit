 const crypto = require('crypto')

function Product (nombre = "", precio, detalleProducto , categoria) {
  this.id = crypto.randomUUID()
  this.nombre = nombre.trim();
  this.precio = precio;
  this.detalleProducto = detalleProducto.trim()
  this.image = null;
  this.imageBack = null;
  this.categoria = categoria;
}
module.exports = Product;