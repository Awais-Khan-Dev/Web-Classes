const express = require("express")

const app = express()

// mongodb community version
// compass

function myMiddleware(req, res, next){
    console.log("Middleware");
   next()  
}
function authCheck(req, res, next){
    const token = req.headers["authorization"]
    if(!token){
        res.status(404).json({
            mssg: "Invalid User"
        })
    }
    next()
}
app.use(myMiddleware)

app.get("/",  (req, res)=>{
    console.log("this is home");
    
    res.json(
       { mssg: "hello"}
    )
})

app.get("/profile", authCheck, (req, res)=>{
        res.json({
            user:{
                username: "baga",
                profileImage: "https://image.com/"
            }
        })
})

app.listen(3000)