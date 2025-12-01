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
"flutter_bootstrap.js": "667544135106b16a5a8d94d683b5877c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9db904addec1cff6e62ea9663fb18c2",
"/": "c9db904addec1cff6e62ea9663fb18c2",
"main.dart.js": "ec096c28620ebcb632fdca7965c2ef54",
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
