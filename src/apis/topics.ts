import type { LinkedId, LinkedType, NoticeType } from "../types/common.js";
import type { ForumId } from "../types/forum.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { TopicForum, TopicType, TopicData, TopicBasic, TopicId } from "../types/topic.js";
import type { UserId } from "../types/user.js";
import type { IdField } from "./common.js";

export interface TopicsListParams {
    page?: number;
    limit?: number;
    forum?: TopicForum;
    linked_id?: LinkedId;
    linked_type?: LinkedType;
    type?: TopicType;
}

export interface TopicsUpdatesParams {
    page: number;
    limit: number;
}

/** Интерфейс параметров для горячих тем */
export type TopicsHotParams = { limit: number };

export interface TopicTemplate {
    body: string;
    forum_id: ForumId;
    linked_id?: LinkedId;
    linked_type?: LinkedType;
    title: string;
    type: TopicType;
    user_id: UserId;
}

/** Интерфейс параметров создания темы */
export type TopicsCreateParams = { topic: TopicTemplate };

export interface TopicUpdateTemplate {
    body?: string;
    linked_id?: LinkedId;
    linked_type?: LinkedType;
    title?: string;
}

export interface TopicsUpdateParams {
    topic: TopicsUpdateParams;
}

/**
 * Темы (Topics)
 * @param methods - набор методов для выполнения API-запросов
 */
export class TopicsApi {
    constructor(req: ApiRequestHandler) {
        const list = (params: TopicsListParams): Promise<TopicData[]> => req(`/topics`, params, "GET");
        const updates = (params: TopicsUpdatesParams): Promise<TopicBasic[]> => req(`/topics/updates`, params, "GET");
        const hot = (params: TopicsHotParams): Promise<TopicData[]> => req(`/topics/hot`, params, "GET");
        const byId = ({ id }: IdField<TopicId>): Promise<TopicData> => req(`/topics/${id}`, {}, "GET");
        const create = (params: TopicsCreateParams): Promise<TopicData> => req(`/topics`, params, "POST");
        const update = (params: TopicsUpdateParams): Promise<TopicData> => req(`/topics`, params, "POST");
        const destroy = ({ id }: IdField<TopicId>): Promise<NoticeType> => req(`/topics/${id}`, {}, "DELETE");

        this.list = list;
        this.updates = updates;
        this.hot = hot;
        this.byId = byId;
        this.create = create;
        this.update = update;
        this.destroy = destroy;
    }

    /**
     * Список тем
     * @param params - параметры запроса (пагинация, фильтры)
     */
    public readonly list: (params: TopicsListParams) => Promise<TopicData[]>;

    /**
     * Список тем/новостей об обновлениях базы данных
     * @param params - параметры пагинации
     */
    public readonly updates: (params: TopicsUpdatesParams) => Promise<TopicBasic[]>;

    /**
     * Список популярных (hot) тем
     * @param params - параметры запроса (limit)
     */
    public readonly hot: (params: TopicsHotParams) => Promise<TopicData[]>;

    /**
     * Получить тему по `TopicId`
     * @param params - объект с полем id
     */
    public readonly byId: ({ id }: IdField<TopicId>) => Promise<TopicData>;

    /**
     * Создать тему
     *
     * Требует OAuth-скоупа `topics`
     * @param params - параметры создания (см. TopicsCreateParams)
     */
    public readonly create: (params: TopicsCreateParams) => Promise<TopicData>;

    /**
     * Обновить тему
     *
     * Требует OAuth-скоупа `topics`
     * @param params - параметры обновления (см. TopicsUpdateParams)
     */
    public readonly update: (params: TopicsUpdateParams) => Promise<TopicData>;

    /**
     * Удалить тему
     *
     * Требует OAuth-скоупа `topics`
     * @param params - объект с полем id
     */
    public readonly destroy: ({ id }: IdField<TopicId>) => Promise<NoticeType>;
}

