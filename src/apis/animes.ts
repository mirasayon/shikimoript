import type {
    AnimeOrder,
    AnimeKind,
    AnimeStatus,
    AnimeDuration,
    AnimeRating,
    AnimeId,
    AnimeTopicKind,
    AnimeBasic,
    AnimeData,
    AnimeRelationData,
} from "../types/anime.js";
import type { ExternalLink } from "../types/external-link.js";
import type { Franchise } from "../types/franchise.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { ScreenshotData } from "../types/image.js";
import type { RoleData } from "../types/role.js";
import type { TopicData } from "../types/topic.js";
import type { UserRateStatus } from "../types/user-rate.js";
import type { IdField } from "./common.js";

export interface AnimesParams {
    page?: number;
    limit?: number;
    order?: AnimeOrder;
    kind?: AnimeKind;
    status?: AnimeStatus;
    season?: string;
    score?: number;
    duration?: AnimeDuration;
    rating?: AnimeRating;
    genre?: string;
    genre_v2?: string;
    studio?: string;
    franchise?: string;
    censored?: boolean;
    mylist?: UserRateStatus;
    ids?: string;
    exclude_ids?: string;
    search?: string;
}

export interface AnimesTopicsParams {
    id: AnimeId;
    page?: number;
    limit?: number;
    kind?: AnimeTopicKind;
    episode?: number;
}
/**
 * Аниме
 * @param methods
 */
export class AnimesApi {
    constructor(request: ApiRequestHandler) {
        const list = (params: AnimesParams): Promise<AnimeBasic[]> => request(`/animes`, params, "GET");

        const byId = ({ id }: IdField<AnimeId>): Promise<AnimeData> => request(`/animes/${id}`, {}, "GET");

        const roles = ({ id }: IdField<AnimeId>): Promise<RoleData[]> => request(`/animes/${id}/roles`, {}, "GET");

        const similar = ({ id }: IdField<AnimeId>): Promise<AnimeBasic[]> => request(`/animes/${id}/similar`, {}, "GET");

        const related = ({ id }: IdField<AnimeId>): Promise<AnimeRelationData[]> => request(`/animes/${id}/related`, {}, "GET");

        const screenshots = ({ id }: IdField<AnimeId>): Promise<ScreenshotData[]> => request(`/animes/${id}/screenshots`, {}, "GET");

        const franchise = ({ id }: IdField<AnimeId>): Promise<Franchise> => request(`/animes/${id}/franchise`, {}, "GET");

        const externalLinks = ({ id }: IdField<AnimeId>): Promise<ExternalLink[]> => request(`/animes/${id}/external_links`, {}, "GET");

        const topics = ({ id, ...params }: AnimesTopicsParams): Promise<TopicData<AnimeBasic>[]> => request(`/animes/${id}/topics`, params, "GET");
        this.list = list;
        this.byId = byId;
        this.roles = roles;
        this.similar = similar;
        this.related = related;
        this.screenshots = screenshots;
        this.franchise = franchise;
        this.externalLinks = externalLinks;
        this.topics = topics;
    }
    /**
     * Список аниме
     * @param params
     */
    public readonly list;
    /**
     * Получить аниме по `AnimeId`
     * @param params
     */
    public readonly byId;
    /**
     * Список ролей аниме
     * @param params
     */
    public readonly roles;
    /**
     * Список похожих аниме
     * @param params
     */
    public readonly similar;
    /**
     * Список связанных аниме
     * @param params
     */
    public readonly related;

    /**
     * Список скриншотов аниме
     * @param params
     */
    public readonly screenshots;

    /**
     * Показать всю франшизу
     * @param params
     */
    public readonly franchise;
    /**
     * Список внешних ссылок аниме
     * @param params
     */
    public readonly externalLinks;

    /**
     * Список топиков аниме
     * @param params
     */
    public readonly topics;
}

