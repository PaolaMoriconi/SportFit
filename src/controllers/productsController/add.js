module.exports = (req,res) => {
    return res.render('products/productAdd',{user:req.session.user})
}