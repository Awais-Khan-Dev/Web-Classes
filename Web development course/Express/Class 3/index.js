const express = require("express");
const { User } = require("./user.model");
const  jwt  = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const app = express()
app.use(express.json())

async function  DBConnection() {
    const connection = await mongoose.connect("mongodb://localhost:27017/AuthApp")

    if(connection){
        console.log("DB CONNECTED SUCESSFULLY");   
    }
}

 function authCheckMiddleware(req, res, next){
    const token = req.headers["authorization"].split(" ")[1]
    // const token = req.headers["authorization"];

    // [Bearer, adjfaldsfja]
    
     const verifyToken =   jwt.verify(token, "123")

    if(!verifyToken){
        res.status(404).json({
            mssg: "You are not authorize please login"
        })
    }
    
    req.user = verifyToken

    next()
 }

DBConnection()

app.post("/signup",  async (req, res)=>{
    const {email, password, fullName, age} = req.body;

    if(!email || !password || !fullName || !age){
        res.status(404).json({
            mssg: "All Fields are required"
        })
    }

    const alreadyCreatedUser = await User.findOne({email})

    if(alreadyCreatedUser){
         res.status(300).json({
            mssg: "Account Aleardy created please login"
        })
    }

    const newUser = await User.create({
        email,
        password,
        fullName,
        age
    })

    if(!newUser){
         res.status(500).json({
            mssg: "Error while creating user"
        })
    }

    res.status(200).json({
        mssg: "User Created Successfully",
        user: newUser
    })
})

app.post("/login", async (req, res) =>{
    const {email, password} = req.body;

     if(!email || !password){
        res.status(404).json({
            mssg: "All Fields are required"
        })
    }

     const alreadyCreatedUser = await User.findOne({email})

    if(!alreadyCreatedUser){
         res.status(302).json({
            mssg: "Please Create Account First"
        })
    }

    const data = {
        email: alreadyCreatedUser.email,
        fullName: alreadyCreatedUser.fullName,
        age: alreadyCreatedUser.age,
        id: alreadyCreatedUser._id
    }

    const token = jwt.sign(data, "123") // aerjasldfjlasdjfljasdfl

    res.status(200).json({
        mssg: "Loggedin successfully",
        token
    })
})

app.get("/profile",authCheckMiddleware, (req, res) =>{
    res.json({
       user: req?.user
    }) 
})

app.listen(3000)