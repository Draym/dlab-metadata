import 'dotenv/config'
import express, {Express} from "express"
import morgan from "morgan"
import compression from "compression"
import cors from "cors"
import helmet from "helmet"
import routers from "./routes"
import {errorMiddleware} from "@d-lab/api-kit"


const app: Express = express()

app.use(morgan("combined"))
app.use(express.json())
app.use(compression())
app.use(express.urlencoded({extended: true}))
app.use(helmet())
app.use(
    cors({
        origin: true,
        credentials: true,
    }),
)

app.get("/", (_, res) => res.json("DLab Metadata Service OK"))
app.get("/version", (_, res) => res.json({version: process.env.npm_package_version}))

routers.map(router => app.use(router))

// The error handler must be before any other error middleware and after all controllers
// app.use(Sentry.Handlers.errorHandler({
//     shouldHandleError(error) {
//         return isNotNull(error.status) && error.status! >= 400
//     }
// }));
app.use(errorMiddleware)

module.exports = app