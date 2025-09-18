import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { TopicId, TopicIgnore } from "../types/topic.js";

/** Параметры для операций игнорирования темы */
export type TopicIgnoreParams = { topic_id: TopicId };

/**
 * Игнорирование тем.
 */
export class TopicIgnoresApi {
    constructor(req: ApiRequestHandler) {
        const ignore = ({ topic_id }: TopicIgnoreParams): Promise<TopicIgnore> => req(`/v2/topics/${topic_id}/ignore`, {}, "POST");
        const unignore = ({ topic_id }: TopicIgnoreParams): Promise<TopicIgnore> => req(`/v2/topics/${topic_id}/ignore`, {}, "DELETE");
        this.ignore = ignore;
        this.unignore = unignore;
    }

    /**
     * Игнорировать тему.
     *
     * Требуется OAuth-скоуп `ignores`.
     * @param params Параметры запроса (содержит `topic_id`).
     */
    public readonly ignore: ({ topic_id }: TopicIgnoreParams) => Promise<TopicIgnore>;

    /**
     * Снять игнор с темы.
     *
     * Требуется OAuth-скоуп `ignores`.
     * @param params Параметры запроса (содержит `topic_id`).
     */
    public readonly unignore: ({ topic_id }: TopicIgnoreParams) => Promise<TopicIgnore>;
}

