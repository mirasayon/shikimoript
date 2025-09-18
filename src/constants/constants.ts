/** Базовый URL для API Shikimori */
export const BASE_URL = "https://shikimori.one" as const;
/** Путь к эндпоинту получения токена OAuth2 */
export const TOKEN_PATH = "/oauth/token" as const;
/** Строка User-Agent по умолчанию, используемая при выполнении API-запросов */
export const DEFAULT_USER_AGENT = "shikimoript" as const;
/** Максимальное количество API-вызовов в секунду */
export const MAX_CALLS_PER_SECOND = 5 as const;
/** Максимальное количество API-вызовов в минуту */
export const MAX_CALLS_PER_MINUTE = 90 as const;

export const MILLISECONDS_IN_SECOND = 1_000;
export const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;
