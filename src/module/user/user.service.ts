import { asyncWrapProviders } from "node:async_hooks";
import { pool } from "../../db/pool";
import type { IUserBody, UserUpdateBody } from "./user.interface"

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

// get single user

const singleUserFromDB = async(id:string)=>{
    const result = await pool.query(`
        SELECT * FROM users
        WHERE id = $1
        `,[id])

        return result.rows[0]
}


// update user

const updateUserFromDB = async(body:UserUpdateBody,id:string)=>{
    const {name,email,password,role} = body;
    const result = await pool.query(`
        UPDATE users
        SET
        name = COALESCE ($1, name),
        email = COALESCE ($2, email),
        password = COALESCE ($3, password),
        role = COALESCE ($4, role)
        WHERE id = $5
        RETURNING *
        `,[name,email,password,role,id])
        
        return result.rows[0]

}

//  deleteUserDB

const deleteUserFromDB = async(id:string)=>{
    const result = await pool.query (`
        DELETE FROM users
        WHERE id = $1
        RETURNING *
        `,[id])
        return result.rows[0]

}



export const userService = {
    userServiceIntoDB,
    getAllUserFromDB,
    singleUserFromDB,
    updateUserFromDB,
    deleteUserFromDB
}