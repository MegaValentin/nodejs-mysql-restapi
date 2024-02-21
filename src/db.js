import { createPool } from "mysql2/promise";
import { db_user, db_host, db_database, db_port } from "./config.js"


export const pool = createPool({
    host: db_host,
    user: db_user,
    port: db_port,
    database: db_database
})

