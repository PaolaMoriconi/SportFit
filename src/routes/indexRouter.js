const express = require('express');
const router = express.Router();
const {
  index,
  admin,
  cart,
  searchAdmin,
  search,
} = require('../controllers/indexController')


/* / */
router
  .get('/', index)
  .get('/admin', admin)
  .get('/cart', cart)
  .get('/admin/products/search', searchAdmin)
  .get('/search', search)



module.exports = router;
