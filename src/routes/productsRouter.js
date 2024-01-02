const express = require('express');
const router = express.Router();
const { detail, edit, add, create, update, remove,} = require('../controllers/productsController');


router
  .get('/detail/:id', detail)
  .get('/editar/:id?', edit)
  .post('/crear', create)
  .get('/agregar', add)
  .put('/update/:id', update)
  .delete('/remove/:id', remove)


module.exports = router;
