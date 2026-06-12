import express, { type Application, type Request, type Response } from "express";

const app:Application = express();


// middleware

app.use (express.json())


// Root Route

app.get("/",(req:Request,res:Response)=>{

    res.status(200).json({
        success: true,
        message: "This is root route",
        data:{}
    })

})









export default app;









