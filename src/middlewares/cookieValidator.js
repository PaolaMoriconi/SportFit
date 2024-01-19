const { log } = require("console");

const cookieValidator = (req,res,next) => {
    if(req.cookies.remember){
        req.session.user = req.cookies.user;
    }
    next();
}

module.exports = cookieValidator;