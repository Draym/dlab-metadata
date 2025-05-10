import {PageResponse} from "@d-lab/api-kit"
import ModelDto from "./model.dto"

export default interface ModelsResponse extends PageResponse {
    models: ModelDto[]
}