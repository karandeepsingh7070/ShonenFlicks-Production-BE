import express, { urlencoded } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

let app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}