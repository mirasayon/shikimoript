import type { ContentConstants, UserRateConstants } from "../types/constants.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";

/**
 * Константы
 */
export class ConstantsApi {
    constructor(req: ApiRequestHandler) {
        const anime = (): Promise<ContentConstants> => req("/constants/anime", {}, "GET");
        const manga = (): Promise<ContentConstants> => req("/constants/manga", {}, "GET");
        const userRate = (): Promise<UserRateConstants> => req("/constants/user_rate", {}, "GET");
        const club = (): Promise<ContentConstants> => req("/constants/club", {}, "GET");
        const smileys = (): Promise<ContentConstants> => req("/constants/smileys ", {}, "GET");

        this.anime = anime;
        this.manga = manga;
        this.userRate = userRate;
        this.club = club;
        this.smileys = smileys;
    }

    /**
     * Получить список констант, связанных с аниме
     * @param params Параметры запроса (отсутствуют)
     */
    public readonly anime: () => Promise<ContentConstants>;

    /**
     * Получить список констант, связанных с мангой
     * @param params Параметры запроса (отсутствуют)
     */
    public readonly manga: () => Promise<ContentConstants>;

    /**
     * Получить список констант, связанных с пользовательскими оценками
     * @param params Параметры запроса (отсутствуют)
     */
    public readonly userRate: () => Promise<UserRateConstants>;

    /**
     * Получить список констант, связанных с клубами
     * @param params Параметры запроса (отсутствуют)
     */
    public readonly club: () => Promise<ContentConstants>;

    /**
     * Получить список всех доступных смайликов
     * @param params Параметры запроса (отсутствуют)
     */
    public readonly smileys: () => Promise<ContentConstants>;
}

