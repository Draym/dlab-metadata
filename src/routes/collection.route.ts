import {Router} from "express"
import Endpoint from "../enums/endpoint.enum"
import {handle, validatePathRequest, validateQueryRequest, validateRequest} from "@d-lab/api-kit"
import CollectionController from "../controllers/collection.controller"
import {CreateRequest, GetRequest, ListRequest, UpdateBodyRequest, UpdatePathRequest} from "../api/dtos/collection"
import authMiddleware from "../middleware/auth.middleware"
import hasRole from "../middleware/has-role.middleware"
import {Role} from "@d-lab/sso"

const router = Router()
const ctrl = new CollectionController()

router.post(Endpoint.COLLECTION_Create, authMiddleware(), hasRole(Role.Moderator), validateRequest(CreateRequest), handle.bind(ctrl.create))
router.put(Endpoint.COLLECTION_Update, authMiddleware(), hasRole(Role.Moderator), validateRequest(UpdateBodyRequest), validatePathRequest(UpdatePathRequest), handle.bind(ctrl.update))
router.get(Endpoint.COLLECTION_Get, validatePathRequest(GetRequest), handle.bind(ctrl.get))
router.get(Endpoint.COLLECTION_List, validateQueryRequest(ListRequest), handle.bind(ctrl.list))

export default router