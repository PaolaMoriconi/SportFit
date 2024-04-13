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
        },
        {
          association : 'subcategories'
        }
        
      ],
    })
    
    const sizes = db.Size.findAll()
    
    Promise.all([products,sizes])
    .then(([products, sizes]) => {
      console.log("products: ",products[0])
      console.log("sizes: ",sizes[0])
      return res.render("dashboard", {
        products,
        sizesList : sizes,
        user: req.session.userLogin,
      });
    });
  },
  cart: async (req, res) => {
    const products = await db.Product.findAll({include:{association:'images'}})
  
  // res.send(products)
  res.render('products/carritoCompras', {
    products:products,
    user:req.session.userLogin,
    total : products.reduce(
      (accumulator, currentValue) => accumulator.price + currentValue.price,0),
    envio: 3000
  })
}
  ,

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
  quienesSomos:(req, res) => {
      return res.render("quienesSomos")
  },
  sucursales:(req, res) => {
    return res.render("sucursales")
},
};
