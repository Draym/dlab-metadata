import {RequestHandler} from "express"
import {Errors, Role} from "@d-lab/sso"
import sso from "../clients/sso.client"
import {Auth, throwIfNull} from "@d-lab/api-kit"

export const hasRole = (role: Role, strict: boolean = false): RequestHandler => {
    return async (req, res, next) => {
        try {
            const auth = req.auth

            const isAllowed = await sso.application.isUserAllowed({
                strict: strict ? "true" : "false",
                requiredRole: role
            }, Auth.extract({token: auth!.token, apiKey: auth!.apiKey}))

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