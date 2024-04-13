const express = require('express');
const router = express.Router();
const {
  index,
  admin,
  cart,
  searchAdmin,
  search,
 quienesSomos,
 sucursales
} = require('../controllers/indexController');
const isAdmin = require('../middlewares/isAdmin');
isAdmin

/* / */
router
  .get('/', index)
  .get('/admin', admin)
  .get('/cart', cart)
  .get('/admin/products/search', searchAdmin)
  .get('/search', search)
  .get('/quienesSomos',quienesSomos)
  .get('/sucursales',sucursales)


module.exports = router;
