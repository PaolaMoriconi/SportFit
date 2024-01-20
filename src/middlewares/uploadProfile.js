const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/users/'))
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(
      null,
      path.basename(file.originalname,path.extname(file.originalname)) + '-' + uniqueSuffix + path.extname(file.originalname)
    )
  },
})

const uploadProfile = multer({ storage })

module.exports = uploadProfile
