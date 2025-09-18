import type { DateTime, Linkable } from "./common.js";
import type { ContentData, ContentRelation } from "./content.js";
import type { GenreData } from "./genre.js";
import type { ImageSet } from "./image.js";
import type { Studio } from "./studio.js";
import type { VideoData } from "./video.js";

export type AnimeId = number;
export type AnimeDuration = "S" | "D" | "F";
export type AnimeStatus = "anons" | "ongoing" | "released";
export type AnimeTopicKind = AnimeStatus | "episode";
export type AnimeRating = "none" | "g" | "pg" | "pg_13" | "r" | "r_plus" | "rx";
export type AnimeKind = "tv" | "movie" | "ova" | "ona" | "special" | "music" | "tv_13" | "tv_24" | "tv_48";
export type AnimeOrder =
    | "id"
    | "id_desc"
    | "ranked"
    | "kind"
    | "popularity"
    | "name"
    | "aired_on"
    | "episodes"
    | "status"
    | "random"
    | "created_at"
    | "created_at_desc";

export interface AnimeData extends ContentData {
    id: AnimeId;
    kind: AnimeKind;
    status: AnimeStatus;
    episodes: number;
    episodes_aired: number;
    rating: AnimeRating;
    genres: GenreData<"Anime">[];
    duration: number;
    updated_at: DateTime;
    next_episode_at: number | null;
    fansubbers: string[];
    fandubbers: string[];
    studios: Studio[];
    videos: VideoData[];
    screenshots: ImageSet[];
}

/** @interface */
export type AnimeRelationData = ContentRelation & { anime: AnimeBasic };

/** @interface */
export type AnimeBasic = Pick<
    AnimeData,
    "id" | "name" | "russian" | "image" | "url" | "kind" | "score" | "status" | "episodes" | "episodes_aired" | "aired_on" | "released_on"
> &
    Linkable;

