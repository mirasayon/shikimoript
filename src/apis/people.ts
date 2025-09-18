import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";
import type { PersonData, PersonBasic, PersonKind } from "../types/person.js";
import type { IdField } from "./common.js";

export interface PeopleSearchParams {
    search?: string;
    kind?: PersonKind;
}

/**
 * Персоны
 * @param methods Методы API (например `{ get }`)
 */
export class PeopleApi {
    constructor(req: ApiRequestHandler) {
        const byId = ({ id }: IdField<PersonKind>): Promise<PersonData> => req(`/people/${id}`, {}, "GET");

        const search = (params: PeopleSearchParams): Promise<PersonBasic[]> => req("/people", params, "GET");

        this.byId = byId;
        this.search = search;
    }

    /**
     * Получить персону по `PersonId`
     * @param params Параметры запроса (содержат `id`)
     */
    public readonly byId: ({ id }: IdField<PersonKind>) => Promise<PersonData>;

    /**
     * Искать персон
     * @param params Параметры поиска (строка `search`, тип `kind`)
     */
    public readonly search: (params: PeopleSearchParams) => Promise<PersonBasic[]>;
}

