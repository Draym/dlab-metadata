import {ErrorCode} from "@/enums/index"
import {HttpException} from "@d-lab/api-kit"

const Errors = {
    NOT_FOUND_Collection: (reason: string) => new HttpException(ErrorCode.NOT_FOUND_Collection, `Not found Collection for ${reason}`),
    NOT_FOUND_Model: (reason: string) => new HttpException(ErrorCode.NOT_FOUND_Model, `Not found Model for ${reason}`),
    NOT_FOUND_Token: (reason: string) => new HttpException(ErrorCode.NOT_FOUND_Token, `Not found Token for ${reason}`),
}

export default Errors