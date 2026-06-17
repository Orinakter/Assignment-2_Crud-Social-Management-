import { pool } from "./pool";

export const postInitDB = async () => {
  try {
    await pool.query(`
  CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);
    console.log("Post neonDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
