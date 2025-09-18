import type { DateTime } from "./common.js";

export type StylesId = number;
/**
 * @interface
 */
export interface StylesType {
    id: StylesId | null;
    owner_id: number | null;
    owner_type: "User" | "Club" | null;
    name: string;
    css: string;
    compiled_css: string;
    created_at: DateTime | null;
    updated_at: DateTime | null;
}

