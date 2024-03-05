const db = require("../../database/models");
const { Op } = require("sequelize");
module.exports = async (req, res) => {
  try {
    const { categorie } = req.query;
    let products;
    if (categorie) {
      products = await db.Product.findAll({
        where: {
          category_id: categorie,
        },
      });
    } else {
      products = await db.Product.findAll();
    }
    
    return res.render("products/products", {
      products,
      user: req.session.userLogin,
    });

  } catch (error) {
    console.log(error.message);
  }
};
