import { setTimeout } from "node:timers/promises";
import { ShikimoriApi } from "shikimoript";

const client = new ShikimoriApi();
// const now = new Date();
// console.log(now.toString());
// for (let index = 0; index <= 100; index++) {
// console.log(new Date().toString() + " -- " + index);
const anime = await client.animes.byId({ id: 20 });
console.log(anime.name);
// }

