function logger(req,res,next){
    console.log("message is logged");
    console.log(req.body);    
    next();
};

module.exports=logger;