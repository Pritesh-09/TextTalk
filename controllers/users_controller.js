const User=require('../models/user');

module.exports.profile=function(req,res){
    return res.end('<h1>Profile</h1>');
};

module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('users/profile');
    }
    return res.render('user_sign_up');
};

module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('users/profile');
    }
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
<<<<<<< main
    //todo later
=======
    //find the user
    User.findOne({email:req.body.email}).then(function(user){
         //handle found
        if(user){
            //handle incorrect password
            if(user.password!=req.body.password){
                return res.redirect('back');
            }
            //handle session creation
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');

        }
        else{
             //handle not found
             return res.redirect('back');
        }
    }).catch(function(err){
       
        console.log("error in find user in sign-in");
    });

};
module.exports.createsession=function(req,res){
    return res.redirect('/');
>>>>>>> local
};