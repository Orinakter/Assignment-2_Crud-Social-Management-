import express, { type Application, type Request, type Response } from "express";
import { userRouter } from "./module/user/user.route";
import { userInitDB } from "./db/userDB.init";
import { postInitDB } from "./db/postDB.init";
import { postRouter } from "./module/user/post/post.route";

const app:Application = express();


// middleware

app.use (express.json());


// Routing middleware

app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);



// Root Route


app.get("/",async(req:Request,res:Response)=>{
    
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









