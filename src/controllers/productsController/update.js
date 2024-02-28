const db = require("../../database/models");

module.exports = (req, res) => {
  const { nombre, precio, descuento, talles, detalleProducto, categoria } =
    req.body;
  const { id } = req.params;
  const { image, imageBack } = req.files;

  db.Product.update(
    {
      name: nombre.trim(),
      price: precio,
      discount: descuento,
      description: detalleProducto.trim(),
      category_id: parseInt(categoria)
    },
    { where: { id } }
  ).then((resp) => {
    console.log(resp);
    if (image && existsSync("public/images/" + product.image)) {
      unlinkSync("public/images/" + product.image);
    }

    if (imageBack && existsSync("public/images/" + product.imageBack)) {
      unlinkSync("public/images/" + product.imageBack);
    }

    return res.redirect(`/admin`);
  });
};
