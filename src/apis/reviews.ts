import type { NoticeType } from "../types/common.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { ReviewData, ReviewId } from "../types/review.js";
import type { IdField } from "./common.js";

export interface ReviewsCreateParams {
    frontend?: boolean;
    review: Pick<ReviewData, "anime_id" | "body" | "opinion">;
}

export interface ReviewsUpdateParams {
    id: ReviewId;
    frontend?: boolean;
    review: Pick<ReviewData, "body" | "opinion">;
}

/**
 * Рецензии
 * @param methods Методы API (например `{ post, patch, _delete }`)
 */
export class ReviewsApi {
    constructor(request: ApiRequestHandler) {
        const create = (params: ReviewsCreateParams): Promise<ReviewData> => request("/reviews", params, "POST");
        const update = ({ id, ...params }: ReviewsUpdateParams): Promise<ReviewData> => request(`/reviews/${id}`, params, "PATCH");
        const destroy = ({ id }: IdField<ReviewId>): Promise<NoticeType> => request(`/reviews/${id}`, {}, "DELETE");

        this.create = create;
        this.update = update;
        this.destroy = destroy;
    }

    /**
     * Создать рецензию
     * @param params Параметры запроса (объект `review` с полями `anime_id`, `body`, `opinion`)
     */
    public readonly create: (params: ReviewsCreateParams) => Promise<ReviewData>;

    /**
     * Обновить рецензию
     * @param params Параметры запроса (содержат `id` и объект `review` с полями `body`, `opinion`)
     */
    public readonly update: ({ id, ...params }: ReviewsUpdateParams) => Promise<ReviewData>;

    /**
     * Удалить рецензию
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly destroy: ({ id }: IdField<ReviewId>) => Promise<NoticeType>;
}

