const path = require("path")
const { leerJSON, escribirJson } = require('../data')
const { v4: uuidv4 } = require('uuid');

const productsController = {
  detail: (req, res) => {
    const { id } = req.params
    const products = leerJSON('productos')
    const product = products.find((elemento) => elemento.id == id)
    res.render('./products/producDetail', { product })
  },

  edit: (req, res) => {
    const { id } = req.params
    return res.render('./products/productEdit')
  },
  add: (req, res) => {
    return res.render('products/productAdd')
  },
  store:(req,res)=>{
    
    const {name, precio, decuento, talles, categoria, description} = req.body;
    const image = req.file;
    const id = uuidv4();
    const products = leerJSON('productos')
    const producto = {
      id,
      name:name.trim(),
      precio,
      decuento,
      talles,
      categoria,
      description: description.trim(),
      image:image.filename
    }

    products.push(producto);
    escribirJson('productos', products);
    res.redirect(`/products/detail/${id}`)

  },
  cart: (req, res) => {
    res.render('./products/carritoCompras')
  },

  
}

module.exports = productsController;
