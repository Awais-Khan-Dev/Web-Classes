const express = require("express")

const app = express()
app.use(express.json())

const ALL_USER = [
    {
        userId: 1,
        userToken: 123,
        email: "baga077",
        password: "12345678"
    }
]
app.post("/user/signup", (req, res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        res.status(404).json({
            error: "Email and password is required"
        })
    }
    ALL_USER.push({email, password, userId: Date.now(), userToken: Date.now()})

    console.log(ALL_USER);
    
    res.status(200).json({
        mssg: "Account created Successfully"
    })
})
app.post("/user/login", (req, res)=>{
    const {email, password} = req.body;
     if(!email || !password){
        res.status(404).json({
            error: "Email and password is required"
        })
    }

    ALL_USER.forEach(singleUser=>{
        if(singleUser.email == email && singleUser.password == password){
            res.json({
                token: singleUser.userToken
            })
        }
    })

    res.json({
        error: "Please enter valid email and password"
    })
})

app.get("/profile", (req, res) =>{
    const token = req.headers["authorization"]

    if(!token){
        res.status(404).json({
            error: "Un Authorized user"
        })
    }

    ALL_USER.forEach(singleUser => {
        if(singleUser.userToken == token){
            res.json({
                user: {email: singleUser.email,
                userId: singleUser.userId,
                token: singleUser.userToken}
            })
        }
    })

       res.status(404).json({
            error: "Un Authorized user"
        })

} )
app.listen(3001)