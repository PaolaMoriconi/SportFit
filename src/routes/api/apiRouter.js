const express = require('express');

const router = express.Router();
const { getAllProducts } = require('../../controllers/api/productApi');
const { checkEmail } = require('../../controllers/api/userApi');
const { checkPassword } = require('../../controllers/api/loginApi.');


/* /apis */
router
  .get('/allproducts', getAllProducts)
  .get("/users/checkemail", checkEmail )
  .get("/users/checkpassword", checkPassword )
 



module.exports = router;
