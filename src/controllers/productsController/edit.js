const db = require("../../database/models");

module.exports =  (req, res) => {
  const { id } = req.params;
  const talles = db.Size.findAll();
  const colores = db.Color.findAll();
  const categorias = db.Category.findAll();
  const marcas = db.Brand.findAll();
  const product = db.Product.findByPk(id,{include:{association:'images'}});

  Promise.all([talles, colores, categorias, marcas, product]).then(
    ([talles, colores, categorias, marcas, product]) => {
      console.log(product.dataValues);
      res.render("products/productEdit", {
        product,
        marcas,
        talles,
        colores,
        categorias,
        user: req.session.userLogin,
      });
    }
  );
};
