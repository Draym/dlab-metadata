import {RequestHandler} from "express"
import {Errors, Role} from "@d-lab/sso"
import sso from "../clients/sso.client"
import {Auth, logger, throwIfNull} from "@d-lab/api-kit"

export const hasRole = (role: Role, strict: boolean = false): RequestHandler => {
    return async (req, res, next) => {
        try {
            const auth = req.auth

            throwIfNull(auth?.token, Errors.REQUIRE_Token())

            const isAllowed = await sso.application.isUserAllowed({
                strict: strict ? "true" : "false",
                requiredRole: role
            }, Auth.token(auth!.token!))

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