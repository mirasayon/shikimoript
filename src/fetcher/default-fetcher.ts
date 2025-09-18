import type { CustomFetcher } from "../types/custom-fetcher.js";

export const defaultFetcher: CustomFetcher = async (url, options = {}) => {
    if (typeof globalThis?.fetch !== "function") {
        throw new Error(
            "globalThis.fetch недоступен в этой среде. Предоставьте полифилл для fetch или передайте свою реализацию ассинхронной фунции запроса.",
        );
    }

    try {
        const res = await globalThis.fetch(url, { ...options });
        return await res.text();
    } catch {
        return null;
    }
};

