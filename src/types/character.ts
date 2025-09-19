import type { DateTime } from "./common.js";
import type { AnimeBasicData } from "./anime.js";
import type { ImageSet } from "./image.js";
import type { MangaBasicData } from "./manga.js";
import type { PersonBasic } from "./person.js";
import type { TopicId } from "./topic.js";

/** @interface */
export type RoleBased<T> = T & {
    role: string;
    roles: string[];
};

export type CharacterId = number;

export interface Character {
    id: CharacterId;
    name: string;
    russian: string;
    image: ImageSet;
    url: string;
    altname: string | null;
    japanese: string | null;
    description: string | null;
    description_html: string | null;
    description_source: string | null;
    favoured: boolean;
    thread_id: number;
    topic_id: TopicId;
    updated_at: DateTime;
    seyu: PersonBasic[];
    animes: RoleBased<AnimeBasicData>[];
    mangas: RoleBased<MangaBasicData>[];
}

/** @interface */
export type CharacterBasic = Pick<Character, "id" | "name" | "russian" | "image" | "url">;

