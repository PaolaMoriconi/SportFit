const db = require("../../database/models");
const { existsSync, unlinkSync } = require("fs");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await db.Product.findByPk(id);
    console.log(product.image)
    existsSync("public/images/products/" + product.image) && unlinkSync("public/images/products/" + product.image);
    
    await product.destroy();
    return res.redirect("/admin");
  } catch (error) {
    console.log(error.message);
    return res.redirect("/admin");
  }
};
