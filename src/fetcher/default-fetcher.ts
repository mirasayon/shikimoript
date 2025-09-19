import { ShikimoriApiNotFoundError } from "../errors/api-errors.js";
import type { ApiFetcherType } from "../types/custom-fetcher.js";

export const defaultFetcher: ApiFetcherType = async (url, options = {}) => {
    if (typeof globalThis?.fetch !== "function") {
        throw new Error(
            "globalThis.fetch недоступен в этой среде. Предоставьте полифилл для fetch или передайте свою реализацию ассинхронной фунции запроса.",
        );
    }
    const res = await globalThis.fetch(url, { ...options });
    if (res.status === 404) {
        throw new ShikimoriApiNotFoundError();
    }
    return await res.text();
};

