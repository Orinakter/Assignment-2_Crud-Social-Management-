import express, { type Application, type Request, type Response } from "express";
import { userRouter } from "./module/user/user.route";
import { userInitDB } from "./db/userDB.init";

const app:Application = express();


// middleware

app.use (express.json());


// Routing middleware

app.use("/api/users",userRouter)



// Root Route

app.get("/",async(req:Request,res:Response)=>{

    userInitDB()

    try {

        res.status(200).json({
        success: true,
        message: "This is root route"
       
    })
        
    } catch (error) {
        console.log(error);
        
    }

})









export default app;









