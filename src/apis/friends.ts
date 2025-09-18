import type { NoticeType } from "../types/common.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { UserId } from "../types/user.js";
import type { IdField } from "./common.js";

/**
 * Друзья
 * @param methods Методы API
 */
export class FriendsApi {
    constructor(request: ApiRequestHandler) {
        const create = ({ id }: IdField<UserId>): Promise<NoticeType[]> => request(`/friends/${id}`, {}, "POST");
        const destroy = ({ id }: IdField<UserId>): Promise<NoticeType> => request(`/friends/${id}`, {}, "DELETE");

        this.create = create;
        this.destroy = destroy;
    }

    /**
     * Добавить пользователя в список друзей по `UserId`
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly create: ({ id }: IdField<UserId>) => Promise<NoticeType[]>;

    /**
     * Удалить пользователя из списка друзей по `UserId`
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly destroy: ({ id }: IdField<UserId>) => Promise<NoticeType>;
}

