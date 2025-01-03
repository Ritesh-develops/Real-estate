import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.routes.js"
import authrouter from "./routes/auth.routes.js"
dotenv.config();

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})

const app = express()
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT} `)
})

app.use(express.json());

app.use("/api/user", userRouter)
app.use('/api/auth', authrouter)