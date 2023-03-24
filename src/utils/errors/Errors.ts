import {HttpException} from "@d-lab/api-kit"
import {ErrorCode} from "../../enums"

const Errors = {
    REQUIRE_Token: () => new HttpException(ErrorCode.REQUIRE_Token, `Authentication token missing.`),
    REQUIRE_Role: (role: string) => new HttpException(ErrorCode.REQUIRE_Role, `User has not the required[${role}] role.`),
    NOT_FOUND_Collection: (reason: string) => new HttpException(ErrorCode.NOT_FOUND_Collection, `Not found Collection for ${reason}`),
    NOT_FOUND_Model: (reason: string) => new HttpException(ErrorCode.NOT_FOUND_Model, `Not found Model for ${reason}`),
    NOT_FOUND_Token: (reason: string) => new HttpException(ErrorCode.NOT_FOUND_Token, `Not found Token for ${reason}`),
}

export default Errors