import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { Publisher } from "../types/publisher.js";

/**
 * Издатели
 * @param methods Методы API (например `{ get }`)
 */
export class PublishersApi {
    constructor(request: ApiRequestHandler) {
        const list = (): Promise<Publisher[]> => request("/publishers", {}, "GET");
        this.list = list;
    }

    /**
     * Получить список издателей
     * @param params Параметры запроса (отсутствуют)
     */
    public readonly list: () => Promise<Publisher[]>;
}

