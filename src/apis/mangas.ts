import type { ExternalLink } from "../types/external-link.js";
import type { Franchise } from "../types/franchise.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { MangaData, MangaBasic, MangaId, MangaKind, MangaOrder, MangaRelation, MangaStatus } from "../types/manga.js";
import type { RoleData } from "../types/role.js";
import type { TopicData } from "../types/topic.js";
import type { UserRateStatus } from "../types/user-rate.js";
import type { IdField } from "./common.js";

export interface MangasParams {
    page?: number;
    limit?: number;
    order?: MangaOrder;
    kind?: MangaKind;
    status?: MangaStatus;
    season?: string;
    score?: number;
    genre?: string;
    genre_v2?: string;
    publisher?: string;
    franchise?: string;
    censored?: boolean;
    mylist?: UserRateStatus;
    ids?: string;
    exclude_ids?: string;
    search?: string;
}

export interface MangaTopicsParams {
    id: MangaId;
    page?: number;
    limit?: number;
}

/**
 * Манга
 */
export class MangasApi {
    constructor(request: ApiRequestHandler) {
        const list = (params: MangasParams): Promise<MangaBasic[]> => request(`/mangas`, params, "GET");
        const byId = ({ id }: IdField<MangaId>): Promise<MangaData> => request(`/mangas/${id}`, {}, "GET");
        const roles = ({ id }: IdField<MangaId>): Promise<RoleData[]> => request(`/mangas/${id}/roles`, {}, "GET");
        const similar = ({ id }: IdField<MangaId>): Promise<MangaBasic[]> => request(`/mangas/${id}/similar`, {}, "GET");
        const related = ({ id }: IdField<MangaId>): Promise<MangaRelation[]> => request(`/mangas/${id}/relation`, {}, "GET");
        const franchise = ({ id }: IdField<MangaId>): Promise<Franchise> => request(`/mangas/${id}/franchise`, {}, "GET");
        const externalLinks = ({ id }: IdField<MangaId>): Promise<ExternalLink[]> => request(`/mangas/${id}/external_links`, {}, "GET");
        const topics = ({ id, ...params }: MangaTopicsParams): Promise<TopicData<MangaBasic>[]> => request(`/mangas/${id}/topics`, params, "GET");

        this.list = list;
        this.byId = byId;
        this.roles = roles;
        this.similar = similar;
        this.related = related;
        this.franchise = franchise;
        this.externalLinks = externalLinks;
        this.topics = topics;
    }

    /**
     * Получить список манги
     * @param params Параметры фильтрации и пагинации
     */
    public readonly list: (params: MangasParams) => Promise<MangaBasic[]>;

    /**
     * Получить мангу по `MangaId`
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly byId: ({ id }: IdField<MangaId>) => Promise<MangaData>;

    /**
     * Получить список ролей манги
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly roles: ({ id }: IdField<MangaId>) => Promise<RoleData[]>;

    /**
     * Получить список похожей манги
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly similar: ({ id }: IdField<MangaId>) => Promise<MangaBasic[]>;

    /**
     * Получить список связанной манги
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly related: ({ id }: IdField<MangaId>) => Promise<MangaRelation[]>;

    /**
     * Получить всю франшизу
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly franchise: ({ id }: IdField<MangaId>) => Promise<Franchise>;

    /**
     * Получить список внешних ссылок манги
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly externalLinks: ({ id }: IdField<MangaId>) => Promise<ExternalLink[]>;

    /**
     * Получить список топиков манги
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly topics: ({ id, ...params }: MangaTopicsParams) => Promise<TopicData<MangaBasic>[]>;
}

