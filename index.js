const express=require('express');
const cookieParser=require('cookie-parser');
const path=require('path');
const Port=8000;

const app=express();
const db=require('./config/mongoose');
const exp = require('constants');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


app.use(express.urlencoded());
app.use(cookieParser());


app.set('view engine','ejs');
app.set('views','views');
// app.get('/',function(req,res){
//     res.render('home');
// });
app.use(session({
    name:'TextTalk',
    //ToDo
    secret:"something",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes/index'));


app.listen(Port,function(){
    console.log("Running at Port:8000");
});