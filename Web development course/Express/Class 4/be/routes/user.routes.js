import { Router } from "express";
import { login, signup,profile,logout,  updateProfile, updateProfilePic } from "../controller/user.controller.js";
import upload from "../config/multerConfig.js";
import authCheck from "../middlewares/authCheck.js";

const userRouter = Router()

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.get("/profile", authCheck, profile)
userRouter.put("/update-profile", authCheck, updateProfile)
userRouter.put("/update-profile-pic", authCheck, upload.single("image"), updateProfilePic)
userRouter.get("/logout", authCheck, logout)


export default userRouter           