import type { BanData } from "../types/ban.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";

/**
 * Баны
 * @param methods
 */
export class BansApi {
    /**
     * Получить список банов
     * @param params
     */
    public readonly list: () => Promise<BanData[]>;
    constructor(request: ApiRequestHandler) {
        async function list(): Promise<BanData[]> {
            return await request("/bans", {}, "GET");
        }

        this.list = list;
    }
}

