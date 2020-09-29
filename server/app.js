const express = require('express')
const app = express()
const PORT = 5000

const customMiddleware = (req,res,next)=>{ //syntax to use middleware
    console.log("middleware executed!")
    next()
}

//app.use(customMiddleware)  //syntax to run middleware for all route handlers

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/page2', customMiddleware,(req, res) => { //syntax for middleware to run for a specific route handler
    res.send("Welcome to Page 2")
})

app.listen(PORT,()=>{
    console.log("Home")
    console.log("Server is running on",PORT)
})