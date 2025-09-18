import type { CharacterBasic } from "./character.js";
import type { PersonBasic } from "./person.js";

export interface RoleData {
    roles: string[];
    roles_russian: string[];
    character: CharacterBasic | null;
    person: PersonBasic | null;
}

