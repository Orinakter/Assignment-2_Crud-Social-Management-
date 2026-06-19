import { pool } from "../../../db/pool";
import type { IPostBody, postUpdateBody } from "./post.interface";

const createPostFromDB = async (body: IPostBody, id: string) => {
  try {
    // create postDb

    const { user_id, title, content } = body;

    const result = await pool.query(
      `
  INSERT INTO posts(user_id, title, content)
  VALUES($1, $2, $3)
  RETURNING *
`,
      [user_id, title, content],
    );

    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
};

// get all post from DB

const getAllPostFromDB = async () => {
  const result = await pool.query(`
    SELECT * FROM posts
    `);

  return result.rows;
};

// get single post from DB

const getSinglePostFromDB = async (id: string) => {
  const result = await pool.query(
    `
        SELECT * FROM posts
        WHERE id = $1
        `,
    [id],
  );

  return result.rows[0];
};

// update post from post DB

const updatePostFromDB = async (body: postUpdateBody, id: string) => {
  const { user_id, title, content } = body;
  const result = await pool.query(
    `
        UPDATE posts
        SET
        user_id = COALESCE ($1, user_id),
        title = COALESCE ($2, title),
        content = COALESCE ($3, content)
        WHERE id = $4
        RETURNING *

        `,
    [user_id, title, content, id],
  );

  return result.rows[0];
};

// delete post from DB

const deletePostFromPosts = async (id: string) => {
  const result = await pool.query(
    `
        DELETE FROM posts
        WHERE id = $1
        RETURNING *
        `,
    [id],
  );
  return result.rows[0];
};

export const postService = {
  createPostFromDB,
  getAllPostFromDB,
  getSinglePostFromDB,
  updatePostFromDB,
  deletePostFromPosts,
};
