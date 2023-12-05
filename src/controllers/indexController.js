const path = require("path")
const { leerJSON } = require(path.join(__dirname, "../../data/index.js"));

module.exports = {
    index :  function(req, res) {
        
        const products = leerJSON('productos');
       

        return res.render('index', { 
            products
           
        });
      }}

