import { pool } from "../../db/pool";
import type { IUserBody } from "./user.interface"

const userServiceIntoDB = async(body:IUserBody)=>{

    try {

        // post userDb

        const {name,email,password,role} = body;
        const result = await pool.query(`
            INSERT INTO users(name,email,password,role)
            VALUES($1,$2,$3,COALESCE($4,'user'))
            RETURNING *

            `,[name,email,password,role])

            return result.rows[0]
           
        
    } catch (error) {
        console.log(error);
        
    }

}


// getAllUserDb

const getAllUserFromDB = async()=>{
    const result = await pool.query(`
        SELECT * FROM users
        `)

        return result.rows
}

export const userService = {
    userServiceIntoDB,
    getAllUserFromDB
}