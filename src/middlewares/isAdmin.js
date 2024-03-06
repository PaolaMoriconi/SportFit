module.exports = (req,res,next) =>{
    console.log("session: ", req.session);
    if(req.session.userLogin &&  req.session.userLogin.rol == "admin"){
        next();
    }else{
    return res.redirect("/")
    }
}
