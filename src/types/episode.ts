import type { DateTime } from "./common.js";
import type { AnimeBasicData } from "./animes.js";

export interface Episode {
    next_episode: number;
    next_episode_at: DateTime;
    duration: number | null;
    anime: AnimeBasicData;
}

