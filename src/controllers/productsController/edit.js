const db = require("../../database/models");

module.exports = (req, res) => {
  const { id } = req.params;

  db.Product.findByPk(id,{
    include:[{association:"categories"}]
  }).then((resp) => {
    console.log("product: ",resp)
    res.render("products/productEdit", {
      product:resp,
      user: req.session.userLogin,
    });
  });
};
