import { ShikimoriApi } from "shikimoript";
import type { MangaRelationData } from "shikimoript/types/manga.js";
const shikimori = new ShikimoriApi();
const relatedAnimeData: MangaRelationData[] = await shikimori.mangas.related({ id: 15 });
console.log(relatedAnimeData);

