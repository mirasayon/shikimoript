import type { DateTime, LinkedId, LinkedType } from "./common.js";
import type { UserBasic } from "./user.js";

export type MessageId = number;
export type MessageKind = "Private" | "FriendRequest" | "anons" | "ongoing" | "released";
export type MessageType = "inbox" | "private" | "sent" | "news" | "notifications";

export interface MessageData<T extends {} = {}> {
    id: MessageId;
    kind: MessageKind;
    read: boolean;
    body: string;
    html_body: string;
    created_at: DateTime;
    linked_id: LinkedId;
    linked_type: LinkedType;
    linked: T | null;
    from: UserBasic;
    to: UserBasic;
}

/** @interface */
export type MessageBasicData = Omit<MessageData, "from" | "to">;

