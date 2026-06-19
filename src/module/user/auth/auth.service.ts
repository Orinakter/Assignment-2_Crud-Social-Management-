import { pool } from "../../../db/pool";
import type { IAuthBody } from "./auth.interface";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createAuthServiceIntoDB = async(body:IAuthBody)=>{
    const {email,password} = body;
    const result = await pool.query(`
        SELECT * FROM users
        WHERE email = $1

        `,[email])

        if (result.rows.length === 0) {
        throw new Error("user not found");      
       }

       const user = result.rows[0];

      const comparePassword =await bcrypt.compare(password,user.password);

      if(!comparePassword){
        throw new Error("Invalid Password");
      }

      const JwtPayload = {
        
        id:user?.id,
        email:user?.email,
        role:user?.role
      }

      const jwtToken = jwt.sign(JwtPayload, "ygjhbgjhbjyuffdgvghjbvhg", { expiresIn: "7d" });

      return {jwtToken,user}




}


export const authService = {
    createAuthServiceIntoDB
}