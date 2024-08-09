import { Router } from "express";
import { registerUser } from "../controler/users.controler.js";


const router = Router()

router.route("/sign-up").post(registerUser)