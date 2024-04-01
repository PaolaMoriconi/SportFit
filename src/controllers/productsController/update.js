const db = require("../../database/models");
const fs = require("fs");
module.exports = async (req, res) => {
  const {
    nombre,
    precio,
    descuento,
    talle,
    marca,
    color,
    categoria,
    detalleProducto,
    section,
  } = req.body;
  const { id } = req.params;
  const images = req.files;
  console.log("images: ",images);
  const product = await db.Product.findByPk(id,{include:{association:"images"}});
  console.log("product: ", product);
  //Verifico si se subieron imagenes para el producto, si es asi elimino las imagenes anteriores y sus registros;
  if (images.length > 0) {
    //Busco las imagenes del producto
    const oldImages = await db.Image.findAll({
      where: { product_id: product.id },
    });

    //Elimino los archivos y los registros
    oldImages.forEach((image) => {
      fs.existsSync("public/images/products/" + image.name) &&
        fs.unlinkSync("public/images/products/" + image.name, (err) => {
          console.log("Se borro la imagen " + image.name);
        });
      image.destroy();
    });

    //Creo los nuevos registros

    const grupoImagenes = images.map((element) => {
      return { name: element.filename, product_id: product.id };
    });

    await db.Image.bulkCreate(grupoImagenes);
  }
  //Actualizo el producto y lo redirecciono al detalle
  await product.update(
    {
      name: nombre.trim(),
      price: precio,
      discount: descuento,
      description: detalleProducto.trim(),
      category_id: parseInt(categoria),
      brand_id: parseInt(marca),
      color_id: parseInt(color),
      size_id: parseInt(talle),
      section_id: parseInt(section),
    },
    { where: { id } }
  );

  product.save();

  return res.redirect(`/products/detail/${product.id}`);
};
