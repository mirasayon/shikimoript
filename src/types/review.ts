import type { DateTime } from "./common.js";
import type { AnimeId } from "./anime.js";
import type { MangaId } from "./manga.js";
import type { UserId } from "./user.js";

export type ReviewId = number;
export type ReviewOpinion = "positive" | "neutral" | "negative";

export interface ReviewData {
    id: ReviewId;
    user_id: UserId;
    anime_id: AnimeId | null;
    manga_id: MangaId | null;
    body: string;
    opinion: ReviewOpinion;
    is_written_before_release: boolean;
    created_at: DateTime;
    updated_at: DateTime;
    comments_count: number;
    cached_votes_up: number;
    cached_votes_down: number;
    changed_at: DateTime | null;
}

