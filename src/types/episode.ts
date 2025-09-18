import type { DateTime } from "./common.js";
import type { AnimeBasic } from "./anime.js";

export interface Episode {
    next_episode: number;
    next_episode_at: DateTime;
    duration: number | null;
    anime: AnimeBasic;
}

