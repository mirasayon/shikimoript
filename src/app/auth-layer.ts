import { DEFAULT_USER_AGENT, TOKEN_PATH } from "../constants/constants.js";
import { doRequest } from "../fetcher/fetcher-functions.js";
import { defaultFetcher } from "../fetcher/default-fetcher.js";
import type { AccessToken, AuthLayerOptions } from "../types/auth-layer-api-options.js";
import type { CustomFetcher } from "../types/custom-fetcher.js";

/**
 * Слой авторизации на основе OAuth2
 * @param options - Набор опций, необходимых для аутентификации клиента
 * @see [OAuth2 Guide](https://shikimori.me/oauth)
 */
export class AuthLayerApi {
    private clientName: string | undefined;
    private fetcher: CustomFetcher;
    private clientSecret: string;
    private redirectURI: string | undefined;
    private clientId: string;

    constructor({ clientName, clientId, clientSecret, redirectURI, fetcher = defaultFetcher }: AuthLayerOptions) {
        this.clientName = clientName;
        this.fetcher = fetcher;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectURI = redirectURI;
    }

    private doAuthRequest = (body: BodyInit): Promise<any> => {
        return doRequest(
            TOKEN_PATH,
            {
                method: "POST",
                headers: {
                    "User-Agent": this.clientName ?? DEFAULT_USER_AGENT,
                },
                body,
            },
            this.fetcher,
        );
    };

    /**
     * Получает access-токен через OAuth2 по предоставленному коду авторизации
     * @param authCode - Код авторизации, полученный в процессе OAuth2
     * @return Promise, разрешающийся объектом AccessToken с полученным токеном доступа
     */
    public getAccessToken = (authCode: string): Promise<AccessToken> => {
        const body = new URLSearchParams({
            grant_type: "authorization_code",
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code: authCode,
            redirect_uri: this.redirectURI ?? "urn:ietf:wg:oauth:2.0:oob",
        });
        return this.doAuthRequest(body);
    };

    /**
     * Получает новый access-токен через OAuth2 по refresh-токену
     * @param refreshToken - Refresh-токен, полученный при предыдущей авторизации
     * @return Promise, разрешающийся объектом AccessToken с полученным токеном доступа
     */
    public refreshAccessToken = (refreshToken: string): Promise<AccessToken> => {
        const body = new URLSearchParams({
            grant_type: "refresh_token",
            client_id: this.clientId,
            client_secret: this.clientSecret,
            refresh_token: refreshToken,
        });
        return this.doAuthRequest(body);
    };
}

