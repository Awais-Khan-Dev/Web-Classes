// import express from "express" // module js
const express = require("express") // common js

const app = express()
app.use(express.json()) // it is use to decode json which comes from frontend

// how to pass input in body (input, text area)
app.post("/user/login", (req, res)=>{
    // const data = req.body;
    const {email, password} = req.body
    console.log(email);
    res.json({
        mssg: "User LoggedIn Successfully"
    })
})
// how to pass data in headers
app.get("/home", (req, res)=>{
    const token = req.headers["authorization"]
    console.log(token);
    res.json({
        data: {
           mssg:  "how are you here is your data"
        }
    })
})

app.listen(3000)





