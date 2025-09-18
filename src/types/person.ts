import type { DateTime, Linkable } from "./common.js";
import type { AnimeBasic } from "./anime.js";
import type { CharacterBasic } from "./character.js";
import type { ImageSet } from "./image.js";
import type { MangaBasic } from "./manga.js";
import type { TopicId } from "./topic.js";

export type PersonKind = "seyu" | "mangaka" | "producer";
/** @interface */
export type PersonVitalDay = { [key in "day" | "month" | "year"]: number };
export type PersonGroupedRole = [string, number];

export interface PersonRole {
    characters: CharacterBasic[];
    anime: AnimeBasic[];
}

export interface PersonWork {
    anime: AnimeBasic | null;
    manga: MangaBasic | null;
    role: string;
}

export type PersonId = number;

export interface PersonData {
    id: PersonId;
    name: string;
    russian: string;
    image: ImageSet;
    url: string;
    japanese: string;
    job_title: string;
    birth_on: PersonVitalDay | null;
    deceased_on: PersonVitalDay | null;
    website: string;
    groupped_roles: PersonGroupedRole[];
    roles: PersonRole[];
    works: PersonWork[];
    topic_id: TopicId | null;
    person_favoured: boolean;
    producer: boolean;
    producer_favoured: boolean;
    mangaka: boolean;
    mangaka_favoured: boolean;
    seyu: boolean;
    seyu_favoured: boolean;
    updated_at: DateTime;
    thread_id: number | null;
    birthday: PersonVitalDay | null;
}

/** @interface */
export type PersonBasic = Pick<PersonData, "id" | "name" | "russian" | "image" | "url"> & Linkable;

