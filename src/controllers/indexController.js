const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  index: async function (req, res) {
    
    const products = await db.Product.findAll({ include: [{association: "images"}]})
    const brands = await db.Brand.findAll()

    return res.render("index", {
        products,
        brands,
        user: req.session.userLogin,
      });
  },
  admin: (req, res) => {

    const products = db.Product.findAll({
      include: [
        {
          association: "images",
        },
        {
          association: "categories",
        },
        {
          association : 'sizes'
        }
      ],
    })
    
    const sizes = db.Size.findAll()
    
    Promise.all([products,sizes])
    .then(([products, sizes]) => {
      return res.render("dashboard", {
        products,
        sizesList : sizes,
        user: req.session.userLogin,
      });
    });
  },
  cart: (req, res) => {
    db.Product.findAll().then((products) => {
      const total = products.reduce((n1, n2) => n1 + n2.price, 0);

      const envio = 10000;

      res.render("products/carritoCompras", {
        products,
        user: req.session.userLogin,
        total,
        envio,
      });
    });
  },
  searchAdmin: (req, res) => {
    const { keyword } = req.query;
    db.Product.findAll({
      include: [
        {
          association: "images",
        },
        {
          association: "categories",
        },
      ],
      where: {
        name: { [Op.substring]: keyword },
      }
    }).then((products) => {
      console.log("buscador admin: ",products);
      return res.render("dashboard", {
        products,
        keyword,
        user: req.session.userLogin,
      });
    });
  },
  search: (req, res) => {
    const { keyword } = req.query;
    db.Product.findAll({
      include: [
        {
          association: "images",
        },
        {
          association: "categories",
        },
      ],
      where: {
        name: { [Op.substring]: keyword },
      }}).then((products) => {
      return res.render("products/productResult", {
        products,
        keyword,
        user: req.session.userLogin,
      });
    });
  },
};
