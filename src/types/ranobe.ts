import type { ContentData, ContentRelation } from "./content.js";
import type { GenreData } from "./genre.js";
import type { Publisher } from "./publisher.js";
import type { Linkable } from "./common.js";

export type RanobeId = number;
export type RanobeStatus = "anons" | "ongoing" | "released" | "paused" | "discontinued";
export type RanobeKind = "light_novel" | "novel";
export type RanobeOrder =
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

export interface Ranobe extends ContentData {
    id: RanobeId;
    kind: RanobeKind;
    status: RanobeStatus;
    genres: GenreData<"Manga">[];
    volumes: number;
    chapters: number;
    publishers: Publisher[];
}

/** @interface */
export type RanobeRelation = ContentRelation & { manga: RanobeBasic };
/** @interface */
export type RanobeBasic = Pick<
    Ranobe,
    "id" | "name" | "russian" | "image" | "url" | "kind" | "score" | "status" | "volumes" | "chapters" | "aired_on" | "released_on"
> &
    Linkable;

