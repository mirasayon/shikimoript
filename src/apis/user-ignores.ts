import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { UserId, UserIgnore } from "../types/user.js";

/** Интерфейс параметров */
export type UserIgnoreParams = { user_id: UserId };

/**
 * Игнорирование пользователей
 */
export class UserIgnoresApi {
    constructor(req: ApiRequestHandler) {
        const ignore = ({ user_id }: UserIgnoreParams): Promise<UserIgnore> => req(`/v2/users/${user_id}/ignore`, {}, "POST");
        const unignore = ({ user_id }: UserIgnoreParams): Promise<UserIgnore> => req(`/v2/users/${user_id}/ignore`, {}, "DELETE");
        this.ignore = ignore;
        this.unignore = unignore;
    }

    /**
     * Игнорировать пользователя
     *
     * Требует OAuth-скоупа `ignores`
     * @param params - объект с полем user_id
     */
    public readonly ignore: ({ user_id }: UserIgnoreParams) => Promise<UserIgnore>;

    /**
     * Убрать пользователя из игнора
     *
     * Требует OAuth-скоупа `ignores`
     * @param params - объект с полем user_id
     */
    public readonly unignore: ({ user_id }: UserIgnoreParams) => Promise<UserIgnore>;
}

