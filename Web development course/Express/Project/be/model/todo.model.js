import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    text: String,
    completed: {
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

export const Todo = mongoose.model("Todo", todoSchema)