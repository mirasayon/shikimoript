import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { ShikimoriApi } from "shikimoript";
/**
 * Tests the Client API
 */
export async function testClient() {
    await describe(`Test ${ShikimoriApi.name} client`, async () => {
        const client = new ShikimoriApi();
        await it("Find anime by id", async () => {
            const anime = await client.animes.byId({ id: 20 });
            assert.equal(anime.id, 20);
        });
        await it("Finds anime related animes/mangas", async () => {
            const animes = await client.animes.related({ id: 20 });
            assert.ok(animes);
        });
    });
}

