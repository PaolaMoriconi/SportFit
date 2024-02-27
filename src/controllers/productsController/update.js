const { leerJSON, escribirJSON } = require("../../data");
const { existsSync, unlinkSync } = require('fs')

module.exports = (req,res) => {

    const {nombre, precio,descuento, talles, detalleProducto, categoria } = req.body
    const {id} = req.params
    const { image, imageBack } = req.files

    const products = leerJSON('productos');

    const produtsUpdated = products.map(product => {
       
        if(product.id == id){


           if (image && existsSync('public/images/' + product.image)) {
             unlinkSync('public/images/' + product.image)
           }

           if (imageBack && existsSync('public/images/' + product.imageBack)) {
             unlinkSync('public/images/' + product.imageBack)
           }
           

            product.nombre = nombre.trim();
            product.precio = precio;
            product.descuento = descuento;
            product.talles = talles          
            product.detalleProducto = detalleProducto.trim();       
            product.image = image ? image[0].filename : product.image
            product.imageBack = imageBack ? imageBack[0].filename : product.imageBack
            product.categoria = categoria;
              
              
        }
        return product

    })
  


    escribirJSON(produtsUpdated, 'productos')

    return res.redirect(`/admin`)


}