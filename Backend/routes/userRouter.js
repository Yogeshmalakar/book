import { Router } from "express";
import { registerUser , loginUser} from "../controller/user.controller.js";


const userRouters = Router()

userRouters.route("/sign-up").post(registerUser)

userRouters.route("/login").post(loginUser)


export {userRouters}