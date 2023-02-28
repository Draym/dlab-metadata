import {NextFunction, Request, RequestHandler, Response} from "express"
import sso from "../clients/sso.client"
import {AuthRawData, isNotNull, logger, throwIfNull} from "@d-lab/api-kit"
import {AuthMeResponse, Errors} from "@d-lab/sso"

declare global {
    namespace Express {
        interface Request {
            auth?: AuthRawData | undefined
            caller?: AuthMeResponse | undefined
        }
    }
}

export const authMiddleware = (): RequestHandler => {

    async function verifyJWT(Authorization: string): Promise<AuthMeResponse> {
       return await sso.auth.me(Authorization)
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
                req.caller = user
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
