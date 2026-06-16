import { pool } from "./pool";


export const userInitDB = async()=>{
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(60) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            role VARCHAR(20) DEFAULT 'user',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`)

            console.log("NeonDB connected successfully");
        
        
    } catch (error) {
        console.log(error);
        
    }
}