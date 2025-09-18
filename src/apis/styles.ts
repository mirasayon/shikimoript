import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { StylesType, StylesId } from "../types/style.js";
import type { IdField } from "./common.js";

/** Параметры для предварительного просмотра стиля */
export interface StylesPreviewParams {
    style: Pick<StylesType, "css">;
}

/** Параметры для создания стиля */
export interface StylesCreateParams {
    style: Pick<StylesType, "css" | "name" | "owner_id" | "owner_type">;
}

/** Параметры для обновления стиля */
export interface StylesUpdateParams {
    id: StylesId;
    style: Pick<StylesType, "css" | "name">;
}

/**
 * Стили
 */
export class StylesApi {
    constructor(req: ApiRequestHandler) {
        const byId = ({ id }: IdField<StylesId>): Promise<StylesType> => req(`/styles/${id}`, {}, "GET");
        const preview = (params: StylesPreviewParams): Promise<StylesType> => req(`/styles/preview`, params, "POST");

        const create = (params: StylesCreateParams): Promise<StylesType> => req(`/styles`, params, "POST");
        const update = ({ id, ...params }: StylesUpdateParams): Promise<StylesType> => req(`/styles/${id}`, params, "PATCH");

        this.byId = byId;
        this.preview = preview;
        this.create = create;
        this.update = update;
    }

    /**
     * Получить стиль по `StyleId`.
     * @param params Параметры запроса (содержит `id`).
     */
    public readonly byId: ({ id }: IdField<StylesId>) => Promise<StylesType>;

    /**
     * Предварительный просмотр стиля.
     * @param params Параметры запроса (содержит объект `style` с полем `css`).
     */
    public readonly preview: (params: StylesPreviewParams) => Promise<StylesType>;

    /**
     * Создать стиль.
     * @param params Параметры запроса (содержит объект `style` с полями `css`, `name`, `owner_id`, `owner_type`).
     */
    public readonly create: (params: StylesCreateParams) => Promise<StylesType>;

    /**
     * Обновить стиль.
     * @param params Параметры запроса (содержит `id` и объект `style` с полями для обновления).
     */
    public readonly update: ({ id, ...params }: StylesUpdateParams) => Promise<StylesType>;
}

