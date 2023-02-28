import {Client as SSOClient} from "@d-lab/sso"
import {ssoConfig} from "../config"

export default new SSOClient(process.env.SSO_ENDPOINT!, ssoConfig.APP_KEY)