import type { CharacterId, Character, CharacterBasic } from "../types/character.js";
import type { ApiRequestHandler } from "../types/auth-layer-api-options.js";

/** @interface */
export type CharactersParams = { id: CharacterId };
/** @interface */
export type CharactersSearchParams = { search: string };

/**
 * Персонажи
 * @param request
 */
export class CharactersApi {
    constructor(request: ApiRequestHandler) {
        const byId = ({ id }: CharactersParams): Promise<Character> => request(`/characters/${id}`, {}, "GET");
        const search = (params: CharactersSearchParams): Promise<CharacterBasic[]> => request(`/characters/search`, params, "GET");

        this.byId = byId;
        this.search = search;
    }

    /**
     * Получить персонажа по `CharacterId`
     * @param params
     */
    public readonly byId: ({ id }: CharactersParams) => Promise<Character>;

    /**
     * Поиск персонажей
     * @param params
     */
    public readonly search: (params: CharactersSearchParams) => Promise<CharacterBasic[]>;
}

