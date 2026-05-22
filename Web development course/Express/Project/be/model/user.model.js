import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    todos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]
})

export const User =  mongoose.model("User", userSchema)