import { ShikimoriApi } from "shikimoript";

// import { ApiClient } from "shikimoript";
const shikimori = new ShikimoriApi();
const anime = await shikimori.animes.byId({
    id: 20,
});

console.log(anime.name);

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

