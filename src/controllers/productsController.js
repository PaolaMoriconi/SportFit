const path = require("path")
const { leerJSON } = require(path.join(__dirname, "../../data/index.js"));

const productsController = {
  detail: (req, res) => {
    const { id } = req.params;
    const products = leerJSON('productos');
    const product = products.find((elemento) => elemento.id == id);
    res.render("./products/producDetail", { product });
  },
};

module.exports = productsController;
