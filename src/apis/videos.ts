import type { AnimeId } from "../types/anime.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { VideoData, VideoId } from "../types/video.js";

/** Интерфейс параметров списка видео */
export type VideosListParams = { anime_id: AnimeId };

export interface VideosCreateParams {
    anime_id: AnimeId;
    video: Pick<VideoData, "kind" | "name" | "url">;
}

export interface VideosDestroyParams {
    anime_id: AnimeId;
    video_id: VideoId;
}

/**
 * Видео
 * @param req - набор методов для выполнения API-запросов
 */
export class VideosApi {
    constructor(req: ApiRequestHandler) {
        const byId = ({ anime_id }: VideosListParams): Promise<VideoData[]> => req(`/animes/${anime_id}/videos`, {}, "GET");

        const create = ({ anime_id, ...params }: VideosCreateParams): Promise<VideoData> => req(`/animes/${anime_id}/videos`, params, "POST");

        const destroy = ({ anime_id, video_id }: VideosDestroyParams): Promise<void> => req(`/animes/${anime_id}/videos/${video_id}`, {}, "DELETE");

        this.byId = byId;
        this.create = create;
        this.destroy = destroy;
    }
    /**
     * Удаляет видео
     *
     * Требует OAuth-скоупа `content`
     * @param params - параметры удаления (см. VideosDestroyParams)
     */
    public readonly destroy: ({ anime_id, video_id }: VideosDestroyParams) => Promise<void>;
    /**
     * Создаёт видео
     *
     * Требует OAuth-скоупа `content`
     * @param params - параметры создания (см. VideosCreateParams)
     */
    public readonly create: ({ anime_id, ...params }: VideosCreateParams) => Promise<VideoData>;
    /**
     * Получает массив видео по `AnimeId`
     * @param params - параметры запроса
     */
    public readonly byId: ({ anime_id }: VideosListParams) => Promise<VideoData[]>;
}

