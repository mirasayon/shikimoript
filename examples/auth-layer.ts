import { AuthLayerApi } from "shikimoript";

const authLayer = new AuthLayerApi({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
});

const accessToken = await authLayer.getAccessToken("YOUR_AUTH_CODE");

console.log(accessToken);

