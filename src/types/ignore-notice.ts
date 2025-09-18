import type { TopicId } from "./topic.js";

export interface IgnoreNotice {
    topic_id: TopicId;
    is_ignored: boolean;
}

