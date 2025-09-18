import { AuthLayerApi } from "shikimoript";

const authLayer = new AuthLayerApi({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
});

const newAccessToken = await authLayer.refreshAccessToken("YOUR_REFRESH_TOKEN");
