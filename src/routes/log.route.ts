import {Router} from "express"
import LogController from "../controllers/log.controller"
import Endpoint from "../enums/endpoint.enum"
import {handle, validateQueryRequest} from "@d-lab/api-kit"
import {ListRequest} from "../api/dtos/log"

const router = Router()
const ctrl = new LogController()

router.get(Endpoint.LOG_List, validateQueryRequest(ListRequest), handle.bind(ctrl.list))

export default router