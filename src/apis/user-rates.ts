import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { UserRateStatus, UserRateTemplate, UserRateId, UserRateBasic } from "../types/user-rate.js";
import type { UserId } from "../types/user.js";
import type { IdField } from "./common.js";

export interface UserRatesListParams {
    user_id?: UserId;
    target_id?: number;
    target_type?: "Anime" | "Manga";
    status?: UserRateStatus;
    page?: number;
    limit?: number;
}

export interface UserRateCreateParams {
    user_rate?: UserRateTemplate;
}

export interface UserRateUpdateParams {
    id: UserRateId;
    user_rate?: Omit<UserRateTemplate, "user_id" | "target_id" | "target_type">;
}

/**
 * Рейтинги пользователей
 * @param methods - набор методов для выполнения API-запросов
 */
export class UserRatesApi {
    constructor(request: ApiRequestHandler) {
        const list = (params: UserRatesListParams): Promise<UserRateBasic[]> => {
            return request(`/v2/user_rates/`, params, "GET");
        };
        const byId = ({ id }: IdField<UserRateId>): Promise<UserRateBasic> => request(`/v2/user_rates/${id}`, {}, "GET");
        const create = (params: UserRateCreateParams): Promise<UserRateBasic> => request(`/v2/user_rates/`, params, "POST");
        const update = ({ id, ...params }: UserRateUpdateParams): Promise<UserRateBasic> => request(`/v2/user_rates/${id}`, params, "PATCH");
        const increment = ({ id }: IdField<UserRateId>): Promise<UserRateBasic> => request(`/v2/user_rates/${id}/increment`, {}, "POST");
        const destroy = ({ id }: IdField<UserRateId>): Promise<UserRateBasic> => request(`/v2/user_rates/${id}`, {}, "DELETE");

        this.list = list;
        this.byId = byId;
        this.create = create;
        this.update = update;
        this.increment = increment;
        this.destroy = destroy;
    }

    /**
     * Список пользовательских рейтингов
     * @param params - параметры запроса (фильтры, пагинация и т.д.)
     */
    public readonly list: (params: UserRatesListParams) => Promise<UserRateBasic[]>;

    /**
     * Получить рейтинг пользователя по `UserRateId`
     * @param params - объект с полем id
     */
    public readonly byId: ({ id }: IdField<number>) => Promise<UserRateBasic>;

    /**
     * Создать рейтинг пользователя
     *
     * Требует OAuth-скоупа `user_rates`
     * @param params - параметры создания (см. UserRateCreateParams)
     */
    public readonly create: (params: UserRateCreateParams) => Promise<UserRateBasic>;

    /**
     * Обновить рейтинг пользователя
     *
     * Требует OAuth-скоупа `user_rates`
     * @param params - объект с полем id и полями для обновления (см. UserRateUpdateParams)
     */
    public readonly update: ({ id, ...params }: UserRateUpdateParams) => Promise<UserRateBasic>;

    /**
     * Увеличить количество просмотренных эпизодов/глав на 1
     *
     * Требует OAuth-скоупа `user_rates`
     * @param params - объект с полем id
     */
    public readonly increment: ({ id }: IdField<number>) => Promise<UserRateBasic>;

    /**
     * Удалить рейтинг пользователя
     *
     * Требует OAuth-скоупа `user_rates`
     * @param params - объект с полем id
     */
    public readonly destroy: ({ id }: IdField<number>) => Promise<UserRateBasic>;
}

