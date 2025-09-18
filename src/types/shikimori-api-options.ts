import type { CustomFetcher } from "./custom-fetcher.js";
import type { AuthToken, ClientNameOptionsField } from "./auth-layer-api-options.js";

/** Опции для конфигурирования обёртки Shikimori */
export interface ShikimoriApiOptions extends FetherOption, ClientNameOptionsField {
    /**
     * Необязательный `Token` — существующий access-токен для аутентификации
     */
    token?: AuthToken;
    /**
     * Число — максимальное количество API-вызовов в секунду
     * @defaultValue 5
     */
    maxCallsPerSecond?: number;
    /**
     * Число — максимальное количество API-вызовов в минуту
     * @defaultValue 90
     */
    maxCallsPerMinute?: number;
}

export interface FetherOption {
    /**
     * Пользовательская функция для выполнения HTTP-запросов.
     *
     * По умолчанию используется стандартная `fetch()` — та же `fetch`, которая доступна в [браузере](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
     * и на сервере ([Node.js](https://nodejs.org/en/learn/getting-started/fetch)).
     *
     * Вы можете передать собственную реализацию для своих нужд — например, для кэширования
     * или чтобы использовать другую HTTP-библиотеку.
     *
     * Например, в веб-приложениях вроде [`Next.js`](https://nextjs.org/) стандартную `fetch()` функцию
     * (на сервере — в браузере `fetch` остаётся обычной) иногда переопределяют и добавляют дополнительные опции,
     * такие как [`{ next: { revalidate: 3600 } }`](https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options) или `{ cache: 'force-cache' }`.
     * В таком случае следует передать собственную реализацию:
     *
     * **Пример использования в `Next.js`:**
     * ```ts
     * fetcher: async (url, options) => {
     *     try {
     *         const res = await fetch(url, { next: { revalidate: 3600, ...options } });
     *         return await res.text();
     *     } catch {
     *         return null;
     *     }
     * };,
     * ```
     *
     * @defaultValue
     * const defaultFetcher: CustomFetcher = async (url, options = {}) => {
     *     try {
     *         const res = await globalThis.fetch(url, { ...options });
     *         return await res.text();
     *     } catch {
     *         return null;
     *     }
     * };
     */

    fetcher?: CustomFetcher;
}

