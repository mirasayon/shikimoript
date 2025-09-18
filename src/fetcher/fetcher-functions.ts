import { BASE_URL, MILLISECONDS_IN_MINUTE, MILLISECONDS_IN_SECOND } from "../constants/constants.js";
import { MaximumFetchRequestsPerMinuteExceededError, MaximumFetchRequestsPerSecondExceededError, ShikimoriApiError } from "../errors/api-errors.js";
import type { CustomFetcher } from "../types/custom-fetcher.js";

export async function doRequest<T extends any>(path: string, options: RequestInit, fetcher: CustomFetcher): Promise<T> {
    const url = new URL(path, BASE_URL);
    const text = await fetcher(url, options);
    if (!text) {
        throw new ShikimoriApiError("Response text is null: ", text);
    }
    try {
        return JSON.parse(text) as T;
    } catch (error) {
        throw new ShikimoriApiError("Response text is invalid for parsing JSON: ", text);
    }
}

export type LimitedRequestFunction = <T extends any, S extends string>(path: S, options: RequestInit, fetcher: CustomFetcher) => Promise<T>;
/** Limited Request Factory */
export function limitedRequestFactory(maxCallsPerSecond: number, maxCallsPerMinute: number): LimitedRequestFunction {
    let secondFetchCount = 0;
    let minuteFetchCount = 0;
    let secondStart = Date.now();
    let minuteStart = Date.now();

    const limitedRequestFunction: LimitedRequestFunction = async (path, options, fetcher) => {
        const now = Date.now();
        if (now - secondStart >= MILLISECONDS_IN_SECOND) {
            secondFetchCount = 0;
            secondStart = now;
        }
        if (now - minuteStart >= MILLISECONDS_IN_MINUTE) {
            minuteFetchCount = 0;
            minuteStart = now;
        }
        secondFetchCount++;
        minuteFetchCount++;

        if (secondFetchCount > maxCallsPerSecond) {
            throw new MaximumFetchRequestsPerSecondExceededError();
        }

        if (minuteFetchCount > maxCallsPerMinute) {
            throw new MaximumFetchRequestsPerMinuteExceededError();
        }

        return await doRequest(path, options, fetcher);
    };
    return limitedRequestFunction;
}

