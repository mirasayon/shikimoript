import type { CommentableType, CommentTemplate, CommentId } from "../types/comment.js";
import type { NoticeType } from "../types/common.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { IdField } from "./common.js";

export interface CommentsParams {
    commentable_id: number;
    commentable_type: CommentableType;
    page?: number;
    limit?: number;
    desc?: 1 | 0;
}

export interface CommentsCreateParams {
    comment?: CommentTemplate;
    frontend?: boolean;
    broadcast?: boolean;
}

export interface CommentsUpdateParams {
    id: CommentId;
    comment?: { body: string };
    frontend?: boolean;
}

/**
 * Комментарии
 * @param methods
 */
export class CommentsApi {
    constructor(request: ApiRequestHandler) {
        const list = (params: CommentsParams): Promise<Comment[]> => request("/comments", params, "GET");
        const byId = ({ id }: IdField<CommentId>): Promise<Comment> => request(`/comments/${id}`, {}, "GET");
        const create = (params: CommentsCreateParams): Promise<Comment> => request("/comments", params, "POST");
        const update = ({ id, ...params }: CommentsUpdateParams): Promise<Comment> => request(`/comments/${id}`, params, "PATCH");
        const destroy = ({ id }: IdField<CommentId>): Promise<NoticeType> => request(`/comments/${id}`, {}, "DELETE");

        this.list = list;
        this.byId = byId;
        this.create = create;
        this.update = update;
        this.destroy = destroy;
    }
    /**
     * Список комментариев
     * @param params
     */
    public readonly list: (params: CommentsParams) => Promise<Comment[]>;

    /**
     * Получить комментарий по `CommentId`
     * @param params
     */
    public readonly byId: ({ id }: IdField<number>) => Promise<Comment>;

    /**
     * Создать комментарий
     * @param params
     */
    public readonly create: (params: CommentsCreateParams) => Promise<Comment>;

    /**
     * Обновить комментарий
     * @param params
     */
    public readonly update: ({ id, ...params }: CommentsUpdateParams) => Promise<Comment>;

    /**
     * Удалить комментарий
     * @param params
     */
    public readonly destroy: ({ id }: IdField<number>) => Promise<NoticeType>;
}

