import type { Episode } from "../types/episode.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";

/** @interface */
export type CalendarParams = { censored: boolean };

/**
 * Календарь
 */
export class CalendarsApi {
    constructor(request: ApiRequestHandler) {
        const list = (params: CalendarParams): Promise<Episode[]> => {
            return request("/calendar", params, "GET");
        };

        this.list = list;
    }

    /**
     * Получить список всех последних событий из календаря
     * @param params
     */
    public readonly list: (params: CalendarParams) => Promise<Episode[]>;
}

