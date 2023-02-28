import {Router} from "express"
import TokenController from "../controllers/token.controller"
import Endpoint from "../enums/endpoint.enum"
import authMiddleware from "../middleware/auth.middleware"
import hasRole from "../middleware/has-role.middleware"
import {handle, validatePathRequest, validateQueryRequest, validateRequest} from "@d-lab/api-kit"
import {GetRequest as MetadataGetRequest, UpdatePathRequest, UpdateBodyRequest} from "../api/dtos/token/metadata"
import {GetRequest, ListRequest} from "../api/dtos/token"
import {Role} from "@d-lab/sso"

const router = Router()
const ctrl = new TokenController()

router.get(Endpoint.TOKEN_Get, validatePathRequest(GetRequest), handle.bind(ctrl.get))
router.get(Endpoint.TOKEN_List, validateQueryRequest(ListRequest), handle.bind(ctrl.list))

router.get(Endpoint.TOKEN_METADATA_Get, validatePathRequest(MetadataGetRequest), handle.bind(ctrl.metadataGet))
router.put(Endpoint.TOKEN_METADATA_Update, authMiddleware(), hasRole(Role.Moderator), validateRequest(UpdateBodyRequest), validatePathRequest(UpdatePathRequest), handle.bind(ctrl.metadataUpdate))

export default router