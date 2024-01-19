const { leerJSON } = require("../../data");

module.exports = (req,res) => {

    const {id} = req.params;
    const products = leerJSON('productos');

    const product = products.find((product) => product.id == id);

    return res.render('products/productEdit',{
        product,user:req.session.user
    })
}