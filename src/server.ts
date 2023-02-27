import 'dotenv/config'
import {logger} from "@d-lab/api-kit"
import startup from "./startup"

const PORT = process.env.PORT || 4000

const app = require("./app")
app.listen(PORT, () => {
    logger.success(`[server] DLab Metadata is running on port http://localhost:${PORT}`)
    startup()
})