import type { AnimeBasicData } from "../types/anime.js";
import type { CharacterBasic } from "../types/character.js";
import type { ClubId, ClubUpdateTemplate, ClubBasic, Club } from "../types/club.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { MangaBasicData } from "../types/manga.js";
import type { RanobeBasic } from "../types/ranobe.js";
import type { TopicData } from "../types/topic.js";
import type { UserBasic } from "../types/user.js";
import type { IdField } from "./common.js";
import type { ImageData } from "../types/image.js";
export interface ClubsParams {
    page?: number;
    limit?: number;
    search?: string;
}

export interface ClubsUpdateParams {
    id: ClubId;
    club?: ClubUpdateTemplate;
}

export interface ClubsContentParams {
    id: number;
    page?: number;
    limit?: number;
}

/**
 * Клубы
 * @param methods
 */
export class ClubsApi {
    constructor(request: ApiRequestHandler) {
        const list = (params: ClubsParams): Promise<ClubBasic[]> => request("/clubs", params, "GET");

        const byId = ({ id }: IdField<ClubId>): Promise<Club> => request(`/clubs/${id}`, {}, "GET");

        const update = ({ id }: ClubsUpdateParams): Promise<Club> => request(`/clubs/${id}`, {}, "PATCH");

        const animes = ({ id, ...params }: ClubsContentParams): Promise<AnimeBasicData[]> => request(`/clubs/${id}/animes`, params, "GET");

        const mangas = ({ id, ...params }: ClubsContentParams): Promise<MangaBasicData[]> => request(`/clubs/${id}/mangas`, params, "GET");

        const ranobe = ({ id, ...params }: ClubsContentParams): Promise<RanobeBasic[]> => request(`/clubs/${id}/ranobe`, params, "GET");

        const characters = ({ id, ...params }: ClubsContentParams): Promise<CharacterBasic[]> => request(`/clubs/${id}/characters`, params, "GET");

        const collections = ({ id, ...params }: ClubsContentParams): Promise<TopicData[]> => request(`/clubs/${id}/collections`, params, "GET");

        const clubs = ({ id, ...params }: ClubsContentParams): Promise<ClubBasic[]> => request(`/clubs/${id}/clubs`, params, "GET");

        const members = ({ id, ...params }: ClubsContentParams): Promise<UserBasic[]> => request(`/clubs/${id}/members`, params, "GET");

        const images = ({ id, ...params }: ClubsContentParams): Promise<ImageData[]> => request(`/clubs/${id}/images`, params, "GET");

        const join = ({ id }: IdField<ClubId>): Promise<void> => request(`/clubs/${id}/join`, {}, "POST");

        const leave = ({ id }: IdField<ClubId>): Promise<void> => request(`/clubs/${id}/leave`, {}, "POST");

        this.list = list;
        this.byId = byId;
        this.update = update;
        this.animes = animes;
        this.mangas = mangas;
        this.ranobe = ranobe;
        this.characters = characters;
        this.collections = collections;
        this.clubs = clubs;
        this.members = members;
        this.images = images;
        this.join = join;
        this.leave = leave;
    }
    /**
     * Список клубов
     * @param params
     */
    public readonly list: (params: ClubsParams) => Promise<ClubBasic[]>;
    /**
     * Получить клуб по `ClubId`
     * @param params
     */
    public readonly byId: ({ id }: IdField<number>) => Promise<Club>;
    /**
     * Обновить клуб
     * @param params
     */
    public readonly update: ({ id }: ClubsUpdateParams) => Promise<Club>;
    /**
     * Данные Аниме клуба
     * @param params
     */
    public readonly animes: ({ id, ...params }: ClubsContentParams) => Promise<AnimeBasicData[]>;

    /**
     * Данные Манга клуба
     * @param params
     */
    public readonly mangas: ({ id, ...params }: ClubsContentParams) => Promise<MangaBasicData[]>;
    /**
     * Данные Ранобэ клуба
     * @param params
     */
    public readonly ranobe: ({ id, ...params }: ClubsContentParams) => Promise<RanobeBasic[]>;
    /**
     * Персонажи клуба
     * @param params
     */
    public readonly characters: ({ id, ...params }: ClubsContentParams) => Promise<CharacterBasic[]>;

    /**
     * Коллекции клуба
     * @param params
     */
    public readonly collections: ({ id, ...params }: ClubsContentParams) => Promise<TopicData[]>;

    /**
     * Дружественные клубы
     * @param params
     */
    public readonly clubs: ({ id, ...params }: ClubsContentParams) => Promise<ClubBasic[]>;
    /**
     * Участники клуба
     * @param params
     */
    public readonly members: ({ id, ...params }: ClubsContentParams) => Promise<UserBasic[]>;

    /**
     * Изображения клуба
     * @param params
     */
    public readonly images: ({ id, ...params }: ClubsContentParams) => Promise<ImageData[]>;
    /**
     * Вступить в клуб
     * @param params
     */
    public readonly join: ({ id }: IdField<number>) => Promise<void>;
    /**
     * Покинуть клуб
     * @param params
     */
    public readonly leave: ({ id }: IdField<number>) => Promise<void>;
}

