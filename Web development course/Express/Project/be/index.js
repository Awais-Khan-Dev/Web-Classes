import express from "express"
import { connectDB } from "./db/db.js"
import { User } from "./model/user.model.js"
import { Todo } from "./model/todo.model.js"

const app = express()
app.use(express.json())
connectDB()

app.post("/user/create", async (req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(404).json({
            mssg: "Please provide email and Password"
    })}
    const newUser = await User.create({
        email,
        password
    })
    res.status(404).json({
        newUser
    })
})

app.get("/todos", async (req, res)=>{
    const {email} = req.body;

    if(!email){
        res.status(404).json({
            mssg: "Please login"
        })
    }

    const user = await User.findOne({email}).populate("todos")
    if(!user){
         res.status(404).json({
            mssg: "Please login"
        })
    }
    res.status(200).json({
        todos: user.todos
    })
})

app.delete("/todo/:id", async (req, res)=>{
    const id = req.params.id;
    if(!id){
        res.status(404).json({
            mssg: "Invalid ID"
        })
    }
    await Todo.findByIdAndDelete(id)

    res.status(200).json({
        mssg: "Todo Deleted Successfully"
    })

})

app.put("/todo/:id", async (req, res)=>{
     const id = req.params.id;
     const {todoText} = req.body
    if(!id){
        res.status(404).json({
            mssg: "Invalid ID"
        })
    }
    await Todo.findByIdAndUpdate(id, {completed: true, text: todoText})

    res.status(200).json({
        mssg: "Todo Updated Successfully"
    })
})

app.listen(3000, ()=>{
    console.log("APP IS LISTNING ON PORT 3000");
})