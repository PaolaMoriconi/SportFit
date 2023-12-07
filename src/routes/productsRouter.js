const express = require('express');
const router = express.Router();
const { detail, edit, add, cart } = require('../controllers/productsController')


router
.get('/detail/:id', detail)
.get('/editar/:id?', edit)
.get('/agregar', add)
.get('/cart', cart)

module.exports = router;
