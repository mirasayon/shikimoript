/**
 * Любая асинхронная функция, возвращающая строку (не JSON-строку — только сырой текст ответа)
 */
export type ApiFetcherType = (url: URL, options?: CustomFetcherOptions | undefined) => Promise<string | null>;

type CustomFetcherOptions = {
    /** @defaultValue "GET" */
    method?: string | undefined;
    /** @defaultValue undefined */
    body?: BodyInit | null | undefined;
    /** @defaultValue undefined */
    headers?: HeadersInit | undefined;
};

