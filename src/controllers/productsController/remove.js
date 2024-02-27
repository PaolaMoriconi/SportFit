const { leerJSON, escribirJSON } = require("../../data");
const {existsSync, unlinkSync} = require('fs')
module.exports = (req,res) => {

    const {id} = req.params;
    const products = leerJSON('productos');


    const {image, imageBack} = products.find(product => product.id == id)
    existsSync('public/images/' + image) && 
    unlinkSync('public/images/' + image)

    existsSync('public/images/' + imageBack) &&
    unlinkSync('public/images/' + imageBack)

    

    const productosFiltrados = products.filter(product => product.id != id);

    escribirJSON(productosFiltrados, 'productos')

    return res.redirect('/admin')


}