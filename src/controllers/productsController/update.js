const db = require("../../database/models");
const fs = require("fs");
module.exports = async (req, res) => {
  const { nombre, precio, descuento, talles, detalleProducto, categoria } =
    req.body;
  const { id } = req.params;
  const { image } = req.files;

  const product = await db.Product.findByPk(id);

  if (
    image && image[0].filename != product.image &&
    fs.existsSync("public/images/" + product.image)
  ) {
    fs.unlinkSync("public/images/" + product.image);
  }
  console.log("body: ",req.body);
  console.log("image: ",image[0]);

  await product.update(
    {
      name: nombre.trim(),
      price: precio,
      discount: descuento,
      description: detalleProducto.trim(),
      category_id: parseInt(categoria),
      image: image ? image[0].filename : product.image 
    },
    { where: { id } }
  );

  product.save()

  return res.redirect(`/admin`);
};
