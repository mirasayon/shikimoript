import type { IdField } from "./common.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { NoticeType } from "../types/common.js";
import type { DialogData, DialogId } from "../types/dialog.js";
import type { Message } from "../types/message.js";

/**
 * Диалоги
 * @param methods Методы API
 */
export class DialogsApi {
    constructor(request: ApiRequestHandler) {
        const list = (): Promise<DialogData[]> => request("/dialogs", {}, "GET");
        const byId = ({ id }: IdField<DialogId>): Promise<Message[]> => request(`/dialogs/${id}`, {}, "GET");
        const destroy = ({ id }: IdField<DialogId>): Promise<NoticeType> => request(`/dialogs/${id}`, {}, "DELETE");

        this.list = list;
        this.byId = byId;
        this.destroy = destroy;
    }

    /**
     * Получить список диалогов
     *
     * Требует `messages` OAuth-право
     * @param params Параметры запроса
     */
    public readonly list: () => Promise<DialogData[]>;

    /**
     * Получить список сообщений из определённого диалога
     *
     * Требует `messages` OAuth-право
     * @param params Параметры запроса
     */
    public readonly byId: ({ id }: IdField<DialogId>) => Promise<Message[]>;

    /**
     * Удалить диалог
     *
     * Требует `messages` OAuth-право
     * @param params Параметры запроса
     */
    public readonly destroy: ({ id }: IdField<DialogId>) => Promise<NoticeType>;
}

