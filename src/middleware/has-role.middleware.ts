import {RequestHandler} from "express"
import {Auth, authQuery, Role} from "@d-lab/sso"
import sso from "../clients/sso.client"
import {ssoConfig} from "../config"
import {Errors, logger, throwIfNull} from "@d-lab/api-kit"

export const hasRole = (role: Role, strict: boolean = false): RequestHandler => {
    return async (req, res, next) => {
        try {
            const auth = req.auth

            throwIfNull(auth?.token, Errors.REQUIRE_Token())

            const isAllowed = await sso.application.isUserAllowed(authQuery({
                strict: strict ? "true" : "false",
                requiredRole: role
            }, Auth.full(auth!.token!, ssoConfig.APP_KEY)))

            if (isAllowed.allowed) {
                next()
            } else {
                throw Errors.REQUIRE_Role(role)
            }
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}

export default hasRole