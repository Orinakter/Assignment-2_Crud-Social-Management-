import type { Request, Response } from "express"
import { authService } from "./auth.service";

const loginUser = async(req:Request,res:Response)=>{
    try {

        const body = req.body;
    const result = await authService.createAuthServiceIntoDB(body);

    res.status(201).json({
        success: true,
        message: "User login successfully",
        data: result
    })
        

    } catch (error) {
        console.log(error);
        
    }

}


export const authController = {
    loginUser
}