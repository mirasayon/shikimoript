import type { DateTime } from "./common.js";
import type { AnimeBasicData, AnimeId } from "./animes.js";
import type { MangaBasicData, MangaId } from "./manga.js";
import type { RanobeId } from "./ranobe.js";
import type { UserBasic, UserId } from "./user.js";

export type UserRateId = number;
export type UserRateStatus = "planned" | "watching" | "completed" | "rewatching" | "on_hold" | "dropped";

export interface UserRate {
    id: UserRateId;
    user_id: UserId;
    target_id: AnimeId | MangaId | RanobeId;
    target_type: "Anime" | "Manga";
    score: number;
    status: UserRateStatus;
    rewatches: number;
    episodes: number;
    volumes: number;
    chapters: number;
    text: string | null;
    text_html: string | null;
    created_at: DateTime;
    updated_at: DateTime;
}

export interface UserRateExtended<T extends AnimeBasicData | MangaBasicData> extends UserRate {
    user: UserBasic;
    anime: T extends AnimeBasicData ? AnimeBasicData : null;
    manga: T extends MangaBasicData ? MangaBasicData : null;
}

export interface UserRateTemplate {
    user_id: UserId;
    target_id: AnimeId | MangaId | RanobeId;
    target_type: "Anime" | "Manga";
    score?: number;
    status?: UserRateStatus;
    rewatches?: number;
    episodes?: number;
    volumes?: number;
    chapters?: number;
    text?: string | null;
}

/** @interface */
export type UserRateBasic = Omit<UserRate, "user_id" | "target_id" | "target_type">;

