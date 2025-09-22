import type { AnimeBasicData } from "../types/animes.js";
import type { BanData } from "../types/ban.js";
import type { ClubBasic } from "../types/club.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { MangaBasicData } from "../types/manga.js";
import type { MessageData, MessageType } from "../types/message.js";
import type { UserRateExtended, UserRateStatus } from "../types/user-rate.js";
import type { UserData, UserBasic, UserFavourites, UserHistoryRecord, UserId, UserUnreadMessages } from "../types/user.js";
import type { IdField } from "./common.js";

export interface UsersListParams {
    page?: number;
    limit?: number;
}

export interface FriendsListParams {
    id: UserId;
    page?: number;
    limit?: number;
}

export interface UsersByIdParams {
    id: number | string;
    is_nickname?: boolean;
}

export interface UsersAnimeRatesParams {
    id: UserId;
    page: number;
    limit: number;
    status: UserRateStatus;
    censored: boolean;
}

/** @interface */
export type UsersMangaRatesParams = Omit<UsersAnimeRatesParams, "status">;

export interface UsersMessagesParams {
    id: UserId;
    page?: number;
    limit?: number;
    type: MessageType;
}

export interface UsersHistoryParams {
    id: UserId;
    page: number;
    limit: number;
    target_id: number;
    target_type: "Anime" | "Manga";
}

/**
 * Пользователи
 * @param methods - набор методов для выполнения API-запросов
 */
export class UsersApi {
    constructor(req: ApiRequestHandler) {
        const list = (params: UsersListParams): Promise<UserBasic[]> => req(`/users`, params, "GET");

        const byId = ({ id, ...params }: UsersByIdParams): Promise<UserData> => req(`/users/${id}`, params, "GET");

        const info = ({ id }: IdField<UserId>): Promise<UserData> => req(`/users/${id}/info`, {}, "GET");

        const whoami = (): Promise<UserData> => req(`/users/whoami`, {}, "GET");

        const signOut = (): Promise<string> => req(`/users/sign_out`, {}, "POST");

        const friends = ({ id, ...params }: FriendsListParams): Promise<UserBasic[]> => req(`/users/${id}/friends`, params, "GET");

        const clubs = ({ id }: IdField<UserId>): Promise<ClubBasic[]> => req(`/users/${id}/clubs`, {}, "GET");

        const animeRates = ({ id, ...params }: UsersAnimeRatesParams): Promise<UserRateExtended<AnimeBasicData>> => {
            return req(`/users/${id}/anime_rates`, params, "GET");
        };

        const mangaRates = ({ id, ...params }: UsersMangaRatesParams): Promise<UserRateExtended<MangaBasicData>> => {
            return req(`/users/${id}/manga_rates`, params, "GET");
        };

        const favourites = ({ id }: IdField<UserId>): Promise<UserFavourites> => {
            return req(`/users/${id}/favourites`, {}, "GET");
        };

        const messages = ({ id, ...params }: UsersMessagesParams): Promise<MessageData[]> => {
            return req(`/users/${id}/messages`, params, "GET");
        };

        const unreadMessages = ({ id }: IdField<UserId>): Promise<UserUnreadMessages> => {
            return req(`/users/${id}/unread_messages`, {}, "GET");
        };

        const history = ({ id, ...params }: UsersHistoryParams): Promise<UserHistoryRecord[]> => {
            return req(`/users/${id}/history`, params, "GET");
        };

        const bans = ({ id }: IdField<UserId>): Promise<BanData[]> => {
            return req(`/users/${id}/bans`, {}, "GET");
        };

        this.list = list;
        this.byId = byId;
        this.info = info;
        this.whoami = whoami;
        this.signOut = signOut;
        this.friends = friends;
        this.clubs = clubs;
        this.animeRates = animeRates;
        this.mangaRates = mangaRates;
        this.favourites = favourites;
        this.messages = messages;
        this.unreadMessages = unreadMessages;
        this.history = history;
        this.bans = bans;
    }
    /**
     * Список пользователей
     * @param params - параметры пагинации
     */
    public readonly list;
    /**
     * Получить пользователя по `UserId`
     * @param params - параметр id и опциональный флаг is_nickname
     */
    public readonly byId;
    /**
     * Получить краткую информацию о пользователе
     * @param params - объект с полем id
     */
    public readonly info;
    /**
     * Получить информацию о текущем пользователе
     */
    public readonly whoami;

    /**
     * Выйти из аккаунта
     */
    public readonly signOut;
    /**
     * Список друзей пользователя
     * @param params - объект с полем id и опциональными параметрами пагинации
     */
    public readonly friends;
    /**
     * Список клубов пользователя
     * @param params - объект с полем id
     */
    public readonly clubs;
    /**
     * Получить список аниме пользователя (anime rates)
     * @param params - параметры запроса (id, page, limit, status, censored)
     */
    public readonly animeRates;
    /**
     * Получить список манги пользователя (manga rates)
     * @param params - параметры запроса (id, page, limit, censored и т.д.)
     */
    public readonly mangaRates;

    /**
     * Получить избранное пользователя
     * @param params - объект с полем id
     */
    public readonly favourites;
    /**
     * Список сообщений между текущим пользователем и другим пользователем
     *
     * Требует OAuth-скоупа `messages`
     * @param params - параметры (id, page, limit, type)
     */
    public readonly messages;
    /**
     * Получить количество непрочитанных сообщений у пользователя
     * @param params - объект с полем id
     */
    public readonly unreadMessages;

    /**
     * История пользователя (history)
     * @param params - параметры запроса (id, page, limit, target_id, target_type)
     */
    public readonly history;

    /**
     * История банов пользователя
     * @param params - объект с полем id
     */
    public readonly bans;
}

