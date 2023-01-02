const express=require('express')
const app=express()

app.get('/home',function(req,resp){
    resp.sendFile("public/index.html",{root:__dirname})
})

app.listen(5000,'0.0.0.0',()=>{
    console.log("server started at port 5000")

})