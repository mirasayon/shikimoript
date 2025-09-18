import type { GenreData } from "../types/genre.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";

/**
 * Жанры
 */
export class GenresApi {
    constructor(request: ApiRequestHandler) {
        const list = (): Promise<GenreData[]> => request("/genres", {}, "GET");
        this.list = list;
    }
    /**
     * Получить список жанров
     * @param params Параметры запроса (отсутствуют)
     */
    public readonly list: () => Promise<GenreData[]>;
}

