const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        unique: true,
        required:true
    },
    fullName:{
        type: String,
    },
    password:{
        type: String, 
        required: true
    },

    age:{
        type: Number
    },
    token:{
        type: String
    }

})

const User = mongoose.model("User", userSchema)

module.exports = {
    User
}