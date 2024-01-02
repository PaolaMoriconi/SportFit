const express = require('express');
const router = express.Router();
const {index, admin, cart, searchAdmin} = require("../controllers/indexController")

/* / */
router
.get('/', index)
.get('/admin', admin)
.get('/cart', cart)
.get('/admin/products/search', searchAdmin)



module.exports = router;
