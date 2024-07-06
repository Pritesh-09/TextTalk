const User=require('../models/user');

module.exports.profile=function(req,res){
    return res.end('<h1>Profile</h1>');
};

module.exports.signUp=function(req,res){
    return res.render('user_sign_up');
};

module.exports.signIn=function(req,res){
    return res.render('user_sign_in');
};

//get the sign up data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email}).then(function(user){
            if(!user){
                User.create(req.body).then(()=>{return res.redirect('/users/sign-in');}).catch(function(err){
                    console.log("eroor in creation")
                }
                );
                
            }
            else{
                return res.redirect('back');
            }
        
    }).catch(function(err){
        console.log("eroor in creation")
    }
    );
    
};



//signIn and create  session
module.exports.createSession=function(req,res){
    //todo later
};