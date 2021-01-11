const mongoose = require('mongoose')
<<<<<<< HEAD
const {ObjectId} = mongoose.Schema.Types
=======
const {objectId} = mongoose.Schema.Types
//const {ObjectID} = mongoose.Schema.Types 
>>>>>>> 64f42423ff278c64f4ee877ad01df5324815ac4b

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    
    photo:{
        type: String,
        required: true 
    },
    postedBy:{
        type: ObjectId,
        ref: "User"
    }
})

<<<<<<< HEAD
mongoose.model("Post", postSchema)
=======
module.exports = mongoose.model("Post", postSchema)

>>>>>>> 64f42423ff278c64f4ee877ad01df5324815ac4b
