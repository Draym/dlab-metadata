import {NextFunction, Request, RequestHandler, Response} from "express"
import sso from "../clients/sso.client"
import {Auth, authEmpty, UserResponse} from "@d-lab/sso"
import {AuthData, CallerData, Errors, isNotNull, logger, throwIfNull} from "@d-lab/api-kit"

declare global {
    namespace Express {
        interface Request {
            auth?: AuthData | undefined
            user?: CallerData | undefined
        }
    }
}

export const authMiddleware = (): RequestHandler => {

    async function verifyJWT(Authorization: string): Promise<CallerData> {
        const me: UserResponse = await sso.auth.getMe(authEmpty(Auth.token(Authorization)))
        return {
            id: me.id,
            identifier: me.identifier,
            email: me.email
        }
    }

    return async <R extends Request>(req: R, res: Response, next: NextFunction) => {
        try {
            const bearerToken = req.header("Authorization")?.split("Bearer ")[1] || null
            const apiKey = req.header("x-api-key") || null

            if (isNotNull(bearerToken)) {
                const user = await verifyJWT(bearerToken!)
                req.auth = {
                    token: bearerToken!,
                    apiKey : null
                }
                req.user = user
            }
            if (isNotNull(apiKey)) {
                req.auth = {
                    token: req.auth?.token || null,
                    apiKey: apiKey!
                }
            }
            throwIfNull(req.auth, Errors.REQUIRE_Token())
            next()
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}

export default authMiddleware
