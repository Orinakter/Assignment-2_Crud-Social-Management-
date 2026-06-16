import type { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async(req:Request,res:Response)=>{
    try {
        const body = req.body;
        const result = await userService.userServiceIntoDB(body)

        res.status(201).json({
            success:true,
            message:"User create successfully",
            data:result

        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const userController = {
    createUser
}