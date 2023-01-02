const express = require('express');
const app =express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/',(req,resp)=>{
    resp.sendFile('public/Feedback.html',{root:__dirname})
})

app.get('/HomePage',(req,resp)=>{
    resp.sendFile('public/Feedback-HomePage.html',{root:__dirname})
})

app.get('/ForgotPass',(req,resp)=>{
    resp.sendFile('public/Feedback-ForgotPass.html',{root:__dirname})
})





app.listen(6969);
console.log("Feedback Server Started at port no: 6969")
