const express = require("express");
const app = express();
const mod = require("./checkprime");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("public/home_prime.html",{root:__dirname})
});

app.get("/submit",function(req,resp){
    var num = req.query.nm;
    var ans = mod.checkprime(num);
    if(ans == true){
        resp.send("<h2>Entered Number is not Prime! !</h2>")
    }else{resp.send("<h2>Entered Number is Prime!!</h2>")}
});



app.listen(9600);
console.log("Server staretd at 9600 http://localhost:9600/")