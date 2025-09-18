import type { EpisodeNotificationTemplate, EpisodeNotification } from "../types/episode-notification.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";

export interface EpisodeNotificationsParams {
    episode_notification: EpisodeNotificationTemplate;
    token: string;
}

/**
 * Уведомления о сериях
 * @param req запрос к API
 */
export class EpisodeNotificationsApi {
    constructor(req: ApiRequestHandler) {
        const list = (params: EpisodeNotificationsParams): Promise<EpisodeNotification> => req("/v2/episode_notifications", params, "POST");
        this.list = list;
    }

    /**
     * Уведомить Shikimori о выходе новой серии аниме
     *
     * Этот API требует специального токена
     * @param params Параметры запроса
     */
    public readonly list: (params: EpisodeNotificationsParams) => Promise<EpisodeNotification>;
}

