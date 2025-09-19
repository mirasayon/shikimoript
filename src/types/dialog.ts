import type { MessageBasicData } from "./message.js";
import type { UserBasic } from "./user.js";

export type DialogId = number;

export interface DialogData {
    target_user: UserBasic;
    message: MessageBasicData;
}

