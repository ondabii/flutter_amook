'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "11ac1c749d076f8836d0c07e30c3ec3c",
"assets/AssetManifest.bin.json": "e6a280ee1d44fec445c5e90715353706",
"assets/AssetManifest.json": "3942233a6a28fabb7b6252540ba9eac1",
"assets/assets/images/base/paste_original.png": "38314be4c09fae01e97903ff7be07d2b",
"assets/assets/images/base/paste_rice.png": "1c64a25e0de69f37642b50916736fd06",
"assets/assets/images/base/paste_vegi.png": "e911477d54d3349ae5bfbbc198ce76e2",
"assets/assets/images/color/150_black.png": "71e01142a32bf7e65c4685fcd3c850e4",
"assets/assets/images/color/150_brown.png": "562cde12bc166ed55c04f65b94b06507",
"assets/assets/images/color/150_default.png": "c132578941a8b4facdf61a1e99991dab",
"assets/assets/images/color/150_green.png": "59228d022ea570e54e38aa93637766fe",
"assets/assets/images/color/150_orange.png": "81ad3a80a5969e7b9bac036b985bf555",
"assets/assets/images/color/150_pink.png": "538a2a5c805a26b4a7dfc9633000730b",
"assets/assets/images/color/150_purple.png": "f3893583dd56e691f6586b315660be76",
"assets/assets/images/color/150_red.png": "988bacf94542715d3ab79fe7fc397191",
"assets/assets/images/color/150_yellow.png": "f6de09bc065ed7ec6e9989a8d5594d50",
"assets/assets/images/color/500px_black.png": "5c3957d2da657ab11afc4c4c7b8500dc",
"assets/assets/images/color/500px_brown.png": "89f70304a028a6a62b36b693f9d9b3fb",
"assets/assets/images/color/500px_default.png": "537f537e117ae5447381a68557820eea",
"assets/assets/images/color/500px_green.png": "b28edbc163ab4e7e01c0b092194c2aef",
"assets/assets/images/color/500px_orange.png": "098debcd0bf23ccdd3cefc4578f7beba",
"assets/assets/images/color/500px_pink.png": "b845cb5e962d35370afbdfe3fab54527",
"assets/assets/images/color/500px_purple.png": "1ae7b2ea56ca6681ada70e80c6bf3931",
"assets/assets/images/color/500px_red.png": "99b80ccdd8fbba031db352cdab694f94",
"assets/assets/images/color/500px_yellow.png": "afab17f3177c8562eb2a16d39325ada3",
"assets/assets/images/compo/spr_thumb_anbutter.png": "4906b3af254d58599f006cc3404ec897",
"assets/assets/images/compo/spr_thumb_arugula.png": "d5e27d8bdaed6c776713a5587585f37a",
"assets/assets/images/compo/spr_thumb_bacon.png": "48e9bd0417432b1e839968cb02f448e6",
"assets/assets/images/compo/spr_thumb_bulgogi.png": "89efe93c190924b490c41d1b604791ba",
"assets/assets/images/compo/spr_thumb_chedarcheese.png": "43453d9120e2388c135a2ff8fd6a1998",
"assets/assets/images/compo/spr_thumb_cheongyangpepper.png": "e201c2b1f2aedab29b809b6abd544e9e",
"assets/assets/images/compo/spr_thumb_crunchcookie.png": "09cfaaf00c1e9c258aadada471d658a2",
"assets/assets/images/compo/spr_thumb_hotteockseed.png": "65f8b475f43701ab36e860adfa2ed6e6",
"assets/assets/images/compo/spr_thumb_jaeyuk.png": "b6651d2a068a607f9dabb39bf4b9398b",
"assets/assets/images/compo/spr_thumb_kimchi.png": "5988eaebccb86697206324bc7c29ae6f",
"assets/assets/images/compo/spr_thumb_mozzarellacheese.png": "d0904ec1c0b4e47a6f0e17fd7178580a",
"assets/assets/images/compo/spr_thumb_mushroom.png": "fa88b79f870720cdb4dc3b737e89cab0",
"assets/assets/images/compo/spr_thumb_paprika.png": "e5c0e213f6b0328c0e8532c02e59de57",
"assets/assets/images/compo/spr_thumb_pineapple.png": "b05c193aa1df3a30b2f2d1693cf6a4ad",
"assets/assets/images/compo/spr_thumb_pistachio.png": "f3b88666af7a691fd565737064b20e40",
"assets/assets/images/compo/spr_thumb_pollackroe.png": "ce80cea3276edbc22ca8168dff871053",
"assets/assets/images/compo/spr_thumb_potato.png": "34c1be2f8042445c97847453a6caf97f",
"assets/assets/images/compo/spr_thumb_potatosalad.png": "45a6322360ee830bf5334170ee0efd6e",
"assets/assets/images/compo/spr_thumb_ricecake.png": "ac9b237d8ba5c58a92ed8e95b5dd3a2c",
"assets/assets/images/compo/spr_thumb_shrimp.png": "4ef188041e0fad1cc09ab833fe8d079b",
"assets/assets/images/compo/spr_thumb_strawberryjam.png": "f563775e27e9631286663d8fe3254180",
"assets/assets/images/compo/spr_thumb_sweetpotato.png": "60cd6b482009f64c7e86b2c3376c4441",
"assets/assets/images/compo/spr_thumb_sweetpotatomousse.png": "91111b5d76998e68c220f8ef99836a4f",
"assets/assets/images/compo/spr_thumb_tteockpokki.png": "7dd51fb7f5cbca517502bfa370ad5eef",
"assets/assets/images/cook/animate/spr_cook_bake_01.png": "cfc5e4fa6c20b6cd27e9db24bcfafaf4",
"assets/assets/images/cook/animate/spr_cook_bake_01_2.png": "ed8a727a90fecc6528697bb613502704",
"assets/assets/images/cook/animate/spr_cook_bake_02.png": "16ee7809163d8a760e7998e4d06e3551",
"assets/assets/images/cook/animate/spr_cook_bake_03.png": "34ce3e1950368b6260244c7faf05f72b",
"assets/assets/images/cook/animate/spr_cook_bgd.png": "1684c55bd00bbf7685689011f535fc89",
"assets/assets/images/cook/animate/spr_cook_fry_01.png": "10f3f3eb8effbbfdaeb6439086dc8cc8",
"assets/assets/images/cook/animate/spr_cook_fry_b1.png": "8a8c0509e974e02bab447ae08dccce41",
"assets/assets/images/cook/animate/spr_cook_fry_b2.png": "3dd582a10f37675216e59274744b2251",
"assets/assets/images/cook/animate/spr_cook_fry_b3.png": "f48bb9b97557734604a3b720fe64917f",
"assets/assets/images/cook/animate/spr_cook_fry_b4.png": "d0188a1361685f32b84d7154177b8995",
"assets/assets/images/cook/animate/spr_cook_fry_b5.png": "20c0b1f9af73f3dd5d7a6451db14d664",
"assets/assets/images/cook/animate/spr_cook_fry_b6.png": "310bf93713fd6c2f0ab214a6fc81e39d",
"assets/assets/images/cook/animate/spr_cook_steam_01.png": "0cb4f29445d934418ab417f0ce7693db",
"assets/assets/images/cook/animate/spr_cook_steam_02.png": "06f8d9ad7d0c4728b1bcb0688c95027a",
"assets/assets/images/cook/animate/spr_cook_steam_03.png": "d73dff3b00bcc8c7ababc1f61e66a5ba",
"assets/assets/images/cook/animate/spr_cook_steam_b1.png": "83559238c53284c331805ba00d112aa2",
"assets/assets/images/cook/animate/spr_cook_steam_b2.png": "5fc5afc0c136f754ee44a95811b40253",
"assets/assets/images/cook/spr_cook_bake.png": "23af13168f0b533e4c3664227be12903",
"assets/assets/images/cook/spr_cook_fry.png": "8c9882b3082ddba9e5d394a67887cac6",
"assets/assets/images/cook/spr_cook_steam.png": "7524a7c168e3d7d195ecf449a9594785",
"assets/assets/images/ingre/compo_in_01_1.png": "1571b3294d49e17493518ed8183fb41e",
"assets/assets/images/ingre/compo_in_01_2.png": "1b3cdd41a7ef923de5df4ed849bbe50c",
"assets/assets/images/ingre/compo_in_01_3.png": "3df2faa024242d24eae29645723ebbec",
"assets/assets/images/ingre/compo_in_02_1.png": "0206eeee528ab528da11cba56df570f3",
"assets/assets/images/ingre/compo_in_02_2.png": "0e1091ec52086fc4558abf66bdad9a92",
"assets/assets/images/ingre/compo_in_02_3.png": "8f192652695ab31aa96b6327c1f6a564",
"assets/assets/images/ingre/compo_in_03_1.png": "24bb6f9798e2a4e6262e392d11d96636",
"assets/assets/images/ingre/compo_in_03_2.png": "ef922b708a6ba7c77f4e9aa8ec99b306",
"assets/assets/images/ingre/compo_in_03_3.png": "2b6b199ab83bc7970dd28d551a4defdf",
"assets/assets/images/ingre/compo_in_04_1.png": "8800863d6b228f1ae8d53aeb8fb4b629",
"assets/assets/images/ingre/compo_in_04_2.png": "8317921767458ed5fa3f223e70a7c9b4",
"assets/assets/images/ingre/compo_in_04_3.png": "8031d4411ab336ee8937441e831e3caf",
"assets/assets/images/ingre/compo_in_05_1.png": "c07e181132b84b1d06a6df2de1d7b5d1",
"assets/assets/images/ingre/compo_in_05_2.png": "ec0565040efd0f1c35e428c6e52fb1b5",
"assets/assets/images/ingre/compo_in_05_3.png": "08880ac5f0b0846553e2b6118e0fcd7f",
"assets/assets/images/ingre/compo_in_06_1.png": "01355df28375d6a25b2e8e9ad950dfc2",
"assets/assets/images/ingre/compo_in_06_2.png": "ab1dea3444a2a451e4d049af979e9a0f",
"assets/assets/images/ingre/compo_in_06_3.png": "a24fa3b27952934d8d8a8310e3e915ac",
"assets/assets/images/ingre/compo_in_07_1.png": "660cf461018cfc473d2ab08b35f0d123",
"assets/assets/images/ingre/compo_in_07_2.png": "da5d3a9712cabce575bcefb202f43d84",
"assets/assets/images/ingre/compo_in_07_3.png": "c3eae45253f27b1d2ec3bd3ae4551ae3",
"assets/assets/images/ingre/compo_in_08_1.png": "7cc57051be420b6f7fafd1a9db0e3215",
"assets/assets/images/ingre/compo_in_08_2.png": "5c9166fe47124cbdac87d5de4562d969",
"assets/assets/images/ingre/compo_in_08_3.png": "9a731cbc5cac2efd6f14f783a7540617",
"assets/assets/images/ingre/compo_in_09_1.png": "adfca00884edb3a5c9bb7706962922de",
"assets/assets/images/ingre/compo_in_09_2.png": "793b1e3c768daa6662cf2b8c39d245b5",
"assets/assets/images/ingre/compo_in_09_3.png": "fd83baf7fbc05f8874a2c57a31088ff0",
"assets/assets/images/ingre/compo_in_10_1.png": "3d201fe0d2fcd5ba4ca21189f07c8b6a",
"assets/assets/images/ingre/compo_in_10_2.png": "9f84f8f27dab5b1f585ac0aaab838b78",
"assets/assets/images/ingre/compo_in_10_3.png": "a92d39b58aaa06ab26f1bee4edc770fb",
"assets/assets/images/ingre/compo_in_11_1.png": "e4074bc9781ec05dc818d6c8282e9440",
"assets/assets/images/ingre/compo_in_11_2.png": "e473832b3c286b44a6a0921a8a29fb29",
"assets/assets/images/ingre/compo_in_11_3.png": "df996ded8d1adfda52d13bc8651bb0d0",
"assets/assets/images/ingre/compo_in_12_1.png": "5f2c4d0849f4e6633396e653f180ffe6",
"assets/assets/images/ingre/compo_in_12_2.png": "1367ea273cc2323115fe421bebf7d964",
"assets/assets/images/ingre/compo_in_12_3.png": "08003908da0e2f4890ba80dcdeaa180f",
"assets/assets/images/sauce/sauce_001.png": "f0877e134f9a094a30c4f6fa15c6a9a4",
"assets/assets/images/sauce/sauce_002.png": "d2735270b4310ae91b5d28c19961a5e6",
"assets/assets/images/sauce/sauce_003.png": "ad5cf693eb307bf2255a0e1e215d3dd9",
"assets/assets/images/sauce/sauce_004.png": "8864d831f975b7562944a107ca24b215",
"assets/assets/images/sauce/sauce_005.png": "9ea19d17de24eecdc4f625db81148922",
"assets/assets/images/sauce/sauce_006.png": "402c2cc34368f695423601700f863d9c",
"assets/assets/images/sauce/sauce_007.png": "1618123f3c34e30167ee0c4a82bbf8ab",
"assets/assets/images/sauce/sauce_008.png": "5b596934951245a967b9d84fe5ddcc39",
"assets/assets/images/sauce/sauce_009.png": "f96efc287246524ed9ab41cf833be8e0",
"assets/assets/images/sauce/sauce_010.png": "220a8eee2672b6a53862012c02e7ba04",
"assets/assets/images/sauce/sauce_011.png": "a4dcbe256ab1eff03516630112376fac",
"assets/assets/images/sauce/sauce_012.png": "f51974d160b35aeee4f091b7da855ab8",
"assets/assets/images/sauce/sauce_013.png": "1062e0a319efcb00f6edc9b9919d5f40",
"assets/assets/images/sauce/sauce_014.png": "86bf9e75630595afe0d51bd6f1412460",
"assets/assets/images/sauce/sauce_015.png": "c0f6222301c92b0dd4a188255a4bcbf6",
"assets/assets/images/sauce/sauce_016.png": "548b38b7c512aa251b48d56bd33b29b2",
"assets/assets/images/sauce/sauce_017.png": "642bd4db8dc0356d334031d9d32dcf53",
"assets/assets/images/sauce/sauce_018.png": "789b55e8ddcd1e0fc74ca2a64faebf7a",
"assets/assets/images/sauce/sauce_019.png": "9db9a1fb7b06cd72c4d74d89d4c306ab",
"assets/assets/images/sauce/sauce_020.png": "da46e6fc1ecb7224a76e09b58e192fc8",
"assets/assets/images/sauce/sauce_021.png": "90b922d7e1a42b41f5dd183063fd6ac3",
"assets/assets/images/sauce/sauce_022.png": "c5bad1658e22af5368d82d54bf70625f",
"assets/assets/images/sauce/sauce_023.png": "bd11b5dea132a7e6eb8752c6ecd4daee",
"assets/assets/images/sauce/sauce_024.png": "2b42762a94adc137f9c23b11f82b8e1e",
"assets/assets/images/sauce/sauce_025.png": "f95feb0f85b465273437f86d549a1189",
"assets/assets/images/sauce/sauce_026.png": "7c399fd658ed7fe389120361eb8c6526",
"assets/assets/images/sauce/sauce_027.png": "e4cc04041d219fca5488cb023a01726c",
"assets/assets/images/sauce/sauce_028.png": "09cebe4e941d5e144cdc721cd442d359",
"assets/assets/images/sauce/sauce_029.png": "a8b28eba69c7f978a94a236edfce46fe",
"assets/assets/images/sauce/sauce_030.png": "5da695b3254f39cc07f30e9e2fe6746e",
"assets/assets/images/sauce/sauce_031.png": "c4be313e699a7215df2ce464749ea2d6",
"assets/assets/images/sauce/sauce_033.png": "704a1636dc1cddc42aeb74b05e09a32f",
"assets/assets/images/sauce/sauce_034.png": "66c0203e38342e643079531a7db88e27",
"assets/assets/images/sauce/sauce_035.png": "cf70bddab38c20fac8449d10fc14454a",
"assets/assets/images/sauce/sauce_036.png": "ead54c46ddf6ac4b7767af3951945997",
"assets/assets/images/sauce/sauce_037.png": "9fd221fc36749dc152445bbdd5d657ae",
"assets/assets/images/sauce/sauce_038.png": "eda8b364089676c74637e09c308f7ef1",
"assets/assets/images/sauce/sauce_039.png": "cd5caa2afff497fc130f72960bb18be8",
"assets/assets/images/sauce/sauce_040.png": "ca1b5c55d36aff0b414d5e1d36ec12a7",
"assets/assets/images/sauce/sauce_041.png": "a41c0367715b0242d14e7e672e6401a2",
"assets/assets/images/sauce/sauce_042.png": "8c4e91afc7b75c2e1a49957d67bc5ad0",
"assets/assets/images/sauce/sauce_043.png": "73fe8ade183077e05d237fc290f2d049",
"assets/assets/images/sauce/sauce_044.png": "306641d02169f90bcf6aba9b690c024e",
"assets/assets/images/sauce/sauce_045.png": "b85f824e6d4b2be872e3e78dec4aa9d2",
"assets/assets/images/shape/point_basic.png": "27f7c208301b5e0dd5d7d3c5c2f70acc",
"assets/assets/images/shape/point_fishball.png": "24a71ec403fb378a053f00950f0a4698",
"assets/assets/images/shape/point_goroke.png": "db935a17e9316dcb341106c0baf3510e",
"assets/assets/images/shape/point_hotbar.png": "cdca5c6928434f5f5a61d0477b99d728",
"assets/assets/images/shape/point_shaped.png": "ea80e2c603d98aa5f533232babcfeb4d",
"assets/assets/images/shape/spr_amook_basic.png": "69eb597434b607206f7965be82387d0d",
"assets/assets/images/shape/spr_amook_fishball.png": "596eaeacdf19c55a86f699f6cfc1eb53",
"assets/assets/images/shape/spr_amook_goroke.png": "65c3d697521a5a57da1ceb8e52ea7aec",
"assets/assets/images/shape/spr_amook_hotbar.png": "310fd1357189964555ab49c27ee8d2a3",
"assets/assets/images/shape/spr_amook_shaped.png": "5f39b07e35b3ff009d86a1f277dbd97f",
"assets/assets/images/shape/thumb_amook_basic.png": "f73df0fcc3890fe2aee93b5a3f6a8a5e",
"assets/assets/images/shape/thumb_amook_fishball.png": "f75e6b11efe2cde853c3c0e89ea47c94",
"assets/assets/images/shape/thumb_amook_goroke.png": "76fe741e7ddfd081ea30cc80041fdfed",
"assets/assets/images/shape/thumb_amook_hotbar.png": "a100caaf62b95f2d602b06a69d778d37",
"assets/assets/images/shape/thumb_amook_shaped.png": "68b48a22b17fea8d06d09f161eae4850",
"assets/assets/images/top/compo_out_01_1.png": "188891599e09c055b985bf1ef879bddc",
"assets/assets/images/top/compo_out_01_2.png": "6ef3e79b47998ed3b6ce0ddcab52fdff",
"assets/assets/images/top/compo_out_01_3.png": "20a775f466f18332d718c911ef9f7e86",
"assets/assets/images/top/compo_out_02_1.png": "fe9c61cd8415f91df1fe08cda0c6a8d1",
"assets/assets/images/top/compo_out_02_2.png": "0471835a4c16bab3d63d27c61622b24a",
"assets/assets/images/top/compo_out_02_3.png": "41230c6e9aa001747a1530d34ed051cb",
"assets/assets/images/top/compo_out_03_1.png": "405127617ce6ae999e038b636030cc25",
"assets/assets/images/top/compo_out_03_2.png": "bb457b0f3f2e33ea70530ac80bdc6b02",
"assets/assets/images/top/compo_out_03_3.png": "5ce68372deb3afcac2154e292b631686",
"assets/assets/images/top/compo_out_04_1.png": "ef8ddaf0150c1dc66b88cf8984e21a2d",
"assets/assets/images/top/compo_out_04_2.png": "d651d3fcc3f28d41075cf3f26c455c1e",
"assets/assets/images/top/compo_out_04_3.png": "48d8600c0c8e0ce1141c18a4ee09a665",
"assets/assets/images/top/compo_out_05_1.png": "93a7514c226ac44afee63a0879165fbf",
"assets/assets/images/top/compo_out_05_2.png": "6e0a98ef61ca7b758800c62366dd4d71",
"assets/assets/images/top/compo_out_05_3.png": "53a12407129fc997c4cfe98771f66722",
"assets/assets/images/top/compo_out_06_1.png": "54cb09fff12172225e562398adbd77be",
"assets/assets/images/top/compo_out_06_2.png": "56679b03386aef62620743bfafc0df3b",
"assets/assets/images/top/compo_out_06_3.png": "ef41e01a718b1407909f888b087b3022",
"assets/assets/images/top/compo_out_07_1.png": "92c2743a82ac3daf041169003ccdd83a",
"assets/assets/images/top/compo_out_07_2.png": "867befa1a71b63179654c1b3d04de6d5",
"assets/assets/images/top/compo_out_07_3.png": "b40bb73a16cb27dc0189db761d7f3bdd",
"assets/assets/images/top/compo_out_08_1.png": "f905a284483c9c7b1c8f59942f1f3649",
"assets/assets/images/top/compo_out_08_2.png": "9df0b167658a33fe8ac3aeb0f1bae587",
"assets/assets/images/top/compo_out_08_3.png": "1cd9d267e26b4d4cbd50d916cbbafcaa",
"assets/assets/images/top/compo_out_09_1.png": "b7c8152d3da5d6641d7391c6f592d98e",
"assets/assets/images/top/compo_out_09_2.png": "35d5c5279b6a9ca62837d405d7748092",
"assets/assets/images/top/compo_out_09_3.png": "f82dbd2a3a7a3c987793ecf5a1c202f5",
"assets/assets/images/top/compo_out_10_1.png": "c2a61f9744e194f59868408734bfb347",
"assets/assets/images/top/compo_out_10_2.png": "dbfc6226360aed49d21012e820e8df6a",
"assets/assets/images/top/compo_out_10_3.png": "9990a6a9ede4d6a45ab597bf7ea76158",
"assets/assets/images/top/compo_out_11_1.png": "277e3f9f4109aacd3ccee76c4abe4937",
"assets/assets/images/top/compo_out_11_2.png": "13070c0cc867b74e968c813cd3d37e65",
"assets/assets/images/top/compo_out_11_3.png": "2df5e876f6ecefdcc5556fb38a33ceec",
"assets/assets/images/top/compo_out_12_1.png": "e8e9158a23cda53e8b129570f0564374",
"assets/assets/images/top/compo_out_12_2.png": "5a3d9f471917343da6dfb86a92505e52",
"assets/assets/images/top/compo_out_12_3.png": "248eee989a965987b50f539d6d869067",
"assets/assets/images/ui/grad_circle.png": "a3ec37fbd47d04c1a84ad002feef2c61",
"assets/assets/images/ui/spr_main.png": "7ae08d70c43d040f0e17e87746b20577",
"assets/assets/images/ui/spr_main_bgd.png": "5d978c6a67c1d823ff46dd867daab89e",
"assets/assets/images/ui/spr_text_contestschedule.png": "db923fc58faa801bf244435609a4f58b",
"assets/assets/images/ui/spr_text_howto.png": "a107738e3a9845faf9a1b532251b2988",
"assets/assets/images/ui/spr_text_judge.png": "daa49e8b3ec084d725b7962297959884",
"assets/assets/images/ui/spr_text_judgelist.png": "e07cffc690c70fd0d60b0a8a5f4d726e",
"assets/assets/images/ui/spr_text_prize.png": "bcbb3d58c724e31a9c7001c26ea55198",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "2792a10b7bf991f6cef07cb0993ff121",
"assets/NOTICES": "2da71b89a720457b67ef9e355a0a6cac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_amook/.git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
"flutter_amook/.git/config": "7a610f0f5d1926320954288a657788ba",
"flutter_amook/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"flutter_amook/.git/FETCH_HEAD": "3a9fb8bbadda816c68ae3b962de92efa",
"flutter_amook/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"flutter_amook/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"flutter_amook/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"flutter_amook/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"flutter_amook/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"flutter_amook/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"flutter_amook/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"flutter_amook/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"flutter_amook/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"flutter_amook/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"flutter_amook/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"flutter_amook/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"flutter_amook/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"flutter_amook/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"flutter_amook/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"flutter_amook/.git/index": "81623b284d544f5084a431d62a063801",
"flutter_amook/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"flutter_amook/.git/logs/HEAD": "39563df16ede8edbae221d6920fab2b2",
"flutter_amook/.git/logs/refs/heads/main": "39563df16ede8edbae221d6920fab2b2",
"flutter_amook/.git/logs/refs/remotes/origin/HEAD": "ea0c97eb9e837a37b5f919b5095d17ca",
"flutter_amook/.git/logs/refs/remotes/origin/main": "b3721eb4b49ccd798d1015ede25a4ed2",
"flutter_amook/.git/objects/02/3082c39677c94b1325571adf0654483e542d40": "0350ba3a38b1f5ff023f95e8f5734e2e",
"flutter_amook/.git/objects/05/b3a2b37d64560a88f2dd4dd763f6fadd17292c": "f498137d89726bfe915cf598f1201233",
"flutter_amook/.git/objects/0d/13fad4a09d199c65d9d6a0a7aa7d5270427d99": "1d59dfec92371cfb9b23102130f4815a",
"flutter_amook/.git/objects/0e/262692fe7430d15314f4a780cb3c1314fd0403": "2e48ee6c1fffeb3612af8ca65306a31e",
"flutter_amook/.git/objects/0f/2c05f369b76912f64842bddfeb1494531e8359": "d35bdd2f86e2ac4f1d3ea874c977f620",
"flutter_amook/.git/objects/10/b022cae9a7c9d15cc932a6835399fdeedf020f": "53340c90c0f17797580fb92dca3e5d7e",
"flutter_amook/.git/objects/17/018ab73552cb7f069144082d60d700d499e05d": "6d40de14b4fa5b2f7f400b4b4fafcb8c",
"flutter_amook/.git/objects/23/9e66b6b676dc7c7897e2e7547d0c8bfb7cc15a": "ef54182201b1f12358fd4301f02f5b98",
"flutter_amook/.git/objects/26/08371e99cc0f726a6fcd87398b707d439a21ac": "e73feafe58f9bd44b6e3483b8d5cf1e1",
"flutter_amook/.git/objects/26/a51626b297ba7773d932c2e0c1ddbb11d0674d": "02e582d09072a70c8b8cced04ad8da34",
"flutter_amook/.git/objects/2c/c3bcc68f7aa678faeefcc93daecb54d16ce3ba": "555dd58bc40cf9782a7d5332199c6f70",
"flutter_amook/.git/objects/34/0cffe4bf5fdabbc256b60a3591d9b2ced2c9c5": "3f2f7fc82fcc87817347359db6fe5f61",
"flutter_amook/.git/objects/3b/2aa069a5996efc0b8647deb7ff7e1c0fe06939": "27b33d013fdf6c07b7d943bd9be8540d",
"flutter_amook/.git/objects/3e/0c61604d30fc0936d4807646ef168763fc5a8d": "5b29d78d1e9ae90df4b4f21dc84ccb4d",
"flutter_amook/.git/objects/3e/1a61cfda92e92b920656a9d9c61967228e774f": "d78d8521857527147f0934841e6fab5b",
"flutter_amook/.git/objects/44/254c64fdeca7d12bc6320f8c3f2c2345946f73": "75de0a152cc3f1a6b44050f0fd2eed17",
"flutter_amook/.git/objects/45/e3aef76fd72af074076731952a908d27f25318": "395350287593e57069d12ffb1e96d7b0",
"flutter_amook/.git/objects/47/42da518f65ed846c1c5c5fed1a371782776e72": "6fe167b301e3e384ab4563e6dd333535",
"flutter_amook/.git/objects/48/9e77c587a9a7478ac492b1bb7abdaba39ac176": "75160819e6f490b51d8f83b9546c3393",
"flutter_amook/.git/objects/56/114f83029889ba7fbc270ea738b9e03f780d64": "87d74156d2e9ccd32540244563e3db2b",
"flutter_amook/.git/objects/5a/b805f11539026ae4bfd942c51640a5195b5adb": "fd0e39eab2807ce12b20118f05cde8f9",
"flutter_amook/.git/objects/60/2c7965ecc7a2e2ce8bdc4b942832474314e831": "58f1ba0569cf0bd341e02d7f6e772bc4",
"flutter_amook/.git/objects/64/dd2bfde35605f4d32e119921f2ae3d426c7a53": "3cef18617f4a9b95be8bb7c0c402cb3f",
"flutter_amook/.git/objects/6c/82942bd2db05d4fff30393cd41f153947cf828": "4034fee84b3a48f08d3b0fefd5a3732e",
"flutter_amook/.git/objects/6e/2937a7684305f4d5384c93a6d66719ccbad988": "4baff30d161e3d4ab7ac446e0bac1e1e",
"flutter_amook/.git/objects/71/00c54660632360f4b554333a8d6bbbd47b1e12": "15f6ee76b747a1b1faea69ef47d046b0",
"flutter_amook/.git/objects/7d/8d970a181bb9299a7cd5b535dc6e7f8fae692c": "95b3ca78b4d18acc449925deb57b8689",
"flutter_amook/.git/objects/7d/c16bb58c4a073cf7f474b95b4f0ec35ffbfb76": "d91f6d7d3b6bbc093a34d53798de8219",
"flutter_amook/.git/objects/83/af6c56c588b978a311f1a315f36abb69763d57": "b8e23e25e7a8e7bfaa372ae9f46286b6",
"flutter_amook/.git/objects/89/d341b8a2b4d55fdda235d07ab11a0f4145c30a": "b5d9231aee7fd762c408090aaa00ed70",
"flutter_amook/.git/objects/8c/ec9d52dd8030abe7e4212aebe7cebef1128f7e": "23719ef7cd7b7cd6de833a7d36983475",
"flutter_amook/.git/objects/93/a8f5660f2bd7eb339aa73264f082489a83cbdb": "4cd662832b09a6f3c6f050d04772735b",
"flutter_amook/.git/objects/9e/2d1866a18f3d926ace47f5f2433a7e194bd81f": "790cc357311b8b83db5204dd9636bd27",
"flutter_amook/.git/objects/a1/4b21439074607f2b495a60009862f55b45c5f4": "01d2c55a83ee8c031e33f59f613a6ff7",
"flutter_amook/.git/objects/a2/9136850a4f91b65f87e941804cb3639070c3ab": "aec63400a54e5644f6432f6fe266b872",
"flutter_amook/.git/objects/a3/dd3d8316ccab14213c71cd76de4f2b027b856d": "2e46162ba425a30efd05c43048529349",
"flutter_amook/.git/objects/a7/e7b6d29999a04996f3b5e361b95c17a855d15f": "432e70aa80abefa39616a87b7d7b85df",
"flutter_amook/.git/objects/ad/f29c4d3cfaa18b0c5c5587386266dd68b75606": "630e4199496e8a93bed2dd9f7da3a070",
"flutter_amook/.git/objects/af/5f16053d8018781c079768308689267857cd6e": "dfd2a42ee54fa9601092d255fcb9ba6f",
"flutter_amook/.git/objects/b3/9bf18767f3a489be64923ca2dc4be693de1f29": "fd29295a16d216fab231694873746f3f",
"flutter_amook/.git/objects/b6/3a7b1bd1fdfe290b439e5ec41c536df5001fa3": "c2fc72f6b69d3c6b8db55068119d9254",
"flutter_amook/.git/objects/b7/6f7bb2ef7a8d0c3b879fe7d63416aa298a21d8": "dace6cd29f21bd2d34d201a3fc1aab20",
"flutter_amook/.git/objects/bb/ce6f9d04a590178eb10c0e494168f021eaccaf": "223c0e81b12aacbc9de46afb37a390de",
"flutter_amook/.git/objects/be/c27713f163ddd8a6764ee2a0749fcc5e72bf64": "6107605883302e3b7389aec980e7a2b5",
"flutter_amook/.git/objects/c4/9c61f155e08f1db133199cfefce9f6bf5b0df5": "a2dd58b1fc7f89ca3d668b8244f12c09",
"flutter_amook/.git/objects/c6/4a6a3d117e8b0a38795eb6cd748c25ac3034d3": "25ebfbeefc896bfccb3da95b220d2306",
"flutter_amook/.git/objects/d2/6970fa45871f707f1c8f16a727eb2944ad450d": "42acd96a69968d3040b2f74ee8fe8850",
"flutter_amook/.git/objects/d3/2a3622a0734f55046643282f96da1240d0114d": "3d1fbc5c41e8d955ee1bc11482dbea78",
"flutter_amook/.git/objects/d8/44a593732cbd6d7bc4715a04768ee3aed01b85": "1b1bdee5db768eb7b25c5bdebd22237a",
"flutter_amook/.git/objects/dd/a550b8ff9449e4eda855019922241a51763225": "ad13f5177f856d78a5ec4af8fdfff58c",
"flutter_amook/.git/objects/df/0eb58c17302619a8580f483fd4871bf8d488f8": "ef5bf872a54e702c35f39e106bab94dc",
"flutter_amook/.git/objects/df/607dad7ffa0437e03035303e5e51505c2f53d9": "297bf11752a0104dea8241d490b8e4a9",
"flutter_amook/.git/objects/e9/fda010820ee5424c4617e4fad84c08c23e2db8": "80069e4c1a3040ad9d0f2f359f435dfe",
"flutter_amook/.git/objects/f0/87ba15386978571439515c264c51c76db7e2f8": "488acc9a7a0f01c046765bc97176d4d3",
"flutter_amook/.git/objects/f2/be55285bdcaa5855023fe31cefb6fe98ab2271": "0d24d12cd49048795459343122b7edf3",
"flutter_amook/.git/objects/f3/69dd676ef3b0d6d431aa16caa2a6219f7c9dda": "5545ac2a85bb22905738aac65a3fb8b6",
"flutter_amook/.git/objects/f8/85394065e9946d91bd027b58269ce4fb94f46e": "c1de3026784058e2476ef6e94b933478",
"flutter_amook/.git/objects/fb/5c7d65adb7184eaea30eed6bd287a785f6769f": "216b6c88457c15a9871efa5c036d7f22",
"flutter_amook/.git/objects/pack/pack-dc5352464e519e72166085b0ff51bc813edd99b2.idx": "aa8f171f85e58917f1e721d9f7b29992",
"flutter_amook/.git/objects/pack/pack-dc5352464e519e72166085b0ff51bc813edd99b2.pack": "cad97e6bd85e887b4a723f51ae348484",
"flutter_amook/.git/objects/pack/pack-dc5352464e519e72166085b0ff51bc813edd99b2.rev": "cfaca8127b744126f6c71a4c992e6f7d",
"flutter_amook/.git/packed-refs": "dac2b143cebd2ffa7f8900fe34d7e8a0",
"flutter_amook/.git/refs/heads/main": "5de7941d82870213c1dbb0297b3080bb",
"flutter_amook/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"flutter_amook/.git/refs/remotes/origin/main": "5de7941d82870213c1dbb0297b3080bb",
"flutter_amook/assets/AssetManifest.bin": "b4b457d6993b5bc84dd8872775d0cb54",
"flutter_amook/assets/AssetManifest.bin.json": "f06e1caf20ee7279fc516371db963541",
"flutter_amook/assets/AssetManifest.json": "c0cd50568c3c2071c8ea534ef955fb3f",
"flutter_amook/assets/assets/images/base/paste_original.png": "38314be4c09fae01e97903ff7be07d2b",
"flutter_amook/assets/assets/images/base/paste_rice.png": "1c64a25e0de69f37642b50916736fd06",
"flutter_amook/assets/assets/images/base/paste_vegi.png": "e911477d54d3349ae5bfbbc198ce76e2",
"flutter_amook/assets/assets/images/color/150_black.png": "71e01142a32bf7e65c4685fcd3c850e4",
"flutter_amook/assets/assets/images/color/150_brown.png": "562cde12bc166ed55c04f65b94b06507",
"flutter_amook/assets/assets/images/color/150_default.png": "c132578941a8b4facdf61a1e99991dab",
"flutter_amook/assets/assets/images/color/150_green.png": "59228d022ea570e54e38aa93637766fe",
"flutter_amook/assets/assets/images/color/150_orange.png": "81ad3a80a5969e7b9bac036b985bf555",
"flutter_amook/assets/assets/images/color/150_pink.png": "538a2a5c805a26b4a7dfc9633000730b",
"flutter_amook/assets/assets/images/color/150_purple.png": "f3893583dd56e691f6586b315660be76",
"flutter_amook/assets/assets/images/color/150_red.png": "988bacf94542715d3ab79fe7fc397191",
"flutter_amook/assets/assets/images/color/150_yellow.png": "f6de09bc065ed7ec6e9989a8d5594d50",
"flutter_amook/assets/assets/images/color/500px_black.png": "5c3957d2da657ab11afc4c4c7b8500dc",
"flutter_amook/assets/assets/images/color/500px_brown.png": "89f70304a028a6a62b36b693f9d9b3fb",
"flutter_amook/assets/assets/images/color/500px_default.png": "537f537e117ae5447381a68557820eea",
"flutter_amook/assets/assets/images/color/500px_green.png": "b28edbc163ab4e7e01c0b092194c2aef",
"flutter_amook/assets/assets/images/color/500px_orange.png": "098debcd0bf23ccdd3cefc4578f7beba",
"flutter_amook/assets/assets/images/color/500px_pink.png": "b845cb5e962d35370afbdfe3fab54527",
"flutter_amook/assets/assets/images/color/500px_purple.png": "1ae7b2ea56ca6681ada70e80c6bf3931",
"flutter_amook/assets/assets/images/color/500px_red.png": "99b80ccdd8fbba031db352cdab694f94",
"flutter_amook/assets/assets/images/color/500px_yellow.png": "afab17f3177c8562eb2a16d39325ada3",
"flutter_amook/assets/assets/images/compo/spr_thumb_anbutter.png": "4906b3af254d58599f006cc3404ec897",
"flutter_amook/assets/assets/images/compo/spr_thumb_arugula.png": "d5e27d8bdaed6c776713a5587585f37a",
"flutter_amook/assets/assets/images/compo/spr_thumb_bacon.png": "48e9bd0417432b1e839968cb02f448e6",
"flutter_amook/assets/assets/images/compo/spr_thumb_bulgogi.png": "89efe93c190924b490c41d1b604791ba",
"flutter_amook/assets/assets/images/compo/spr_thumb_chedarcheese.png": "43453d9120e2388c135a2ff8fd6a1998",
"flutter_amook/assets/assets/images/compo/spr_thumb_cheongyangpepper.png": "e201c2b1f2aedab29b809b6abd544e9e",
"flutter_amook/assets/assets/images/compo/spr_thumb_crunchcookie.png": "09cfaaf00c1e9c258aadada471d658a2",
"flutter_amook/assets/assets/images/compo/spr_thumb_hotteockseed.png": "65f8b475f43701ab36e860adfa2ed6e6",
"flutter_amook/assets/assets/images/compo/spr_thumb_jaeyuk.png": "b6651d2a068a607f9dabb39bf4b9398b",
"flutter_amook/assets/assets/images/compo/spr_thumb_kimchi.png": "5988eaebccb86697206324bc7c29ae6f",
"flutter_amook/assets/assets/images/compo/spr_thumb_mozzarellacheese.png": "d0904ec1c0b4e47a6f0e17fd7178580a",
"flutter_amook/assets/assets/images/compo/spr_thumb_mushroom.png": "fa88b79f870720cdb4dc3b737e89cab0",
"flutter_amook/assets/assets/images/compo/spr_thumb_paprika.png": "e5c0e213f6b0328c0e8532c02e59de57",
"flutter_amook/assets/assets/images/compo/spr_thumb_pineapple.png": "b05c193aa1df3a30b2f2d1693cf6a4ad",
"flutter_amook/assets/assets/images/compo/spr_thumb_pistachio.png": "f3b88666af7a691fd565737064b20e40",
"flutter_amook/assets/assets/images/compo/spr_thumb_pollackroe.png": "ce80cea3276edbc22ca8168dff871053",
"flutter_amook/assets/assets/images/compo/spr_thumb_potato.png": "34c1be2f8042445c97847453a6caf97f",
"flutter_amook/assets/assets/images/compo/spr_thumb_potatosalad.png": "45a6322360ee830bf5334170ee0efd6e",
"flutter_amook/assets/assets/images/compo/spr_thumb_ricecake.png": "ac9b237d8ba5c58a92ed8e95b5dd3a2c",
"flutter_amook/assets/assets/images/compo/spr_thumb_shrimp.png": "4ef188041e0fad1cc09ab833fe8d079b",
"flutter_amook/assets/assets/images/compo/spr_thumb_strawberryjam.png": "f563775e27e9631286663d8fe3254180",
"flutter_amook/assets/assets/images/compo/spr_thumb_sweetpotato.png": "60cd6b482009f64c7e86b2c3376c4441",
"flutter_amook/assets/assets/images/compo/spr_thumb_sweetpotatomousse.png": "91111b5d76998e68c220f8ef99836a4f",
"flutter_amook/assets/assets/images/compo/spr_thumb_tteockpokki.png": "7dd51fb7f5cbca517502bfa370ad5eef",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_bake_01.png": "cfc5e4fa6c20b6cd27e9db24bcfafaf4",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_bake_01_2.png": "ed8a727a90fecc6528697bb613502704",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_bake_02.png": "16ee7809163d8a760e7998e4d06e3551",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_bake_03.png": "34ce3e1950368b6260244c7faf05f72b",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_bgd.png": "1684c55bd00bbf7685689011f535fc89",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_fry_01.png": "10f3f3eb8effbbfdaeb6439086dc8cc8",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_fry_b1.png": "8a8c0509e974e02bab447ae08dccce41",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_fry_b2.png": "3dd582a10f37675216e59274744b2251",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_fry_b3.png": "f48bb9b97557734604a3b720fe64917f",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_fry_b4.png": "d0188a1361685f32b84d7154177b8995",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_fry_b5.png": "20c0b1f9af73f3dd5d7a6451db14d664",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_fry_b6.png": "310bf93713fd6c2f0ab214a6fc81e39d",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_steam_01.png": "0cb4f29445d934418ab417f0ce7693db",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_steam_02.png": "06f8d9ad7d0c4728b1bcb0688c95027a",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_steam_03.png": "d73dff3b00bcc8c7ababc1f61e66a5ba",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_steam_b1.png": "83559238c53284c331805ba00d112aa2",
"flutter_amook/assets/assets/images/cook/animate/spr_cook_steam_b2.png": "5fc5afc0c136f754ee44a95811b40253",
"flutter_amook/assets/assets/images/cook/spr_cook_bake.png": "23af13168f0b533e4c3664227be12903",
"flutter_amook/assets/assets/images/cook/spr_cook_fry.png": "8c9882b3082ddba9e5d394a67887cac6",
"flutter_amook/assets/assets/images/cook/spr_cook_steam.png": "7524a7c168e3d7d195ecf449a9594785",
"flutter_amook/assets/assets/images/ingre/compo_in_01_1.png": "1571b3294d49e17493518ed8183fb41e",
"flutter_amook/assets/assets/images/ingre/compo_in_01_2.png": "1b3cdd41a7ef923de5df4ed849bbe50c",
"flutter_amook/assets/assets/images/ingre/compo_in_01_3.png": "3df2faa024242d24eae29645723ebbec",
"flutter_amook/assets/assets/images/ingre/compo_in_02_1.png": "0206eeee528ab528da11cba56df570f3",
"flutter_amook/assets/assets/images/ingre/compo_in_02_2.png": "0e1091ec52086fc4558abf66bdad9a92",
"flutter_amook/assets/assets/images/ingre/compo_in_02_3.png": "8f192652695ab31aa96b6327c1f6a564",
"flutter_amook/assets/assets/images/ingre/compo_in_03_1.png": "24bb6f9798e2a4e6262e392d11d96636",
"flutter_amook/assets/assets/images/ingre/compo_in_03_2.png": "ef922b708a6ba7c77f4e9aa8ec99b306",
"flutter_amook/assets/assets/images/ingre/compo_in_03_3.png": "2b6b199ab83bc7970dd28d551a4defdf",
"flutter_amook/assets/assets/images/ingre/compo_in_04_1.png": "8800863d6b228f1ae8d53aeb8fb4b629",
"flutter_amook/assets/assets/images/ingre/compo_in_04_2.png": "8317921767458ed5fa3f223e70a7c9b4",
"flutter_amook/assets/assets/images/ingre/compo_in_04_3.png": "8031d4411ab336ee8937441e831e3caf",
"flutter_amook/assets/assets/images/ingre/compo_in_05_1.png": "c07e181132b84b1d06a6df2de1d7b5d1",
"flutter_amook/assets/assets/images/ingre/compo_in_05_2.png": "ec0565040efd0f1c35e428c6e52fb1b5",
"flutter_amook/assets/assets/images/ingre/compo_in_05_3.png": "08880ac5f0b0846553e2b6118e0fcd7f",
"flutter_amook/assets/assets/images/ingre/compo_in_06_1.png": "01355df28375d6a25b2e8e9ad950dfc2",
"flutter_amook/assets/assets/images/ingre/compo_in_06_2.png": "ab1dea3444a2a451e4d049af979e9a0f",
"flutter_amook/assets/assets/images/ingre/compo_in_06_3.png": "a24fa3b27952934d8d8a8310e3e915ac",
"flutter_amook/assets/assets/images/ingre/compo_in_07_1.png": "660cf461018cfc473d2ab08b35f0d123",
"flutter_amook/assets/assets/images/ingre/compo_in_07_2.png": "da5d3a9712cabce575bcefb202f43d84",
"flutter_amook/assets/assets/images/ingre/compo_in_07_3.png": "c3eae45253f27b1d2ec3bd3ae4551ae3",
"flutter_amook/assets/assets/images/ingre/compo_in_08_1.png": "7cc57051be420b6f7fafd1a9db0e3215",
"flutter_amook/assets/assets/images/ingre/compo_in_08_2.png": "5c9166fe47124cbdac87d5de4562d969",
"flutter_amook/assets/assets/images/ingre/compo_in_08_3.png": "9a731cbc5cac2efd6f14f783a7540617",
"flutter_amook/assets/assets/images/ingre/compo_in_09_1.png": "adfca00884edb3a5c9bb7706962922de",
"flutter_amook/assets/assets/images/ingre/compo_in_09_2.png": "793b1e3c768daa6662cf2b8c39d245b5",
"flutter_amook/assets/assets/images/ingre/compo_in_09_3.png": "fd83baf7fbc05f8874a2c57a31088ff0",
"flutter_amook/assets/assets/images/ingre/compo_in_10_1.png": "3d201fe0d2fcd5ba4ca21189f07c8b6a",
"flutter_amook/assets/assets/images/ingre/compo_in_10_2.png": "9f84f8f27dab5b1f585ac0aaab838b78",
"flutter_amook/assets/assets/images/ingre/compo_in_10_3.png": "a92d39b58aaa06ab26f1bee4edc770fb",
"flutter_amook/assets/assets/images/ingre/compo_in_11_1.png": "e4074bc9781ec05dc818d6c8282e9440",
"flutter_amook/assets/assets/images/ingre/compo_in_11_2.png": "e473832b3c286b44a6a0921a8a29fb29",
"flutter_amook/assets/assets/images/ingre/compo_in_11_3.png": "df996ded8d1adfda52d13bc8651bb0d0",
"flutter_amook/assets/assets/images/ingre/compo_in_12_1.png": "5f2c4d0849f4e6633396e653f180ffe6",
"flutter_amook/assets/assets/images/ingre/compo_in_12_2.png": "1367ea273cc2323115fe421bebf7d964",
"flutter_amook/assets/assets/images/ingre/compo_in_12_3.png": "08003908da0e2f4890ba80dcdeaa180f",
"flutter_amook/assets/assets/images/sauce/sauce_001.png": "f0877e134f9a094a30c4f6fa15c6a9a4",
"flutter_amook/assets/assets/images/sauce/sauce_002.png": "d2735270b4310ae91b5d28c19961a5e6",
"flutter_amook/assets/assets/images/sauce/sauce_003.png": "ad5cf693eb307bf2255a0e1e215d3dd9",
"flutter_amook/assets/assets/images/sauce/sauce_004.png": "8864d831f975b7562944a107ca24b215",
"flutter_amook/assets/assets/images/sauce/sauce_005.png": "9ea19d17de24eecdc4f625db81148922",
"flutter_amook/assets/assets/images/sauce/sauce_006.png": "402c2cc34368f695423601700f863d9c",
"flutter_amook/assets/assets/images/sauce/sauce_007.png": "1618123f3c34e30167ee0c4a82bbf8ab",
"flutter_amook/assets/assets/images/sauce/sauce_008.png": "5b596934951245a967b9d84fe5ddcc39",
"flutter_amook/assets/assets/images/sauce/sauce_009.png": "f96efc287246524ed9ab41cf833be8e0",
"flutter_amook/assets/assets/images/sauce/sauce_010.png": "220a8eee2672b6a53862012c02e7ba04",
"flutter_amook/assets/assets/images/sauce/sauce_011.png": "a4dcbe256ab1eff03516630112376fac",
"flutter_amook/assets/assets/images/sauce/sauce_012.png": "f51974d160b35aeee4f091b7da855ab8",
"flutter_amook/assets/assets/images/sauce/sauce_013.png": "1062e0a319efcb00f6edc9b9919d5f40",
"flutter_amook/assets/assets/images/sauce/sauce_014.png": "86bf9e75630595afe0d51bd6f1412460",
"flutter_amook/assets/assets/images/sauce/sauce_015.png": "c0f6222301c92b0dd4a188255a4bcbf6",
"flutter_amook/assets/assets/images/sauce/sauce_016.png": "548b38b7c512aa251b48d56bd33b29b2",
"flutter_amook/assets/assets/images/sauce/sauce_017.png": "642bd4db8dc0356d334031d9d32dcf53",
"flutter_amook/assets/assets/images/sauce/sauce_018.png": "789b55e8ddcd1e0fc74ca2a64faebf7a",
"flutter_amook/assets/assets/images/sauce/sauce_019.png": "9db9a1fb7b06cd72c4d74d89d4c306ab",
"flutter_amook/assets/assets/images/sauce/sauce_020.png": "da46e6fc1ecb7224a76e09b58e192fc8",
"flutter_amook/assets/assets/images/sauce/sauce_021.png": "90b922d7e1a42b41f5dd183063fd6ac3",
"flutter_amook/assets/assets/images/sauce/sauce_022.png": "c5bad1658e22af5368d82d54bf70625f",
"flutter_amook/assets/assets/images/sauce/sauce_023.png": "bd11b5dea132a7e6eb8752c6ecd4daee",
"flutter_amook/assets/assets/images/sauce/sauce_024.png": "2b42762a94adc137f9c23b11f82b8e1e",
"flutter_amook/assets/assets/images/sauce/sauce_025.png": "f95feb0f85b465273437f86d549a1189",
"flutter_amook/assets/assets/images/sauce/sauce_026.png": "7c399fd658ed7fe389120361eb8c6526",
"flutter_amook/assets/assets/images/sauce/sauce_027.png": "e4cc04041d219fca5488cb023a01726c",
"flutter_amook/assets/assets/images/sauce/sauce_028.png": "09cebe4e941d5e144cdc721cd442d359",
"flutter_amook/assets/assets/images/sauce/sauce_029.png": "a8b28eba69c7f978a94a236edfce46fe",
"flutter_amook/assets/assets/images/sauce/sauce_030.png": "5da695b3254f39cc07f30e9e2fe6746e",
"flutter_amook/assets/assets/images/sauce/sauce_031.png": "c4be313e699a7215df2ce464749ea2d6",
"flutter_amook/assets/assets/images/sauce/sauce_033.png": "704a1636dc1cddc42aeb74b05e09a32f",
"flutter_amook/assets/assets/images/sauce/sauce_034.png": "66c0203e38342e643079531a7db88e27",
"flutter_amook/assets/assets/images/sauce/sauce_035.png": "cf70bddab38c20fac8449d10fc14454a",
"flutter_amook/assets/assets/images/sauce/sauce_036.png": "ead54c46ddf6ac4b7767af3951945997",
"flutter_amook/assets/assets/images/sauce/sauce_037.png": "9fd221fc36749dc152445bbdd5d657ae",
"flutter_amook/assets/assets/images/sauce/sauce_038.png": "eda8b364089676c74637e09c308f7ef1",
"flutter_amook/assets/assets/images/sauce/sauce_039.png": "cd5caa2afff497fc130f72960bb18be8",
"flutter_amook/assets/assets/images/sauce/sauce_040.png": "ca1b5c55d36aff0b414d5e1d36ec12a7",
"flutter_amook/assets/assets/images/sauce/sauce_041.png": "a41c0367715b0242d14e7e672e6401a2",
"flutter_amook/assets/assets/images/sauce/sauce_042.png": "8c4e91afc7b75c2e1a49957d67bc5ad0",
"flutter_amook/assets/assets/images/sauce/sauce_043.png": "73fe8ade183077e05d237fc290f2d049",
"flutter_amook/assets/assets/images/sauce/sauce_044.png": "306641d02169f90bcf6aba9b690c024e",
"flutter_amook/assets/assets/images/sauce/sauce_045.png": "b85f824e6d4b2be872e3e78dec4aa9d2",
"flutter_amook/assets/assets/images/shape/point_basic.png": "27f7c208301b5e0dd5d7d3c5c2f70acc",
"flutter_amook/assets/assets/images/shape/point_fishball.png": "24a71ec403fb378a053f00950f0a4698",
"flutter_amook/assets/assets/images/shape/point_goroke.png": "db935a17e9316dcb341106c0baf3510e",
"flutter_amook/assets/assets/images/shape/point_hotbar.png": "cdca5c6928434f5f5a61d0477b99d728",
"flutter_amook/assets/assets/images/shape/point_shaped.png": "ea80e2c603d98aa5f533232babcfeb4d",
"flutter_amook/assets/assets/images/shape/spr_amook_basic.png": "69eb597434b607206f7965be82387d0d",
"flutter_amook/assets/assets/images/shape/spr_amook_fishball.png": "596eaeacdf19c55a86f699f6cfc1eb53",
"flutter_amook/assets/assets/images/shape/spr_amook_goroke.png": "65c3d697521a5a57da1ceb8e52ea7aec",
"flutter_amook/assets/assets/images/shape/spr_amook_hotbar.png": "310fd1357189964555ab49c27ee8d2a3",
"flutter_amook/assets/assets/images/shape/spr_amook_shaped.png": "5f39b07e35b3ff009d86a1f277dbd97f",
"flutter_amook/assets/assets/images/shape/thumb_amook_basic.png": "f73df0fcc3890fe2aee93b5a3f6a8a5e",
"flutter_amook/assets/assets/images/shape/thumb_amook_fishball.png": "f75e6b11efe2cde853c3c0e89ea47c94",
"flutter_amook/assets/assets/images/shape/thumb_amook_goroke.png": "76fe741e7ddfd081ea30cc80041fdfed",
"flutter_amook/assets/assets/images/shape/thumb_amook_hotbar.png": "a100caaf62b95f2d602b06a69d778d37",
"flutter_amook/assets/assets/images/shape/thumb_amook_shaped.png": "68b48a22b17fea8d06d09f161eae4850",
"flutter_amook/assets/assets/images/top/compo_out_01_1.png": "188891599e09c055b985bf1ef879bddc",
"flutter_amook/assets/assets/images/top/compo_out_01_2.png": "6ef3e79b47998ed3b6ce0ddcab52fdff",
"flutter_amook/assets/assets/images/top/compo_out_01_3.png": "20a775f466f18332d718c911ef9f7e86",
"flutter_amook/assets/assets/images/top/compo_out_02_1.png": "fe9c61cd8415f91df1fe08cda0c6a8d1",
"flutter_amook/assets/assets/images/top/compo_out_02_2.png": "0471835a4c16bab3d63d27c61622b24a",
"flutter_amook/assets/assets/images/top/compo_out_02_3.png": "41230c6e9aa001747a1530d34ed051cb",
"flutter_amook/assets/assets/images/top/compo_out_03_1.png": "405127617ce6ae999e038b636030cc25",
"flutter_amook/assets/assets/images/top/compo_out_03_2.png": "bb457b0f3f2e33ea70530ac80bdc6b02",
"flutter_amook/assets/assets/images/top/compo_out_03_3.png": "5ce68372deb3afcac2154e292b631686",
"flutter_amook/assets/assets/images/top/compo_out_04_1.png": "ef8ddaf0150c1dc66b88cf8984e21a2d",
"flutter_amook/assets/assets/images/top/compo_out_04_2.png": "d651d3fcc3f28d41075cf3f26c455c1e",
"flutter_amook/assets/assets/images/top/compo_out_04_3.png": "48d8600c0c8e0ce1141c18a4ee09a665",
"flutter_amook/assets/assets/images/top/compo_out_05_1.png": "93a7514c226ac44afee63a0879165fbf",
"flutter_amook/assets/assets/images/top/compo_out_05_2.png": "6e0a98ef61ca7b758800c62366dd4d71",
"flutter_amook/assets/assets/images/top/compo_out_05_3.png": "53a12407129fc997c4cfe98771f66722",
"flutter_amook/assets/assets/images/top/compo_out_06_1.png": "54cb09fff12172225e562398adbd77be",
"flutter_amook/assets/assets/images/top/compo_out_06_2.png": "56679b03386aef62620743bfafc0df3b",
"flutter_amook/assets/assets/images/top/compo_out_06_3.png": "ef41e01a718b1407909f888b087b3022",
"flutter_amook/assets/assets/images/top/compo_out_07_1.png": "92c2743a82ac3daf041169003ccdd83a",
"flutter_amook/assets/assets/images/top/compo_out_07_2.png": "867befa1a71b63179654c1b3d04de6d5",
"flutter_amook/assets/assets/images/top/compo_out_07_3.png": "b40bb73a16cb27dc0189db761d7f3bdd",
"flutter_amook/assets/assets/images/top/compo_out_08_1.png": "f905a284483c9c7b1c8f59942f1f3649",
"flutter_amook/assets/assets/images/top/compo_out_08_2.png": "9df0b167658a33fe8ac3aeb0f1bae587",
"flutter_amook/assets/assets/images/top/compo_out_08_3.png": "1cd9d267e26b4d4cbd50d916cbbafcaa",
"flutter_amook/assets/assets/images/top/compo_out_09_1.png": "b7c8152d3da5d6641d7391c6f592d98e",
"flutter_amook/assets/assets/images/top/compo_out_09_2.png": "35d5c5279b6a9ca62837d405d7748092",
"flutter_amook/assets/assets/images/top/compo_out_09_3.png": "f82dbd2a3a7a3c987793ecf5a1c202f5",
"flutter_amook/assets/assets/images/top/compo_out_10_1.png": "c2a61f9744e194f59868408734bfb347",
"flutter_amook/assets/assets/images/top/compo_out_10_2.png": "dbfc6226360aed49d21012e820e8df6a",
"flutter_amook/assets/assets/images/top/compo_out_10_3.png": "9990a6a9ede4d6a45ab597bf7ea76158",
"flutter_amook/assets/assets/images/top/compo_out_11_1.png": "277e3f9f4109aacd3ccee76c4abe4937",
"flutter_amook/assets/assets/images/top/compo_out_11_2.png": "13070c0cc867b74e968c813cd3d37e65",
"flutter_amook/assets/assets/images/top/compo_out_11_3.png": "2df5e876f6ecefdcc5556fb38a33ceec",
"flutter_amook/assets/assets/images/top/compo_out_12_1.png": "e8e9158a23cda53e8b129570f0564374",
"flutter_amook/assets/assets/images/top/compo_out_12_2.png": "5a3d9f471917343da6dfb86a92505e52",
"flutter_amook/assets/assets/images/top/compo_out_12_3.png": "248eee989a965987b50f539d6d869067",
"flutter_amook/assets/assets/images/ui/grad_circle.png": "a3ec37fbd47d04c1a84ad002feef2c61",
"flutter_amook/assets/assets/images/ui/spr_main.png": "7ae08d70c43d040f0e17e87746b20577",
"flutter_amook/assets/assets/images/ui/spr_main_bgd.png": "5d978c6a67c1d823ff46dd867daab89e",
"flutter_amook/assets/assets/images/ui/spr_text_contestschedule.png": "db923fc58faa801bf244435609a4f58b",
"flutter_amook/assets/assets/images/ui/spr_text_howto.png": "a107738e3a9845faf9a1b532251b2988",
"flutter_amook/assets/assets/images/ui/spr_text_judge.png": "daa49e8b3ec084d725b7962297959884",
"flutter_amook/assets/assets/images/ui/spr_text_judgelist.png": "e07cffc690c70fd0d60b0a8a5f4d726e",
"flutter_amook/assets/assets/images/ui/spr_text_prize.png": "bcbb3d58c724e31a9c7001c26ea55198",
"flutter_amook/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"flutter_amook/assets/fonts/MaterialIcons-Regular.otf": "2792a10b7bf991f6cef07cb0993ff121",
"flutter_amook/assets/NOTICES": "2da71b89a720457b67ef9e355a0a6cac",
"flutter_amook/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"flutter_amook/canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"flutter_amook/canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"flutter_amook/canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"flutter_amook/canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"flutter_amook/canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"flutter_amook/canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"flutter_amook/canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"flutter_amook/canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"flutter_amook/canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"flutter_amook/canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"flutter_amook/canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"flutter_amook/canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter_amook/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_amook/flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_amook/flutter_bootstrap.js": "ad23614f1f300936f46cd00960ed6ece",
"flutter_amook/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_amook/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_amook/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter_amook/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter_amook/index.html": "7bfbe2b7aeaf3ca63ec3a04cc548be28",
"flutter_amook/main.dart.js": "d53d3f8a40404d61a5a45372d12a694a",
"flutter_amook/manifest.json": "cc1e09816c7921715c888ad8d2e6a69e",
"flutter_amook/version.json": "330b17265d3fbf0c8d66477c28be4674",
"flutter_bootstrap.js": "aaa08188b9e5f48e85d64a54011efdbd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9db904addec1cff6e62ea9663fb18c2",
"/": "c9db904addec1cff6e62ea9663fb18c2",
"main.dart.js": "d53d3f8a40404d61a5a45372d12a694a",
"manifest.json": "cc1e09816c7921715c888ad8d2e6a69e",
"version.json": "330b17265d3fbf0c8d66477c28be4674"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
