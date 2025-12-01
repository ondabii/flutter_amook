'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "61cd86cd192c28d0e74c7e560f56344d",
"assets/AssetManifest.bin.json": "42dba3582a562188a73d56c4e43fc149",
"assets/AssetManifest.json": "4318877ca1438c5e5e994ef7bb96ff95",
"assets/assets/images/base/paste_original.png": "3178ed9dc4c0b0f49d784fb340b147a0",
"assets/assets/images/base/paste_rice.png": "ce52b5ff42b07c35655d9a12c723ec92",
"assets/assets/images/base/paste_vegi.png": "5b3e5d87c42b72c73e305776b6cfee4c",
"assets/assets/images/color/150_black.png": "71e01142a32bf7e65c4685fcd3c850e4",
"assets/assets/images/color/150_brown.png": "562cde12bc166ed55c04f65b94b06507",
"assets/assets/images/color/150_default.png": "c132578941a8b4facdf61a1e99991dab",
"assets/assets/images/color/150_green.png": "59228d022ea570e54e38aa93637766fe",
"assets/assets/images/color/150_orange.png": "81ad3a80a5969e7b9bac036b985bf555",
"assets/assets/images/color/150_pink.png": "226d661d4460f75bd95a4a31d1da1b85",
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
"assets/assets/images/ui/grad_circle.png": "a3ec37fbd47d04c1a84ad002feef2c61",
"assets/assets/images/ui/spr_main.png": "7ae08d70c43d040f0e17e87746b20577",
"assets/assets/images/ui/spr_main_bgd.png": "5d978c6a67c1d823ff46dd867daab89e",
"assets/assets/images/ui/spr_text_contestschedule.png": "db923fc58faa801bf244435609a4f58b",
"assets/assets/images/ui/spr_text_howto.png": "a107738e3a9845faf9a1b532251b2988",
"assets/assets/images/ui/spr_text_judge.png": "daa49e8b3ec084d725b7962297959884",
"assets/assets/images/ui/spr_text_judgelist.png": "e07cffc690c70fd0d60b0a8a5f4d726e",
"assets/assets/images/ui/spr_text_prize.png": "bcbb3d58c724e31a9c7001c26ea55198",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "ee55d54d3f16e396a4434cc522bc30f4",
"assets/NOTICES": "a1b00dc882955d1e82ac76e853bfe5b2",
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
"flutter_amook/.git/COMMIT_EDITMSG": "fccceef320fe3813b663ddab3a44d957",
"flutter_amook/.git/config": "bdff2f13056a95011d9966e0629b6ec7",
"flutter_amook/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"flutter_amook/.git/FETCH_HEAD": "6d412bccee052cc55d4d9908d7c48cf1",
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
"flutter_amook/.git/index": "b2844cfa4f1be6e2d38d6fb399944bbb",
"flutter_amook/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"flutter_amook/.git/logs/HEAD": "76d2ce0403869120a1ebaadff59fc727",
"flutter_amook/.git/logs/refs/heads/main": "76d2ce0403869120a1ebaadff59fc727",
"flutter_amook/.git/logs/refs/remotes/origin/HEAD": "ef74d59d019b22c396abce261867f425",
"flutter_amook/.git/logs/refs/remotes/origin/main": "3541e88021b8821742e3840192650039",
"flutter_amook/.git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
"flutter_amook/.git/objects/04/4349e9a9fbdf3b8f963b8fa05686ba8cd6deda": "6452327eda71c2f7adbcf7860cd3c70c",
"flutter_amook/.git/objects/04/9b85c6e0d4bef7d98067b95a4ddc5634c88cea": "c550ba9aff20557c5cdc3a85299b1003",
"flutter_amook/.git/objects/17/b4236d3d1a570a40aa8d9ee3f72cdcb6adff5c": "f5f9935ce60f8e4b91dc18542a572220",
"flutter_amook/.git/objects/1b/af7986a06deb20af097547ee569994c220a9c8": "7d1b52daa80685f77c2ac0c6bd400467",
"flutter_amook/.git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
"flutter_amook/.git/objects/23/987dd7f3f2222c586b6f41abf76522f43f2db1": "4f1bc09a908d6465fab5caec3462b72e",
"flutter_amook/.git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
"flutter_amook/.git/objects/30/91223150aa5648476906f82a98719b22c19a29": "c1c0be8a3cb540e6fa130c88da7525ac",
"flutter_amook/.git/objects/39/c94cce30dd105effce060b11a5c2de4868da84": "b4cb9f3a0c7414112d3dd042205a0042",
"flutter_amook/.git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
"flutter_amook/.git/objects/3f/e299d10e0aa58d135f4fc8559ceb84473775cf": "faddfa101de22181ac30f3161d33279a",
"flutter_amook/.git/objects/46/56a0c751f5e63079513721dcbab14fc4fe283a": "aaf4b068bed434ae6a97889768282e8d",
"flutter_amook/.git/objects/4c/7c6ee7b6b0ce26f4247b0f2b5d7ca546b428a3": "e24d6cbb9507dd5190c9ba71242070bb",
"flutter_amook/.git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
"flutter_amook/.git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
"flutter_amook/.git/objects/52/3191c22d64fc8af6465536496407bc00ede4bc": "4f4867779406fbd4472e22975f1ce6a3",
"flutter_amook/.git/objects/58/2d5c484bdb8181eca76a92369758c34fe99b71": "5faad6cd049360a5a242822594c23cdf",
"flutter_amook/.git/objects/59/e9e68069f16d5ccb71ecaad7fcc6c77b0db378": "47f4ca3f187b32cebc69c17f3a398f57",
"flutter_amook/.git/objects/5a/4423052e96d7fa457444f5bb37e965defddf14": "27510818e382020538cc2c266e59faea",
"flutter_amook/.git/objects/5a/c4d215a835df9ee99df1f37f28e8a8c1492296": "415415da3268ca7dc4417c346e7cd96f",
"flutter_amook/.git/objects/61/6b1442bff8487d11cf0fdb92acfb9ff1b255a4": "3e8612ae97922885989013e554e22865",
"flutter_amook/.git/objects/67/c4746ea2872e17b9db71b2943bb4bcf7b02761": "1c61fbd1c26a60e680be4edb50ab4e41",
"flutter_amook/.git/objects/67/eacae025023002ea7dc7cc73cb931f9e2c6c45": "3dc0d0e2cff7f34bab66b8a17cb5e428",
"flutter_amook/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"flutter_amook/.git/objects/76/5efbdf68de9fa9d333348b342b3cec71d97753": "388733929d12d72235a4040b4c114d30",
"flutter_amook/.git/objects/76/7330d7a59b455f680d3232f42e26f0bf5816fd": "07fe102eff52304c00fa2a78b23a01f6",
"flutter_amook/.git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
"flutter_amook/.git/objects/7b/753e1cb2414a704aa1ca32d20db597b2e7cd7f": "9c4b46f9a0b7952b69e1c2fab226d5e4",
"flutter_amook/.git/objects/7b/a739cf52f405f0fd0bf2293a2c56584769f841": "3b3336805794e01463545580e65258d9",
"flutter_amook/.git/objects/7f/93d39222e8a1fd96739430073f25f08d9295f1": "7790a27986b6938a8af92bb56e5d0d2c",
"flutter_amook/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"flutter_amook/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"flutter_amook/.git/objects/8c/09fd26beef0704f674eb95cc0506afd615ae1d": "5f1dcb880edc475c9617d6a9cb0913cd",
"flutter_amook/.git/objects/92/7b51d940865a7694b11263dcc66416a9bee688": "f069f758cdc7a7f60b9b65a0e7f95759",
"flutter_amook/.git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
"flutter_amook/.git/objects/98/14d658bfbe4db66699d568b1da1ffbb33d4730": "dadce80fb88a3714b758f20822d93c70",
"flutter_amook/.git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
"flutter_amook/.git/objects/9c/7fe777c41c86acbe387c6ed75159fbbed6ca48": "a2ecd4904ea39408a6c54cbaf128cc3a",
"flutter_amook/.git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
"flutter_amook/.git/objects/a0/d59e974ab40d69c7bb9c2c3440899ff3c8f613": "dd79af8b8f6f2d4f87a17c91ebd47186",
"flutter_amook/.git/objects/a6/30bec9f3bda3a3ed9d37823875b94b912cacce": "ba825c9beadbbedcb12bbc68b231d775",
"flutter_amook/.git/objects/a6/362fc8ef96b0fc4910a15e7801c98173579eb1": "5d07338970f622b97243cdbb21acfd60",
"flutter_amook/.git/objects/a8/85335e2e11014118b08b26ecd2841a4b5ea47e": "4bf2e376f1df9c0bc2a9dfbff3ae6c52",
"flutter_amook/.git/objects/ab/d4d49dbc6fe42affbeb05cf9e21a38d472023e": "14b40f0dafb33ef4c044b366a40d2cc5",
"flutter_amook/.git/objects/ad/fbe8c6561b122b81949775460cdf2b578f960a": "4751c3d6856995e01292120545da81c7",
"flutter_amook/.git/objects/ae/e9505de7974525401dca7eaad12610e6a0e9cf": "a14a06876d004a42ab22b8fc50480fc7",
"flutter_amook/.git/objects/af/4e0128b55df3c8e09b5e958bb4e1cd5b8f7491": "e2cdefc0ef7650049d93859ab7731661",
"flutter_amook/.git/objects/b0/da888b48d137508de3cf94fac827c65cf1762a": "0249b3683a1a68d1d7b309327265bb5e",
"flutter_amook/.git/objects/b3/22ba5b98d6583dee32c7c583cad02297c5fbca": "0efe8f82bfe5d98b7dd3f36138fc13a9",
"flutter_amook/.git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
"flutter_amook/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"flutter_amook/.git/objects/b8/1e0ea82b307c0d532b6724769d9fd245dac079": "ffe2c2085ebabdbc5ac6358dcda942d8",
"flutter_amook/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"flutter_amook/.git/objects/c1/2da38ae5fbce365ba167b7670dbc327a80bf70": "4c2cdb1e1ad2d51f89eba20ad7947c18",
"flutter_amook/.git/objects/c1/a72ca681bc00ce9b850a965d3abf3e41bc8933": "4af45accbed1c5386ff7579aceb74a23",
"flutter_amook/.git/objects/c2/05c821080ba73d24400ac80a6e16a63b5cb277": "253a8d67d369cdb363794c2d71d780bf",
"flutter_amook/.git/objects/c2/a9ecc5c53e6e75cb9ab2083ebf4253c93061c2": "276063e5416cb308f6d983bd6cbacc50",
"flutter_amook/.git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
"flutter_amook/.git/objects/c5/144ad07bb7c8205edf2dec0c71eaa6bf906edd": "1abcb826df91f6f4062dc01b38db1f42",
"flutter_amook/.git/objects/c8/6c7fa493a2b2a4304aaf34bb00515907784119": "e1638f9bb6643e65b2639c4bde6d7290",
"flutter_amook/.git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
"flutter_amook/.git/objects/cd/683cba6488bfba3a87466bf45e5888188f3fe2": "523bb448870e54eea3eee613d45962a7",
"flutter_amook/.git/objects/d3/b7227b7606839b2dd7ada98b9cc6025ef496ac": "801157321f3f4f0b8c7950b04581d707",
"flutter_amook/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"flutter_amook/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"flutter_amook/.git/objects/d8/dcba7f6399e531a4041de7226e6cf7c56ea643": "a9b4896d154f8fa327d1b3b039c74b0e",
"flutter_amook/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"flutter_amook/.git/objects/e0/0b05619c33144ee3513681af2823994d6878a2": "83faf6a6ffee1c7e4ae5e231f4e9fce6",
"flutter_amook/.git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
"flutter_amook/.git/objects/e8/9b054d065c6df35439486ed164eb4f56ce3773": "4a8912ddeb1d238516cbe8cf40884f17",
"flutter_amook/.git/objects/e9/16a8f37dbaa9ac7914cd68d3a9512a0c5c051a": "864e2320b43113b223bc997eb881bc15",
"flutter_amook/.git/objects/e9/d83b7d16a25ec3128667de1966bff18bec81bd": "06eaa471c55de7d16959c1c29447cfb8",
"flutter_amook/.git/objects/ea/05f27425d988f23c75076fa0c24ff99b4dbb7b": "b39183f4fe4b283aeb8414a8143c0fa6",
"flutter_amook/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"flutter_amook/.git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
"flutter_amook/.git/objects/ed/cde77fea7524bec182f8c7d66c9b7ae8e92553": "8cfabce5b9b77037fb8baa2c23cad917",
"flutter_amook/.git/objects/ed/ea8b4de09a04760a86f43ad9488c0010d8dba7": "b07e4e1bc707ff587b85537f93423fa8",
"flutter_amook/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"flutter_amook/.git/objects/f5/82dc40ecc88bce8f7c2889054f09de9c5d4977": "3b9297dac4e1fcf00094f052858b310f",
"flutter_amook/.git/objects/f6/ae837ab0da8273eae4040c4d7f072921466e4a": "ff9be96cb4d628b8233d06fe1e08d68a",
"flutter_amook/.git/objects/f7/0a908ecd117849cf879f8f35715d51fdc81cf0": "542711c1f600773f5c032ff4c358cf47",
"flutter_amook/.git/objects/fa/ba90c13044375b0850c3771386ddb91d6e0a0c": "153eadaa5fae97ba6618c02c17d75593",
"flutter_amook/.git/objects/fb/3743d8d3e1f160f0330c077164427ffdc5f847": "12b109b7027f3d48d484a146d5e506f8",
"flutter_amook/.git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
"flutter_amook/.git/refs/heads/main": "d3bce88565c7d33bf447f3f88b8b985c",
"flutter_amook/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"flutter_amook/.git/refs/remotes/origin/main": "d3bce88565c7d33bf447f3f88b8b985c",
"flutter_amook/.git/refs/tags/maintag": "b52b90094b7228a83851085d1f5a032c",
"flutter_amook/assets/AssetManifest.bin": "61cd86cd192c28d0e74c7e560f56344d",
"flutter_amook/assets/AssetManifest.bin.json": "42dba3582a562188a73d56c4e43fc149",
"flutter_amook/assets/AssetManifest.json": "4318877ca1438c5e5e994ef7bb96ff95",
"flutter_amook/assets/assets/images/base/paste_original.png": "3178ed9dc4c0b0f49d784fb340b147a0",
"flutter_amook/assets/assets/images/base/paste_rice.png": "ce52b5ff42b07c35655d9a12c723ec92",
"flutter_amook/assets/assets/images/base/paste_vegi.png": "5b3e5d87c42b72c73e305776b6cfee4c",
"flutter_amook/assets/assets/images/color/150_black.png": "71e01142a32bf7e65c4685fcd3c850e4",
"flutter_amook/assets/assets/images/color/150_brown.png": "562cde12bc166ed55c04f65b94b06507",
"flutter_amook/assets/assets/images/color/150_default.png": "c132578941a8b4facdf61a1e99991dab",
"flutter_amook/assets/assets/images/color/150_green.png": "59228d022ea570e54e38aa93637766fe",
"flutter_amook/assets/assets/images/color/150_orange.png": "81ad3a80a5969e7b9bac036b985bf555",
"flutter_amook/assets/assets/images/color/150_pink.png": "226d661d4460f75bd95a4a31d1da1b85",
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
"flutter_amook/assets/assets/images/ui/grad_circle.png": "a3ec37fbd47d04c1a84ad002feef2c61",
"flutter_amook/assets/assets/images/ui/spr_main.png": "7ae08d70c43d040f0e17e87746b20577",
"flutter_amook/assets/assets/images/ui/spr_main_bgd.png": "5d978c6a67c1d823ff46dd867daab89e",
"flutter_amook/assets/assets/images/ui/spr_text_contestschedule.png": "db923fc58faa801bf244435609a4f58b",
"flutter_amook/assets/assets/images/ui/spr_text_howto.png": "a107738e3a9845faf9a1b532251b2988",
"flutter_amook/assets/assets/images/ui/spr_text_judge.png": "daa49e8b3ec084d725b7962297959884",
"flutter_amook/assets/assets/images/ui/spr_text_judgelist.png": "e07cffc690c70fd0d60b0a8a5f4d726e",
"flutter_amook/assets/assets/images/ui/spr_text_prize.png": "bcbb3d58c724e31a9c7001c26ea55198",
"flutter_amook/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"flutter_amook/assets/fonts/MaterialIcons-Regular.otf": "ee55d54d3f16e396a4434cc522bc30f4",
"flutter_amook/assets/NOTICES": "a1b00dc882955d1e82ac76e853bfe5b2",
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
"flutter_amook/flutter_bootstrap.js": "d751012ddb6a2a55bcd7565eb9b6a7f2",
"flutter_amook/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_amook/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_amook/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter_amook/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter_amook/index.html": "7bfbe2b7aeaf3ca63ec3a04cc548be28",
"flutter_amook/main.dart.js": "4f7eac4425e3be5ff8798271087fca3d",
"flutter_amook/manifest.json": "cc1e09816c7921715c888ad8d2e6a69e",
"flutter_amook/version.json": "330b17265d3fbf0c8d66477c28be4674",
"flutter_bootstrap.js": "83cbcf310c799b657c7714d2da9a6880",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9db904addec1cff6e62ea9663fb18c2",
"/": "c9db904addec1cff6e62ea9663fb18c2",
"main.dart.js": "72545723c8cf4cb698aa59302b20ab3f",
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
