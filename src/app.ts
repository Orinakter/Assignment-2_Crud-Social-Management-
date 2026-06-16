import express, { type Application, type Request, type Response } from "express";
import { userRouter } from "./module/user/user.route";

const app:Application = express();


// middleware

app.use (express.json());


// Routing middleware

app.use("/api/users",userRouter)



// Root Route

app.get("/",(req:Request,res:Response)=>{

    res.status(200).json({
        success: true,
        message: "This is root route",
        data:{}
    })

})









export default app;









