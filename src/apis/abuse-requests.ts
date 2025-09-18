import type { AbuseRequest } from "../types/abuse-request.js";
import type { CommentId } from "../types/comment.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { TopicId } from "../types/topic.js";

/** @interface */
export type AbuseRequestsOfftopicParams = { comment_id: CommentId };

export interface AbuseRequestsReviewParams {
    comment_id?: CommentId;
    topic_id?: TopicId;
}

export interface AbuseRequestsAbuseParams {
    comment_id?: CommentId;
    topic_id?: TopicId;
    reason?: string;
}

/**
 * Жалобы
 * @param request
 */
export class AbuseRequestsApi {
    constructor(request: ApiRequestHandler) {
        /**
         * Пометить комментарий как оффтоп
         * @param params
         */
        const offtopic = (params: AbuseRequestsOfftopicParams): Promise<AbuseRequest> => request("/v2/abuse_requests/offtopic", params, "POST");

        /**
         * Преобразовать комментарий в рецензию
         * @param params
         */
        const review = (params: AbuseRequestsReviewParams): Promise<void> => request("/v2/abuse_requests/review", params, "POST");

        /**
         * Создать жалобу о нарушении правил сайта
         * @param params
         */
        const abuse = (params: AbuseRequestsAbuseParams): Promise<void> => request("/v2/abuse_requests/abuse", params, "POST");

        /**
         * Создать жалобу на спойлер в контенте
         * @param params
         */
        const spoiler = (params: AbuseRequestsAbuseParams): Promise<void> => request("/v2/abuse_requests/spoiler", params, "POST");

        this.offtopic = offtopic;
        this.review = review;
        this.abuse = abuse;
        this.spoiler = spoiler;
    }

    /**
     * Пометить комментарий как оффтоп
     * @param params
     */
    public readonly offtopic;

    /**
     * Преобразовать комментарий в рецензию
     * @param params
     */
    public readonly review;

    /**
     * Создать жалобу о нарушении правил сайта
     * @param params
     */
    public readonly abuse;

    /**
     * Создать жалобу на спойлер в контенте
     * @param params
     */
    public readonly spoiler;
}

