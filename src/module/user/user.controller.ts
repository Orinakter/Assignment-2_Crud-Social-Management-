import type { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async(req:Request,res:Response)=>{
    try {
        // user post

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


// get all users

const getAllUser = async(req:Request,res:Response)=>{

    try {
        const result = await userService.getAllUserFromDB()

        res.status(200).json({
            success:true,
            message:"Get all user successfully",
            data: result

        })

      
    } catch (error) {
        console.log(error);
    }

}


// get single users

const singleUser = async(req:Request,res:Response)=>{

    try {
        const id = req.params.id;
        const result = await userService.singleUserFromDB(id as string)

        res.status(200).json({
            success:true,
            message:"single user created successfully",
            data: result

        })
        
    } catch (error) {
        console.log(error);
        
    }

}


// patch users


const updateUser = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const result = await userService.updateUserFromDB(body,id as string);

        res.status(200).json({
            success: true,
            message:"User update successfully",
            data:result
        })
        
    } catch (error) {
        console.log(error);
        
    }
}


// delete users

const deleteUser = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id;
        const result = await userService.deleteUserFromDB(id as string);

        res.status(200).json({
            success: true,
            message:"User deleted successfully",
            data:result
        })

        
    } catch (error) {
        console.log(error);
        
    }

}





export const userController = {
    createUser,
    getAllUser,
    singleUser,
    updateUser,
    deleteUser
}