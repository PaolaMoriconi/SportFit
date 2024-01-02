const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
         cb(null,path.join(__dirname,'/../../public/images'))
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.originalname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({storage});

const { detail, edit, add, cart, store } = require('../controllers/productsController')


router
.get('/detail/:id', detail)
.get('/editar/:id?', edit)
.get('/agregar', add)
.post('/agregar', upload.single('image'),store)
.get('/cart', cart)

module.exports = router;
