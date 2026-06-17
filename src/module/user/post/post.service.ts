import { pool } from "../../../db/pool"
import type { IPostBody } from "./post.interface"

const createPostFromDB = async(body:IPostBody,id:string)=>{
    try {

        // create postDb

        const { user_id, title, content } = body;

const result = await pool.query(`
  INSERT INTO posts(user_id, title, content)
  VALUES($1, $2, $3)
  RETURNING *
`, [user_id, title, content]);

return result.rows[0]

        
           
        
    } catch (error) {
        console.log(error);
        
    }

}


// get all post from DB

const getAllPostFromDB = async()=>{
  const result = await pool.query(`
    SELECT * FROM posts
    `)

    return result.rows
    
}

export const postService = {
    createPostFromDB,
    getAllPostFromDB
}