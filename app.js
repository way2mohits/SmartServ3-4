const express=require('express');
const bodyParser=require("body-parser");

const app=express();




app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.listen(process.env.PORT || 5000);