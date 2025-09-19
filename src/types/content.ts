import type { ImageSet } from "./image.js";
import type { Publisher } from "./publisher.js";
import type { TopicId } from "./topic.js";
import type { UserRateBasic } from "./user-rate.js";

export interface RateStatusStat {
    name: string;
    value: number;
}

/** @interface */
export type RateScoreStat = { [key in "name" | "value"]: number };
export type DayType = string;

export interface CommonContentData {
    name: string;
    russian: string;
    image: ImageSet;
    url: string;
    score: string;
    aired_on: DayType | null;
    released_on: DayType | null;
    english: string[] | [null];
    japanese: string[] | [null];
    synonims: string[] | [null];
    license_name_ru: string | null;
    description: string | null;
    description_html: string | null;
    description_source: string | null;
    franchise: string | null;
    favoured: boolean;
    anons: boolean;
    ongoing: boolean;
    thread_id: number;
    topic_id: TopicId;
    myanimelist_id: number;
    rates_scores_stats: RateScoreStat[];
    rates_statuses_stats: RateStatusStat[];
    licensors: string[];
    publishers: Publisher[];
    user_rate: UserRateBasic | null;
}

export interface ContentRelation {
    relation: string;
    relation_string: string;
}

