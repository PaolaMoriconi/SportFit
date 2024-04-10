const express = require('express');

const router = express.Router();
const { getAllProducts, updateSizes, addImage, removeImage, getSelectsColor, getSelectsBrands, getSelectsCategory, getProduct } = require('../../controllers/api/productApi');
const { checkEmail } = require('../../controllers/api/userApi');
const { checkPassword } = require('../../controllers/api/loginApi.');
const upload = require('../../middlewares/uploadProduct');


/* /apis */
router
  .get('/allproducts', getAllProducts)
  .post('/products/update-sizes', updateSizes)
  .post('/images', upload.any(), addImage)
  .delete('/images', removeImage)
  .get("/users/checkemail", checkEmail )
  .get("/users/checkpassword", checkPassword )
  .get("/getSelectsColor",getSelectsColor)
  .get("/getSelectsBrands",getSelectsBrands)
  .get("/getSelectsCategory",getSelectsCategory)
  .get('/oneproduct/:id', getProduct)
 



module.exports = router;
