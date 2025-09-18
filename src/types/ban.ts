import type { CommentBasic } from "./comment.js";
import type { UserId, UserBasic } from "./user.js";

export type BanId = number;

export interface BanData {
    id: BanId;
    user_id: UserId;
    comment: CommentBasic;
    moderator_id: number;
    reason: string;
    created_at: string;
    duration_minutes: number;
    user: UserBasic;
    moderator: UserBasic;
}

