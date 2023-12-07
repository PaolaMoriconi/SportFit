const express = require('express');
const router = express.Router();
const {index, admin, searchAdmin} = require("../controllers/indexController")

/* / */
router
  .get('/',index)
  .get('/admin',admin)



module.exports = router;
