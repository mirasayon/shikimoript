export interface ImageSet {
    [size: string]: string | undefined;
}

export type ImageId = number;

export interface ImageData {
    id: ImageId;
    original_url: string;
    main_url: string;
    preview_url: string;
    can_destroy: boolean;
    user_id: number;
}

/** @interface */
export type ScreenshotData = { [key in "original" | "preview"]: string };

