import {PageResponse} from "@d-lab/common-kit"
import TokenDto from "./token.dto"

export default interface TokensResponse extends PageResponse {
    tokens: TokenDto[]
}