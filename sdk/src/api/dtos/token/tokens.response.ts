import {PageResponse} from "@d-lab/api-kit"
import TokenDto from "./token.dto"

export default interface TokensResponse extends PageResponse {
    tokens: TokenDto[]
}