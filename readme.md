<p align="center"><img src="./.github/shikimoript-logo.svg" alt="shikimoript logo"></p>

> **Shikimori** for javascri**pt** -
> Universal shikimori.one API wrapper for modern Javascript
> /
> Универсальная обёртка для API shikimori.one для современного JavaScript.

> ⚠️ Предупреждение
>
> Пакет пока не прошёл полноценное тестирование.
> Рекомендуется не использовать его в продакшне до выхода версии `1.0.0`.

[![NPM version](https://img.shields.io/npm/v/shikimoript.svg?style=flat)](https://npmjs.com/package/shikimoript)
[![NPM downloads](https://img.shields.io/npm/dw/shikimoript.svg?style=flat)](https://npmjs.com/package/shikimoript)
[![donate](https://img.shields.io/badge/♥︎⋆˙⟡♥︎-support-BF36FF.svg?maxAge=2592000&style=flat)](https://github.com/mirasayon/donate)
[![install size](https://badgen.net/packagephobia/install/shikimoript)](https://packagephobia.now.sh/result?p=shikimoript)

Репозиторий проекта - [github.com/mirasayon/shikimoript](https://github.com/mirasayon/shikimoript#readme)

Ссылка на NPM пакет - [npmjs.com/package/shikimoript](https://npmjs.com/package/shikimoript)

## Библиотека `shikimoript` - это обёртка над API [shikimori.one](https://shikimori.one/api/doc/2.0.html)

Вы можете исползовать эту библиотеку и на клиенте и на сервере

Поддерживается Node.js версии 18 и выше

Поддерживает работу в альтернативных рантаймах таких как Deno, Bun

Библиотека написана только на модулях ESM ([Подробнее о ESM](https://nodejs.org/api/esm.html))

У этой библиотеки зависимостей нет

## Установка

Если вы исползуете стандартный пакетный менеджер для Node.js - [NPM](https://docs.npmjs.com/about-npm):

```bash
npm i shikimoript
# или если вы исползуете `yarn`:
yarn add shikimoript
# если `pnpm`:
pnpm add shikimoript
```

## Документация

Чтобы использовать библиотеку, просто импортируйте её в свой проект и создайте экземпляр `ApiClient`. После этого вы сможете использовать различные методы, предоставляемые `ApiClient` для доступа к Shikimori API.

```ts
import { ShikimoriApi } from "shikimoript";

const shikimori = new ShikimoriApi();

const anime = await shikimori.animes.byId({
    id: 20,
});

console.log(anime);

// {
//   id: 20,
//   name: 'Naruto',
//   russian: 'Наруто',
//   image: {
//     original: '/system/animes/original/20.jpg?1711965679',
//     preview: '/system/animes/preview/20.jpg?1711965679',
//     x96: '/system/animes/x96/20.jpg?1711965679',
//     x48: '/system/animes/x48/20.jpg?1711965679'
//   },
//   url: '/animes/z20-naruto',
//   kind: 'tv',
//   score: '8.01',
//   status: 'released',
//   episodes: 220,
//   episodes_aired: 0,
//   aired_on: '2002-10-03',
//   released_on: '2007-02-08',
//   rating: 'pg_13',
//   english: [ 'Naruto' ],
//   japanese: [ 'ナルト' ],
//   synonyms: [ 'NARUTO' ],
//   license_name_ru: 'Наруто',
//   duration: 23,
//   description: '«Это мой путь ниндзя!»\n' +
//     '\n' +
//     'В день рождения Наруто Узумаки на деревню под названием Коноха напал легендарный демон, [character=7407]Девятихвостый лис[/character]. Четвёртый Хокагэ [波風ミナト] ценой своей жизни спас деревню, запечатав демона в новорождённом Наруто, неосознанно обрекая его на жизнь в ненависти односельчан.\n' +
//     'Несмотря на недостаток таланта во многих областях ниндзюцу, неусидчивость и задиристость, у Наруто есть мечта — стать [[Хокагэ]], сильнейшим ниндзя в деревне. Желая признания, которого не получал, он упорно работает и тренируется вместе со своими напарниками, Саскэ Учихой [うちは サスケ] и Сакурой Харуно [春野 サクラ], а также со своим наставником Какаши Хатакэ. Ему и его напарникам придётся пройти через многое по пути к своим заветным мечтам: сражения, любовь, дружба, предательство, жажда силы...',
//   description_html: '<div class="b-text_with_paragraphs">«Это мой путь ниндзя!»<br class="br"><br class="br">В день рождения <a href="https://shikimori.one/characters/z17-naruto-uzumaki" title="Naruto Uzumaki" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/z17-naruto-uzumaki/tooltip" data-attrs="{&quot;id&quot;:17,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Naruto Uzumaki&quot;,&quot;russian&quot;:&quot;Наруто Узумаки&quot;}">Наруто Узумаки</a> на деревню под названием Коноха напал легендарный демон, <a href="https://shikimori.one/characters/7407-kurama" title="Kurama" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/7407-kurama/tooltip" data-attrs="{&quot;id&quot;:7407,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Kurama&quot;,&quot;russian&quot;:&quot;Курама&quot;}">Девятихвостый лис</a>. <a href="https://shikimori.one/characters/2535-minato-namikaze" title="Minato Namikaze" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/2535-minato-namikaze/tooltip" data-attrs="{&quot;id&quot;:2535,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Minato Namikaze&quot;,&quot;russian&quot;:&quot;Минато Намиказэ&quot;}">Четвёртый Хокагэ</a> ценой своей жизни спас деревню, запечатав демона в новорождённом <a href="https://shikimori.one/characters/z17-naruto-uzumaki" title="Naruto Uzumaki" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/z17-naruto-uzumaki/tooltip" data-attrs="{&quot;id&quot;:17,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Naruto Uzumaki&quot;,&quot;russian&quot;:&quot;Наруто Узумаки&quot;}">Наруто</a>, неосознанно обрекая его на жизнь в ненависти односельчан.<br>Несмотря на недостаток таланта во многих областях ниндзюцу, неусидчивость и задиристость, у <a href="https://shikimori.one/characters/z17-naruto-uzumaki" title="Naruto Uzumaki" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/z17-naruto-uzumaki/tooltip" data-attrs="{&quot;id&quot;:17,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Naruto Uzumaki&quot;,&quot;russian&quot;:&quot;Наруто Узумаки&quot;}">Наруто</a> есть мечта — стать Хокагэ, сильнейшим ниндзя в деревне. Желая признания, которого не получал, он упорно работает и тренируется вместе со своими напарниками, <a href="https://shikimori.one/characters/13-sasuke-uchiha" title="Sasuke Uchiha" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/13-sasuke-uchiha/tooltip" data-attrs="{&quot;id&quot;:13,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Sasuke Uchiha&quot;,&quot;russian&quot;:&quot;Саскэ Учиха&quot;}">Саскэ Учихой</a> и <a href="https://shikimori.one/characters/145-sakura-haruno" title="Sakura Haruno" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/145-sakura-haruno/tooltip" data-attrs="{&quot;id&quot;:145,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Sakura Haruno&quot;,&quot;russian&quot;:&quot;Сакура Харуно&quot;}">Сакурой Харуно</a>, а также со своим наставником <a href="https://shikimori.one/characters/85-kakashi-hatake" title="Kakashi Hatake" class="bubbled b-link" data-tooltip_url="https://shikimori.one/characters/85-kakashi-hatake/tooltip" data-attrs="{&quot;id&quot;:85,&quot;type&quot;:&quot;character&quot;,&quot;name&quot;:&quot;Kakashi Hatake&quot;,&quot;russian&quot;:&quot;Какаши Хатакэ&quot;}">Какаши Хатакэ</a>. Ему и его напарникам придётся пройти через многое по пути к своим заветным мечтам: сражения, любовь, дружба, предательство, жажда силы...</div>',
//   description_source: null,
//   franchise: 'naruto',
//   favoured: false,
//   anons: false,
//   ongoing: false,
//   thread_id: 4346,
//   topic_id: 4346,
//   myanimelist_id: 20,
//   rates_scores_stats: [
//     { name: 10, value: 36793 },
//     { name: 9, value: 17862 },
//     { name: 8, value: 24718 },
//     { name: 7, value: 16407 },
//     { name: 6, value: 6142 },
//     { name: 5, value: 2418 },
//     { name: 4, value: 767 },
//     { name: 3, value: 364 },
//     { name: 2, value: 229 },
//     { name: 1, value: 609 }
//   ],
//   rates_statuses_stats: [
//     { name: 'Запланировано', value: 11102 },
//     { name: 'Просмотрено', value: 189375 },
//     { name: 'Смотрю', value: 18206 },
//     { name: 'Брошено', value: 8419 },
//     { name: 'Отложено', value: 4232 }
//   ],
//   updated_at: '2025-09-05T07:35:50.727+03:00',
//   next_episode_at: null,
//   fansubbers: [
//     'Alex & Julia',
//     'RG Genshiken',
//     '2nd Life Fansubs',
//     'BTTF',
//     'Kolonel & ALF!',
//     'Anime Kazan Club'
//   ],
//   fandubbers: [
//     'SHIZA Project',
//     'AnimeGroup',
//     'Jetix',
//     '2x2',
//     'QTV',
//     'Suzaku',
//     'OpenDub',
//     'Аврора'
//   ],
//   licensors: [ '2x2' ],
//   genres: [
//     {
//       id: 1,
//       name: 'Action',
//       russian: 'Экшен',
//       kind: 'genre',
//       entry_type: 'Anime'
//     },
//     {
//       id: 2,
//       name: 'Adventure',
//       russian: 'Приключения',
//       kind: 'genre',
//       entry_type: 'Anime'
//     },
//     {
//       id: 10,
//       name: 'Fantasy',
//       russian: 'Фэнтези',
//       kind: 'genre',
//       entry_type: 'Anime'
//     },
//     {
//       id: 17,
//       name: 'Martial Arts',
//       russian: 'Боевые искусства',
//       kind: 'genre',
//       entry_type: 'Anime'
//     },
//     {
//       id: 27,
//       name: 'Shounen',
//       russian: 'Сёнен',
//       kind: 'genre',
//       entry_type: 'Anime'
//     }
//   ],
//   studios: [
//     {
//       id: 1,
//       name: 'Studio Pierrot',
//       filtered_name: 'Pierrot',
//       real: true,
//       image: '/system/studios/original/1.png?1378753179'
//     }
//   ],
//   videos: [
//     {
//       id: 54565,
//       url: 'https://youtu.be/OJGBr5pL93U',
//       image_url: 'http://img.youtube.com/vi/OJGBr5pL93U/hqdefault.jpg',
//       player_url: 'http://youtube.com/embed/OJGBr5pL93U',
//       name: 'Трейлер Jetix',
//       kind: 'pv',
//       hosting: 'youtube'
//     },
//     {
//       id: 56624,
//       url: 'https://youtu.be/savpNb36YzA',
//       image_url: 'http://img.youtube.com/vi/savpNb36YzA/hqdefault.jpg',
//       player_url: 'http://youtube.com/embed/savpNb36YzA',
//       name: 'Трейлер 2x2',
//       kind: 'pv',
//       hosting: 'youtube'
//     }
//   ],
//   screenshots: [
//     {
//       original: '/system/screenshots/original/bdf5492d8e02b06a85b5c53a1b37b75fbdc1d960.jpg?1701215427',
//       preview: '/system/screenshots/x332/bdf5492d8e02b06a85b5c53a1b37b75fbdc1d960.jpg?1701215427'
//     },
//     {
//       original: '/system/screenshots/original/98f3fa89e9a47b9671d94bcdfbe76725f7335551.jpg?1701215428',
//       preview: '/system/screenshots/x332/98f3fa89e9a47b9671d94bcdfbe76725f7335551.jpg?1701215428'
//     }
//   ],
//   user_rate: null
// }
```

## Авторизация

Более подробную информацию можно посмотреть в [Official Shikimori OAuth2 Guide](https://shikimori.one/oauth).

1. **Зарегистрируйте ваше [приложение Шикимори](https://shikimori.one/oauth/applications):** После регистрации вам будут выданы `client_id` и `client_secret` которые понадобятся для использования OAuth2.

2. **Перенаправьте пользователя на эндпоинт авторизации в Шикимори:** Этот эндпоинт предложит ему предоставить вашему приложению доступ к своим данным. После того, как пользователь предоставит доступ, Шикимори перенаправит его обратно в ваше приложение с _кодом авторизации_.

```
https://shikimori.me/oauth/authorize?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code&scope=
```

3. **Получите токен доступа:** Вашему приложению потребуется обменять _код авторизации_ на `AccessToken`. Шикимори вернет вам персональный токен доступа, который ваше приложение может использовать для доступа к ограниченным ресурсам/эндпоинтам.

```ts
import { AuthLayerApi } from "shikimoript";
const authLayer = new AuthLayerApi({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
});
const accessToken = await authLayer.getAccessToken("YOUR_AUTH_CODE");
```

4. **Используйте `AccessToken` для доступа к защищенным ресурсам:** Теперь ваше приложение может использовать `AccessToken` для доступа к защищенным ресурсам пользователя. Обязательно корректно обрабатывайте любые ошибки, а также токены с истекшим сроком действия.

```ts
import { ShikimoriApi } from "shikimoript";
const shikimori = new ShikimoriApi();
shikimori.accessToken = "YOUR_ACCESS_TOKEN";
const currentUser = await shikimori.users.whoami();
console.log(currentUser);
```

5.**Обновление токена доступа:** Токены доступа имеют ограниченный срок действия в **1 день**, поэтому вашему приложению потребуется периодически обновлять их, чтобы поддерживать доступ пользователя к ресурсам. Для этого используйте функцию `refreshAccessToken` с refresh-токеном в качестве параметра. Шикимори вернет новый токен доступа и токен обновления, которые ваше приложение может использовать для продолжения предоставления доступа к защищенным ресурсам.

```ts
import { AuthLayerApi } from "shikimoript";
const authLayer = new AuthLayerApi({
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
});
const newAccessToken = await authLayer.refreshAccessToken("YOUR_REFRESH_TOKEN");
```

## Соавторство

Вклад в библиотеку всегда приветствуется и поощряется. Для этого откройте Issue с описанием проблемы или Pull Request с необходимыми изменениями на [GitHub репозиторий](https://github.com/mirasayon/shikimoript#readme)

## Typescript

Все типы готовые и доступны из коробки

## Лицензия

[MIT](./license.md)

