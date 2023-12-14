import { env } from "process"
import { config } from 'dotenv'
config()

const CONNECTION = {
    type: 'postgres',
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
}

export default CONNECTION