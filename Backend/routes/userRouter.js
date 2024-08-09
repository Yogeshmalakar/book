import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";


const userRouters = Router()

userRouters.route("/sign-up").post(registerUser)

export {userRouters}