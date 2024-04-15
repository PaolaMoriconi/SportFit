const db = require("../../database/models")
const { Op } = require("sequelize")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = (req, res) => {
  
  const { id } = req.params

  const product =  db.Product.findByPk(id,{include:['images','brand', 'sizes']})
  const sizes = db.Size.findAll();
  Promise.all([product,sizes])
  .then(([product,sizes]) =>{
    console.log(product);
    db.Product.findAll({
      where :{
        category_id : product.category_id
      },
      include : ['images','brand']
    }).then(related => {
      
      return res.render('products/productDetail', {
        product,
        sizes,
        user:req.session.userLogin,
        toThousand,
        related
      })
    })
  })
  .catch(error => console.log(error))

}
