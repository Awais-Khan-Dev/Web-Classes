import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        
    const connection = await mongoose.connect("mongodb://localhost:27017/todo")
    if (connection) {
        console.log("APP IS CONNECTED TO DB");
        
    }
    } catch (error) {
        console.log("ERROR WHILE CONNECTING TO DB");
        
    }
}