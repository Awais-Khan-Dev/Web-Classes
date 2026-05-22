const mongoose = require("mongoose")


// how one user will look like
const UserSchema =  mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    age: Number
})


// everthing which i can use
// user.create, user.find, user.findone etc will be in model
 const User = new mongoose.model("User", UserSchema)
 
module.exports = {User}