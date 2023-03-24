import {RequestHandler} from "express"
import {Errors, Role} from "@d-lab/sso"
import sso from "../clients/sso.client"
import {logger} from "@d-lab/api-kit"
import {Auth, isNotNull} from "@d-lab/common-kit"

export const hasRole = (role: Role, strict = false): RequestHandler => {
    return async (req, res, next) => {
        try {
            const auth = req.auth

            let isAllowed

            if (isNotNull(auth!.token)) {
                isAllowed = await sso.application.isUserAllowed({
                    strict: strict ? "true" : "false",
                    requiredRole: role
                }, Auth.token(auth!.token!))
            } else if (isNotNull(auth!.apiKey)) {
                const app = await sso.application.details(auth!.apiKey!)
                logger.info(`app: ${JSON.stringify(app)}`)
                isAllowed = await sso.application.isUserAllowed({
                    userId: app.ownerId.toString(),
                    strict: strict ? "true" : "false",
                    requiredRole: role
                })
            } else {
                throw Errors.REQUIRE_Token()
            }

            if (isAllowed.allowed) {
                next()
            } else {
                throw Errors.REQUIRE_Role(role)
            }
        } catch (error) {
            next(error)
        }
    }
}

export default hasRole