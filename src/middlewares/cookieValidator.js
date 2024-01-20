const cookieValidator = (req,res,next) => {
    if(req.cookies.remember){
        req.session.userLogin = req.cookies.user;
    }
    next();
}

module.exports = cookieValidator;