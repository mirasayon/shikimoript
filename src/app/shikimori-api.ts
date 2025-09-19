import { limitedRequestFactory, type LimitedRequestFunction } from "../fetcher/fetcher-functions.js";
import { DEFAULT_USER_AGENT, MAX_CALLS_PER_MINUTE, MAX_CALLS_PER_SECOND } from "../constants/constants.js";
import { defaultFetcher } from "../fetcher/default-fetcher.js";
import type { ApiRequestHandler, ApiRequestParams, AuthToken, RequestMethod } from "../types/auth-layer-api-options.js";
import type { ApiFetcherType } from "../types/custom-fetcher.js";
import type { ShikimoriApiOptions } from "../types/shikimori-api-options.js";
import { AbuseRequestsApi } from "../apis/abuse-requests.js";
import { VideosApi } from "../apis/videos.js";
import { AnimesApi } from "../apis/animes.js";
import { BansApi } from "../apis/bans.js";
import { ClubsApi } from "../apis/clubs.js";
import { UsersApi } from "../apis/users.js";
import { UserRatesApi } from "../apis/user-rates.js";
import { RanobeApi } from "../apis/ranobe.js";
import { PeopleApi } from "../apis/people.js";
import { CalendarsApi } from "../apis/calendars.js";
import { MangasApi } from "../apis/mangas.js";
import { AchievementsApi } from "../apis/achievements.js";
import { PublishersApi } from "../apis/publishers.js";
import { GenresApi } from "../apis/genres.js";
import { AppearsApi } from "../apis/appears.js";
import { DialogsApi } from "../apis/dialogs.js";
import { FriendsApi } from "../apis/friends.js";
import { ForumsApi } from "../apis/forums.js";
import { FavoritesApi } from "../apis/favorites.js";
import { ConstantsApi } from "../apis/routes-map.js";
import { CommentsApi } from "../apis/comments.js";
import { EpisodeNotificationsApi } from "../apis/episode-notifications.js";
import { ReviewsApi } from "../apis/reviews.js";
import { StatsApi } from "../apis/stats.js";
import { StudiosApi } from "../apis/studios.js";
import { StylesApi } from "../apis/styles.js";
import { TopicIgnoresApi } from "../apis/topic-ignores.js";
import { TopicsApi } from "../apis/topics.js";
import { UserImagesApi } from "../apis/user-images.js";
import { UserIgnoresApi } from "../apis/user-ignores.js";

/**
 * Обёртка для API Shikimori, предоставляющая методы для взаимодействия с различными эндпоинтами.
 * @param options - Опции для настройки клиента, включая базовый URL, OAuth2-учётные данные и т.д.
 * @returns Объект с методами для работы с эндпоинтами и возможностью установки access-токена
 */
export class ShikimoriApi {
    private readonly clientName: string;
    private _accessToken: AuthToken;
    private readonly fetcher: ApiFetcherType;

    constructor({
        token,
        fetcher = defaultFetcher,
        clientName = DEFAULT_USER_AGENT,
        maxCallsPerSecond = MAX_CALLS_PER_SECOND,
        maxCallsPerMinute = MAX_CALLS_PER_MINUTE,
    }: ShikimoriApiOptions = {}) {
        this._accessToken = token;
        this.clientName = clientName;
        this.fetcher = fetcher;
        this.limitedRequest = limitedRequestFactory(maxCallsPerSecond, maxCallsPerMinute);
    }
    private limitedRequest: LimitedRequestFunction;
    public get accessToken(): AuthToken | undefined {
        return this._accessToken ?? undefined;
    }

    /**
     * Токен доступа для OAuth2 клиента
     * @param token - Устанавливаемый access-токен
     */
    public set accessToken(token: AuthToken | undefined) {
        this._accessToken = token;
    }

    private methods: ApiRequestHandler = async <T extends unknown, S extends string>(
        endpoint: S,
        params: ApiRequestParams,
        type: RequestMethod,
    ): Promise<T> => {
        const shouldUseBodyParams: boolean = type !== "GET";
        let fullUrl = `/api${endpoint}`;
        if (!shouldUseBodyParams && params) {
            const searchParams = new URLSearchParams(Object.entries(params));
            fullUrl += `?${searchParams}`;
        }

        const headers = new Headers({
            "User-Agent": this.clientName,
        });

        if (this._accessToken) {
            headers.set("Authorization", `Bearer ${this._accessToken}`);
        }

        if (shouldUseBodyParams && params) {
            headers.set("Content-Type", "application/json");
        }

        return await this.limitedRequest(
            fullUrl,
            {
                method: type,
                headers,
                body: shouldUseBodyParams && params ? JSON.stringify(params) : undefined,
            },
            this.fetcher,
        );
    };

    abuseRequests = new AbuseRequestsApi(this.methods);
    achievements = new AchievementsApi(this.methods);
    animes = new AnimesApi(this.methods);
    appears = new AppearsApi(this.methods);
    bans = new BansApi(this.methods);
    calendars = new CalendarsApi(this.methods);
    characters = new CalendarsApi(this.methods);
    clubs = new ClubsApi(this.methods);
    comments = new CommentsApi(this.methods);
    constants = new ConstantsApi(this.methods);
    dialogs = new DialogsApi(this.methods);
    episodeNotifications = new EpisodeNotificationsApi(this.methods);
    favorites = new FavoritesApi(this.methods);
    forums = new ForumsApi(this.methods);
    friends = new FriendsApi(this.methods);
    genres = new GenresApi(this.methods);
    mangas = new MangasApi(this.methods);
    people = new PeopleApi(this.methods);
    publishers = new PublishersApi(this.methods);
    ranobe = new RanobeApi(this.methods);
    reviews = new ReviewsApi(this.methods);
    stats = new StatsApi(this.methods);
    studios = new StudiosApi(this.methods);
    styles = new StylesApi(this.methods);
    topicIgnores = new TopicIgnoresApi(this.methods);
    topics = new TopicsApi(this.methods);
    userIgnores = new UserIgnoresApi(this.methods);
    userImages = new UserImagesApi(this.methods);
    userRates = new UserRatesApi(this.methods);
    users = new UsersApi(this.methods);
    videos = new VideosApi(this.methods);
}

