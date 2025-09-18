import type { Achievement } from "../types/achievement.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { UserId } from "../types/user.js";

/** Параметры достижений */
export type AchievementsParams = { user_id: UserId };

/**
 * Достижения
 * @param methods
 */
export class AchievementsApi {
    constructor(request: ApiRequestHandler) {
        const list = (params: AchievementsParams): Promise<Achievement[]> => request("/achievements", params, "GET");

        this.list = list;
    }

    /**
     * Список достижений пользователя
     * @param params
     */
    public readonly list: (params: AchievementsParams) => Promise<Achievement[]>;
}

