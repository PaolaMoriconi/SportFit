const express = require('express');

const router = express.Router();
const { getAllProducts, updateSizes } = require('../../controllers/api/productApi');
const { checkEmail } = require('../../controllers/api/userApi');
const { checkPassword } = require('../../controllers/api/loginApi.');


/* /apis */
router
  .get('/allproducts', getAllProducts)
  .post('/products/update-sizes', updateSizes)
  .get("/users/checkemail", checkEmail )
  .get("/users/checkpassword", checkPassword )
 



module.exports = router;
