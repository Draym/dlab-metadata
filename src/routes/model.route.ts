import {Router} from "express"
import ModelController from "../controllers/model.controller"
import Endpoint from "../enums/endpoint.enum"
import authMiddleware from "../middleware/auth.middleware"
import hasRole from "../middleware/has-role.middleware"
import {handle, validatePathRequest, validateQueryRequest, validateRequest} from "@d-lab/api-kit"
import {CreateRequest, GetRequest, ListRequest, UpdateBodyRequest, UpdatePathRequest} from "../api/dtos/model"
import {Role} from "@d-lab/sso"

const router = Router()
const ctrl = new ModelController()

router.post(Endpoint.MODEL_Create, authMiddleware(), hasRole(Role.Moderator), validateRequest(CreateRequest), handle.bind(ctrl.create))
router.put(Endpoint.MODEL_Update, authMiddleware(), hasRole(Role.Moderator), validateRequest(UpdateBodyRequest), validatePathRequest(UpdatePathRequest), handle.bind(ctrl.update))
router.get(Endpoint.MODEL_Get, validatePathRequest(GetRequest), handle.bind(ctrl.get))
router.get(Endpoint.MODEL_List, validateQueryRequest(ListRequest), handle.bind(ctrl.list))

export default router