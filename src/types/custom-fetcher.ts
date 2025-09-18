/**
 * Любая асинхронная функция, возвращающая строку (не JSON-строку — только сырой текст ответа),
 * представляющую ответ запроса, если ответ валиден, и `null` в случае ошибки.
 */
export type CustomFetcher = (url: URL, options?: CustomFetcherOptions | undefined) => Promise<string | null>;

type CustomFetcherOptions = {
    /** @defaultValue "GET" */
    method?: string | undefined;
    /** @defaultValue undefined */
    body?: BodyInit | null | undefined;
    /** @defaultValue undefined */
    headers?: HeadersInit | undefined;
};

