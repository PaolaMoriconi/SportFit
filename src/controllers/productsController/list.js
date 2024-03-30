const db = require("../../database/models");
const { Op } = require("sequelize");
module.exports = async (req, res) => {
  try {
    const { categorie } = req.query;

    const category = await db.Category.findByPk(categorie)
    
    let query = {include:{association:'images'}};

    if (categorie) {
      query.where = {
          category_id: categorie,
        }
      }

    const products = await db.Product.findAll(query);
    
    return res.render("products/products", {
      products,
      category : category ? category.name : null, 
      user: req.session.userLogin,
    });

  } catch (error) {
    console.log(error.message);
  }
};
