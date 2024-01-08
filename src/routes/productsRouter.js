const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload')
const {
  detail,
edit,
store,
add,
update,
remove}  = require('../controllers/productsController')


router
  .get('/detail/:id', detail)
  .get('/editar/:id?', edit)
  .post(
    '/crear',
    upload.fields([{ name: 'image' }, { name: 'imageBack' }]),
    store
  )
  .get('/agregar', add)
  .put(
    '/update/:id',
    upload.fields([{ name: 'image' }, { name: 'imageBack' }]),
    update
  )
  .delete('/remove/:id', remove)


module.exports = router;
