const express = require('express');
const app = express();
app.set('view engine','ejs')
app.get('/',(req,res,)=>{
    console.log('Here');
    // res.status(200).send('Hi');
    // res.download("server.js");
    res.render("index",{ text:' World'})
   
})

app.get('/users',(req,res)=>{
res.send ("User list")
})

app.get('/users/new',(req,res)=>{
res.send ("User New form")
})

app.listen(3000);