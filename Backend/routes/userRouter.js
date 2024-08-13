import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";


const userRouters = Router()

userRouters.route("/register").post(registerUser)

export {userRouters}