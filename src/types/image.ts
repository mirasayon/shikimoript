export interface ImageSet {
    original: string;
    preview: string;
    x96: string;
    x48: string;
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
export type ScreenshotData = {
    original: string;
    preview: string;
};

