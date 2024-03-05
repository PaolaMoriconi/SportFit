const db = require("../database/models")
const { Op } = require("sequelize")
const { leerJSON } = require('../data')

module.exports = {
  index: function (req, res) {
    db.Product.findAll()
    .then(products =>{
      return res.render('index', {
        products,user:req.session.userLogin
      })
      
    })
  },
  admin: (req, res) => {
    db.Product.findAll({
      include:["categories"]
    })
    .then(products =>{
      return res.render('dashboard', {
        products,user:req.session.userLogin
      })
      
    })
  },
 
cart: (req,res)=>{
  db.Product.findAll()
  .then(products =>{
     
  res.render('products/carritoCompras', {
    products,user:req.session.userLogin
  })
  }) 
    },


  searchAdmin: (req, res) => {
    const { keyword } = req.query

    db.Product.findAll({
      where:{
        name:{[Op.substring] : keyword

        }

      },
      include:["categories"]
    })
    .then(products=>{
      return res.render("dashboard",{products,keyword,user:req.session.userLogin})
    })


  },
  search :(req, res) => {
    const { keyword } = req.query

    db.Product.findAll({
      where:{
        name:{[Op.substring] : keyword

        }

      },
      include:["categories"]
    })
    .then(products=>{
      return res.render("index",{products,keyword,user:req.session.userLogin})
    })


  }

}
