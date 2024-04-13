 const db = require("../../database/models");
const { existsSync, unlinkSync } = require("fs");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await db.Product.findByPk(id);
    existsSync("public/images/" + product.image) && unlinkSync("public/images/" + product.image);
    await product.destroy();
    return res.redirect("/admin");
  } catch (error) {
    console.log("error:",error);
    return res.redirect("/admin");
  }
};
