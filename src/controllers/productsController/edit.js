const db = require("../../database/models");

module.exports = (req, res) => {
  const { id } = req.params;
  const talles = db.Size.findAll({
    order : ['id'],
    });
  const colores = db.Color.findAll({
        order : ['name']
    });
  const categorias = db.Category.findAll({
        order : ['name']
    });
    const subcategorias = db.Subcategorie.findAll({
      order : ['name']
  });
  const marcas = db.Brand.findAll({
        order : ['name']
    });
  const product = db.Product.findByPk(id,{include:{association:'images'}});
  const sections = db.Section.findAll({
        order : ['name']
    });
  const productSizes = db.ProductSize.findAll({
    raw: true,
    where: {
      product_id : id,
    }
  });

  Promise.all([talles, colores, categorias, subcategorias, marcas, product, sections, productSizes]).then(
    ([talles, colores, categorias, subcategorias, marcas, product, sections, productSizes]) => {
      console.log(product.dataValues);
      res.render("products/productEdit", {
        product,
        marcas,
        talles,
        colores,
        categorias,
        subcategorias,
        sections,
        productSizes,
        user: req.session.userLogin,
      });
    }
  );
};
