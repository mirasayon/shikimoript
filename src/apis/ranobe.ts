import type { ExternalLinkData } from "../types/external-link.js";
import type { FranchiseData } from "../types/franchise.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { RanobeOrder, RanobeKind, RanobeStatus, RanobeId, RanobeBasic, Ranobe, RanobeRelation } from "../types/ranobe.js";
import type { RoleData } from "../types/role.js";
import type { TopicData } from "../types/topic.js";
import type { UserRateStatus } from "../types/user-rate.js";
import type { IdField } from "./common.js";

export interface RanobeParams {
    page?: number;
    limit?: number;
    order?: RanobeOrder;
    kind?: RanobeKind;
    status?: RanobeStatus;
    season?: string;
    score?: number;
    genre?: string;
    publisher?: string;
    franchise?: string;
    censored?: boolean;
    mylist?: UserRateStatus;
    ids?: string;
    exclude_ids?: string;
    search?: string;
}

export interface RanobeTopicsParams {
    id: RanobeId;
    page?: number;
    limit?: number;
}

/**
 * Ранобэ
 * @param methods Методы API
 */
export class RanobeApi {
    /**
     * Получить список ранобэ
     * @param params Параметры фильтрации и пагинации
     */
    public readonly list: (params: RanobeParams) => Promise<RanobeBasic[]>;

    /**
     * Получить ранобэ по `RanobeId`
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly byId: ({ id }: IdField<RanobeId>) => Promise<Ranobe>;

    /**
     * Получить список ролей ранобэ
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly roles: ({ id }: IdField<RanobeId>) => Promise<RoleData[]>;

    /**
     * Получить список похожих ранобэ
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly similar: ({ id }: IdField<RanobeId>) => Promise<RanobeBasic[]>;

    /**
     * Получить список связанных ранобэ
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly related: ({ id }: IdField<RanobeId>) => Promise<RanobeRelation[]>;

    /**
     * Получить всю франшизу
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly franchise: ({ id }: IdField<RanobeId>) => Promise<FranchiseData>;

    /**
     * Получить список внешних ссылок ранобэ
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly externalLinks: ({ id }: IdField<RanobeId>) => Promise<ExternalLinkData[]>;

    /**
     * Получить список топиков ранобэ
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly topics: ({ id, ...params }: RanobeTopicsParams) => Promise<TopicData<RanobeBasic>[]>;

    constructor(request: ApiRequestHandler) {
        const list = (params: RanobeParams): Promise<RanobeBasic[]> => request(`/ranobes`, params, "GET");
        const byId = ({ id }: IdField<RanobeId>): Promise<Ranobe> => request(`/ranobes/${id}`, {}, "GET");
        const roles = ({ id }: IdField<RanobeId>): Promise<RoleData[]> => request(`/ranobes/${id}/roles`, {}, "GET");
        const similar = ({ id }: IdField<RanobeId>): Promise<RanobeBasic[]> => request(`/ranobes/${id}/similar`, {}, "GET");
        const related = ({ id }: IdField<RanobeId>): Promise<RanobeRelation[]> => request(`/ranobes/${id}/relation`, {}, "GET");
        const franchise = ({ id }: IdField<RanobeId>): Promise<FranchiseData> => request(`/ranobes/${id}/franchise`, {}, "GET");
        const externalLinks = ({ id }: IdField<RanobeId>): Promise<ExternalLinkData[]> => request(`/ranobes/${id}/external_links`, {}, "GET");
        const topics = ({ id, ...params }: RanobeTopicsParams): Promise<TopicData<RanobeBasic>[]> => request(`/ranobes/${id}/topics`, params, "GET");

        this.list = list;
        this.byId = byId;
        this.roles = roles;
        this.similar = similar;
        this.related = related;
        this.franchise = franchise;
        this.externalLinks = externalLinks;
        this.topics = topics;
    }
}

