
import express from "express";
import dotenv from "dotenv"

import { userRouters } from "./routes/userRouter.js"
dotenv.config({
    path:"./.env"
})
const app = express();
app.use(express.json());


app.use("/api/user",userRouters)

app.listen(process.env.PORT || 3000 , ()=> {
    console.log("port is running at port :", process.env.PORT);
})


