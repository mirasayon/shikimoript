import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { UserId } from "../types/user.js";

/**
 * Статистика
 */
export class StatsApi {
    constructor(req: ApiRequestHandler) {
        this.activeUsers = (): Promise<UserId[]> => {
            return req("/stats/active_users", {}, "GET");
        };
    }
    /**
     * Пользователи, у которых есть как минимум 1 завершённое аниме
     * и которые были активны в течение последнего месяца.
     */
    public readonly activeUsers: () => Promise<UserId[]>;
}

