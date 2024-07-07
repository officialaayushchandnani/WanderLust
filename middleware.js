
const isLoggedIn=(req,res,next)=>{
    console.log(req.user);
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","Please Login First ");
         return res.redirect("/login");
      }
      next();
};

module.exports=isLoggedIn;