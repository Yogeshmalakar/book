import { Router } from "express";
import { registerUser , loginUser} from "../controller/user.controller.js";


const userRouters = Router()

userRouters.route("/registerUser").post(registerUser)

userRouters.route("/login").post(loginUser)


export {userRouters}