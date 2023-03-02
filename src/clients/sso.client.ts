import {Client as SSOClient} from "@d-lab/sso"
import {ssoConfig} from "../config"

export default new SSOClient(ssoConfig.SSO_ENDPOINT, ssoConfig.SSO_API_KEY)