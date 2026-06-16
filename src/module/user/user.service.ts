import { pool } from "../../db/pool";
import type { IUserBody } from "./user.interface"

const userServiceIntoDB = async(body:IUserBody)=>{

    try {
        const {name,email,password,role} = body;
        const result = await pool.query(`
            INSERT INTO users(name,email,password,role)
            VALUES($1,$2,$3,COALESCE($4,'user'),COALESCE($5,18))
            RETURNING *

            `,[name,email,password,role])

            return result.rows[0]
        
    } catch (error) {
        console.log(error);
        
    }

}

export const userService = {
    userServiceIntoDB
}