import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { UserImageData } from "../types/user-image.js";

export interface UserImagesCreateParams {
    image: string;
    linked_type?: string;
}

/**
 * Изображения пользователя
 * @param methods - набор методов для выполнения API-запросов
 */
export class UserImagesApi {
    constructor(req: ApiRequestHandler) {
        const _create_ = (params: UserImagesCreateParams): Promise<UserImageData> => req(`/user_images`, params, "POST");
        this.create = _create_;
    }
    /**
     * Создать изображение пользователя
     * @param params - параметры запроса
     */
    public readonly create: (params: UserImagesCreateParams) => Promise<UserImageData>;
}

