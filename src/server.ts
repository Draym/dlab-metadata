import 'dotenv/config'
import {logger} from "@d-lab/api-kit"
import startup from "./startup"
import app from "./app"

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    logger.success(`[server] DLab Metadata is running on port http://localhost:${PORT}`)
    startup()
})