export class ShikimoriApiError extends Error {
    public readonly responseText: string | undefined | null;
    constructor(message: string, responseText: string | null | undefined = undefined) {
        super(message);
        this.name = "ShikimoriApiError";
        this.responseText = responseText;
    }
}

export class MaximumFetchRequestsPerMinuteExceededError extends Error {
    constructor() {
        super("Maximum fetch requests per minute exceeded");
        this.name = "MaximumFetchRequestsPerMinuteExceeded";
    }
}

export class MaximumFetchRequestsPerSecondExceededError extends Error {
    constructor() {
        super("Maximum fetch requests per second exceeded");
        this.name = "MaximumFetchRequestsPerSecondExceeded";
    }
}

