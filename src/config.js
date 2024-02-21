import {config} from 'dotenv'

config()

export const port = process.env.PORT || 3000
export const db_user = process.env.DB_USER || 'roo'
export const db_host = process.env.DB_HOST || "127.0.0.1"
export const db_database = process.env.DB_DATABASE || "companydb"
export const db_port = process.env.DB_PORT || 3306