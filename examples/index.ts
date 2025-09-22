import { ShikimoriApi } from "shikimoript";
import type { MangaRelationData } from "shikimoript/types/manga.js";
const shikimori = new ShikimoriApi();
const relatedAnimeData: MangaRelationData[] = await shikimori.animes.related({ id: 20 });
console.log(relatedAnimeData[0].manga!.image);

