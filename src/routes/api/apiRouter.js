const express = require('express');

const router = express.Router();
const { getAllProducts, updateSizes, addImage, removeImage } = require('../../controllers/api/productApi');
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
 



module.exports = router;
