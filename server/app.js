const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')

//NaIVHnKmbRxbcWwk

require('./models/user')

app.use(express.json());
app.use(require('./routes/auth'))


mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log("Connected to Mongo");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to Mongo");
});

app.listen(PORT,()=>{
    console.log("Home")
    console.log("Server is running on",PORT)
})

/*const customMiddleware = (req,res,next)=>{ //syntax to use middleware
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
*/