const express = require("express")
const mongoose = require("mongoose")
const { User } = require("./userModel")
const app = express()
app.use(express.json())

async function connectToDatabase(){
    try {
        await mongoose.connect("mongodb://localhost:27017/firstApp")

    } catch (error) {
        console.log("Error while connecting to db", error.message);   
    }
}
connectToDatabase()

app.get("/user/signup", async (req, res)=>{
    const {username, password, firstName, lastName, age} = req.body
    if(!username || !password){
        res.status(404).json({
            mssg: "Email and password required"
        })
    }
    const newUser = await User.create({
        username, password, firstName, lastName,
        age: Number(age)
    })
    res.json({
        newUser
    })

})
app.listen(3000)