import {Pool} from "pg";


export const pool = new Pool({
    connectionString:"postgresql://neondb_owner:npg_2la3xLAvJWjD@ep-sweet-shape-atni5oys-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})