const express = require('express');
const router = express.Router();
const {home,about,contact} = require("../controllers/indexController")

/* GET home page. */
router.get('/',home);
router.get('/nosotros',about);
router.get('/contacto',contact);


module.exports = router;
