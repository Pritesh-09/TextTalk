const express=require('express');
const cookieParser=require('cookie-parser');
const path=require('path');
const Port=8000;

const app=express();
const db=require('./config/mongoose');
const exp = require('constants');

app.use(express.urlencoded());
app.use(cookieParser());
app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','views');
// app.get('/',function(req,res){
//     res.render('home');
// });

app.listen(Port,function(){
    console.log("Running at Port:8000");
});