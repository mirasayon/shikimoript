import type { NoticeSuccess } from "../types/common.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";

export type FavoritesLinkedType = "Anime" | "Manga" | "Ranobe" | "Person" | "Character";
export type FavoritesKind = "common" | "seyu" | "mangaka" | "producer" | "person";

export interface FavoritesCreateParams {
    linked_id: number;
    linked_type: FavoritesLinkedType;
    kind?: FavoritesKind;
}

export interface FavoritesDestroyParams {
    linked_id: number;
    linked_type: FavoritesLinkedType;
}

export interface FavoritesReorderParams {
    id: number;
    new_index: FavoritesLinkedType;
}

/**
 * Избранное
 */
export class FavoritesApi {
    constructor(request: ApiRequestHandler) {
        const create = ({ linked_id, linked_type, kind }: FavoritesCreateParams): Promise<NoticeSuccess> => {
            const favoritesKind = kind ? `/${kind}` : "";
            return request(`/favorites/${linked_type}/${linked_id}${favoritesKind}`, {}, "GET");
        };
        const destroy = ({ linked_type, linked_id }: FavoritesDestroyParams): Promise<NoticeSuccess> => {
            return request(`/favorites/${linked_type}/${linked_id}`, {}, "DELETE");
        };
        const reorder = ({ id, ...params }: FavoritesReorderParams): Promise<void> => {
            return request(`/favorites/${id}/reorder`, params, "POST");
        };

        this.create = create;
        this.destroy = destroy;
        this.reorder = reorder;
    }

    /**
     * Добавить в избранное
     * @param params Параметры запроса (содержат `linked_id`, `linked_type`, опционально `kind`)
     */
    public readonly create: ({ linked_id, linked_type, kind }: FavoritesCreateParams) => Promise<NoticeSuccess>;

    /**
     * Удалить из избранного
     * @param params Параметры запроса (содержат `linked_id`, `linked_type`)
     */
    public readonly destroy: ({ linked_type, linked_id }: FavoritesDestroyParams) => Promise<NoticeSuccess>;

    /**
     * Назначить новый порядок элементу в избранном
     * @param params Параметры запроса
     */
    public readonly reorder: ({ id, ...params }: FavoritesReorderParams) => Promise<void>;
}

