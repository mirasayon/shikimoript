import type { ApiFetcherType } from "./custom-fetcher.js";
import type { FetherOption } from "./shikimori-api-options.js";

export type ApiRequestParams = {
    [key: string]: any;
};
// URLSearchParams;
// string | string[][] | Record<string, string> | URLSearchParams | undefined | Record<number, string>;
// {
//     [key: string]: ParamType;
// }

/**
 * Представляет OAuth2 access-токен — строковое значение, дающее доступ к защищённым ресурсам.
 * Если `undefined`, у клиента нет access-токена.
 */
export type AuthToken = string | undefined;

export type RequestMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export type ApiRequestHandler = <T, S extends string, P extends ApiRequestParams, M extends RequestMethod>(
    endpoint: S,
    params: P,
    method: M,
) => Promise<T>;

/** Токен доступа (Access Token), полученный в результате запроса авторизации по протоколу OAuth2 */
export interface AccessToken {
    /** Строка токена доступа, выданная сервером авторизации */
    access_token: AuthToken;
    /** Тип токена — строка. Для OAuth2 обычно `"Bearer"` */
    token_type: "Bearer";
    /** Если токен доступа истекает, сервер возвращает длительность его действия (в секундах) */
    expires_in: number;
    /** Используется клиентом для обмена refresh-токена на новый access-токен после истечения предыдущего */
    refresh_token: string;
    /** Строка, описывающая область действия (scope) токена доступа */
    scope: string;
    /** Число — UNIX-таймштамп (в секундах), когда токен был создан */
    created_at: number;
}

/** Набор опций, необходимых для аутентификации клиента */
export interface AuthLayerOptions extends FetherOption, ClientNameOptionsField {
    /** Обязательный идентификатор клиента (clientId) */
    clientId: string;
    /**
     * Секретный ключ клиента (clientSecret)
     *
     * Обязательный параметр
     */
    clientSecret: string;
    /**
     * Необязательный URI для редиректа после завершения аутентификации
     * */
    redirectURI?: string;
}

export interface ClientNameOptionsField {
    /**
     * Необязательное имя клиента (для заголовка запроса `User-Agent`)
     *
     * По умолчанию будет использоваться "shikimoript"
     *
     * @defaultValue "shikimoript"
     */
    clientName?: string;
}

