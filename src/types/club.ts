import type { AnimeBasicData } from "./animes.js";
import type { CharacterBasic } from "./character.js";
import type { ImageData, ImageSet } from "./image.js";
import type { MangaBasicData } from "./manga.js";
import type { StylesId } from "./style.js";
import type { TopicId } from "./topic.js";
import type { UserBasic } from "./user.js";

export type ClubId = number;
export type ClubTopicPolicy = "members" | "admins";
export type ClubImageUploadPolicy = "members" | "admins";
export type ClubCommentPolicy = "free" | "members" | "admins";
export type ClubJoinPolicy = "free" | "member_invite" | "admin_invite" | "owner_invite";

export interface ClubUpdateTemplate {
    name?: string;
    description?: string | null;
    comment_policy?: ClubCommentPolicy;
    topic_policy?: ClubTopicPolicy;
    image_upload_policy?: ClubImageUploadPolicy;
}

export interface Club {
    id: ClubId;
    name: string;
    logo: ImageSet;
    is_censored: boolean;
    join_policy: ClubJoinPolicy;
    comment_policy: ClubCommentPolicy;
    description: string | null;
    description_html: string | null;
    thread_id: number;
    topic_id: TopicId;
    user_role: string | null;
    style_id: StylesId | null;
    images: ImageData[];
    members: UserBasic[];
    animes: AnimeBasicData[];
    mangas: MangaBasicData[];
    characters: CharacterBasic[];
}

/** @interface */
export type ClubBasic = Pick<Club, "id" | "name" | "logo" | "is_censored" | "join_policy" | "comment_policy">;

