import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { Studio } from "../types/studio.js";

/**
 * Студии
 */
export class StudiosApi {
    constructor(req: ApiRequestHandler) {
        const list = (): Promise<Studio[]> => req("/studios", {}, "GET");

        this.list = list;
    }

    /**
     * Получить список студий
     */
    public readonly list: () => Promise<Studio[]>;
}

