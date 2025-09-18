import { ShikimoriApi } from "shikimoript";

const shikimori = new ShikimoriApi();
shikimori.accessToken = "YOUR_ACCESS_TOKEN";
const currentUser = await shikimori.users.whoami();
console.log(currentUser);

