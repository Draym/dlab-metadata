import LogApi from "../api/log.api"
import {Filter, Page, QueryRequest} from "@d-lab/api-kit"
import {ListRequest, LogsResponse} from "../api/dtos/log"
import logService from "../services/log.service"
import {toOptDate} from "@d-lab/common-kit"

export default class LogController implements LogApi {
    async list(req: QueryRequest<ListRequest>): Promise<LogsResponse> {
        const params = req.query
        const page = Page.from(params)
        const filter = new Filter()
        filter.equals({scope: params.scope, event: params.event, code: params.code})
        filter.like({message: params.message})
        filter.gt({createdAt: toOptDate(params.createdAfter)})
        filter.lt({createdAt: toOptDate(params.createdBefore)})
        filter.paginate(page)
        const logs = await logService.findAll(filter)
        return {
            logs,
            ...page.result(logs)
        }
    }
}