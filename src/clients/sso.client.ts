import {Client as SSOClient} from "@d-lab/sso"

export default new SSOClient(process.env.SSO_ENDPOINT!, false)