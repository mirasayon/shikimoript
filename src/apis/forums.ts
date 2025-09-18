import type { Forum } from "../types/forum.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";

/**
 * Форумы
 */
export class ForumsApi {
    constructor(req: ApiRequestHandler) {
        /**
         * Получить список форумов
         * @param params Параметры запроса (отсутствуют)
         */
        const list = (): Promise<Forum[]> => req("/forums", {}, "GET");
        this.list = list;
    }

    /**
     * Получить список форумов
     * @param params Параметры запроса (отсутствуют)
     */
    public readonly list: () => Promise<Forum[]>;
}

