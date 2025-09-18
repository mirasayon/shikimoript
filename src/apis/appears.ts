import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";

/** @interface */
export type AppearsParams = { ids: string };

/**
 * Появления
 */
export class AppearsApi {
    constructor(request: ApiRequestHandler) {
        const markAsRead = (params: AppearsParams): Promise<null> => request("/appears", params, "POST");

        this.markAsRead = markAsRead;
    }

    /**
     * Отметить комментарии или темы как прочитанные
     * @param params
     */
    public readonly markAsRead: (params: AppearsParams) => Promise<null>;
}

