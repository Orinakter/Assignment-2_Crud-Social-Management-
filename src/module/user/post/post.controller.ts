import type { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async(req:Request,res:Response)=>{
    try {
        // create post
        const id = req.params.id;
        const body = req.body;
        const result = await postService.createPostFromDB(body,id as string);
        

        res.status(201).json({
            success : true,
            message: "post created successfully",
            data: result
        })
        
    } catch (error) {
        console.log(error);
        
    }

}


// get all posts

const getAllPost = async(req:Request,res:Response)=>{
    try {
        const result = await postService.getAllPostFromDB()
        res.status(200).json({
            success : true,
            message : "Get all posts",
            data: result
        })
        
    } catch (error) {
        console.log(error);
        
    }

}


// get single post

const getSinglePost = async(req:Request,res:Response)=>{
    try {
        const id = req.params.id;
        const result = await postService.getSinglePostFromDB(id as string);

        res.status(200).json({
            success : true,
            message : "Get single posts",
            data: result
        })
        
    } catch (error) {
        console.log(error);
        
    }

}

// updated post

const updatePost = async(req:Request,res:Response)=>{
    try {

        const id = req.params.id;
        const body = req.body;
        const result = await postService.updatePostFromDB(body,id as string);

        res.status(200).json({
            success : true,
            message : "updated post successfully",
            data: result
        })

        
    } catch (error) {
        console.log(error);
        
    }


}


export const postController = {
    createPost,
    getAllPost,
    getSinglePost,
    updatePost
}