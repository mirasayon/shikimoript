import type { CommonContentData, ContentRelation } from "./content.js";
import type { GenreData } from "./genre.js";
import type { Publisher } from "./publisher.js";

export type MangaId = number;
export type MangaKind = "manga" | "manhwa" | "manhua" | "one_shot" | "doujin";
export type MangaStatus = "anons" | "ongoing" | "released" | "paused" | "discontinued";
export type MangaOrder =
    | "id"
    | "id_desc"
    | "ranked"
    | "kind"
    | "popularity"
    | "name"
    | "aired_on"
    | "volumes"
    | "chapters"
    | "status"
    | "random"
    | "created_at"
    | "created_at_desc";

export interface MangaData extends CommonContentData {
    id: MangaId;
    kind: MangaKind;
    status: MangaStatus;
    genres: GenreData<"Manga">[];
    volumes: number;
    chapters: number;
    publishers: Publisher[];
}

/** @interface */
export type MangaRelation = ContentRelation & { manga: MangaBasicData };
/** @interface */
export type MangaBasicData = Pick<
    MangaData,
    "id" | "name" | "russian" | "image" | "url" | "kind" | "score" | "status" | "volumes" | "chapters" | "aired_on" | "released_on"
>;

