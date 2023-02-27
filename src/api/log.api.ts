import {QueryRequest} from "@d-lab/api-kit"
import {ListRequest, LogsResponse} from "./dtos/log"

export default interface LogApi {
    list(req: QueryRequest<ListRequest>): Promise<LogsResponse>
}