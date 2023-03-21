'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "eea4bcd41d56c4eb3985e31ca00bcb75",
"index.html": "7db74a002ee7d6e97b43107317734bbc",
"/": "7db74a002ee7d6e97b43107317734bbc",
"main.dart.js": "17f9ea7fad0e707d3d67510e97829cca",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2200d5d2c8845d47feddb7a34a460dc7",
"assets/AssetManifest.json": "1c61717f8dcc9934dbd042d5042205a0",
"assets/NOTICES": "73874542f2827f81199d8239cdde5a60",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/blogs/img_blog_one.png": "c5d0f13920d7bada5494ee8d7905ea96",
"assets/assets/images/blogs/decloset_team.png": "10edb1111866baca577fb961bfb8dbfb",
"assets/assets/images/blogs/gamejam_2019.png": "1d4abe112536a5a5fb676431cf78498a",
"assets/assets/images/blogs/gihot_team.png": "2f31e48e8d7b107a002b0f07509344c8",
"assets/assets/images/blogs/72540072_1205760612952758_1898417991993786368_n.jpg": "c4595360df0c7f7cc09886bbcc27e3a2",
"assets/assets/images/blogs/year_2020.png": "d128fe0441758b5f22e286abbebee86e",
"assets/assets/images/blogs/sharing_bug_second.png": "1267b22fd4431302192f909624adbc68",
"assets/assets/images/blogs/sharing_bug_first.png": "e8429b8f2b2d5c71bd3bfec7f7e04f91",
"assets/assets/images/qrtele.jpeg": "522bfd69771606a6b3f77bfd3597c4f2",
"assets/assets/images/myseft.png": "a2a378c21e915db94bb14cccc0cf7a1e",
"assets/assets/images/avatar.png": "021de4fe9fe997336ae42bd7c330664a",
"assets/assets/images/portfolio/decloset/decloset_1.png": "8c81ff7215aa1b3c3c7a66e49bddd701",
"assets/assets/images/portfolio/decloset/decloset_2.png": "c27892f7099a59f3c0df57e23ea41335",
"assets/assets/images/portfolio/decloset/decloset_3.png": "a596605f0af6113cd15b9a85b5828774",
"assets/assets/images/portfolio/decloset/decloset_6.png": "420b47957521ffa85fe97fede0b18b74",
"assets/assets/images/portfolio/decloset/decloset_4.png": "278e0bf95adc9950c00bba171b87e139",
"assets/assets/images/portfolio/decloset/decloset_5.png": "80dd768692cc5e0bde13f3e48129c035",
"assets/assets/images/portfolio/decloset/decloset.png": "df0407a5a2f93cba4d8fd5287bf7a4a9",
"assets/assets/images/portfolio/breadking/breadking_home.png": "5004f055c1fb43379adf2dfa46260807",
"assets/assets/images/portfolio/breadking/breadking_pay.png": "1b34bfbe83e39635b6f994b899c51b8f",
"assets/assets/images/portfolio/breadking/breadking_detail.png": "c8f3f3f7b90b928e63f15b3bd75b53ac",
"assets/assets/images/portfolio/unigwork/unigwork.png": "2103f8c5891160a50fbdba38791809d3",
"assets/assets/images/portfolio/unigwork/unigwork_4.png": "22fd609a311c600b85a6cc845c497264",
"assets/assets/images/portfolio/unigwork/unigwork_5.png": "9814750cb8fa3f555bbca7f6625b6303",
"assets/assets/images/portfolio/unigwork/unigwork_2.png": "54d78249320c6bf0c8e94c5d87a0bffd",
"assets/assets/images/portfolio/unigwork/unigwork_3.png": "255265d0a571aed137a25b2907a67617",
"assets/assets/images/portfolio/unigwork/unigwork_1.png": "2bcdabaa2fd09a4bbc197a49b48a6173",
"assets/assets/images/avatar_support.png": "45d94e8f89d47f16092bec859dc3a56d",
"assets/assets/images/imgAbout.png": "41a7ed9291f50a48b201e3363b3f77c6",
"assets/assets/images/thBao.png": "095489aa7df593ffd2d4609408313316",
"assets/assets/images/bg_testimonial.jpg": "878f3ce6e240d227260d712718e8e5c4",
"assets/assets/icons/contact.svg": "286b1b3895bfd56bc387dde07570ffc7",
"assets/assets/icons/home.svg": "6f9bf25b9dd31ebd4aa601543e095a84",
"assets/assets/icons/service.svg": "3e96b8e2df664cb5c58a0210210c139b",
"assets/assets/icons/instagram.svg": "266470f1040af8272905ec8e4e971474",
"assets/assets/icons/website.svg": "8a50f2c3bd3323baf48837cf90bbf378",
"assets/assets/icons/app.svg": "4ba69538efb2830a8fe502eaf615f6cc",
"assets/assets/icons/telegram.svg": "fde5239f5a846920c926c677e38aa571",
"assets/assets/icons/design.svg": "262011d9f54a09245af46d6d717476d6",
"assets/assets/icons/facebook.svg": "91345818f5b7a7c3a90a0f7ad3c2caf6",
"assets/assets/icons/about.svg": "9fe55d8140d4ded4b8274e156376c4e5",
"assets/assets/icons/twitter.svg": "fb5ccb451d5c842dae5722b975056c14",
"assets/assets/icons/blog.svg": "45ee1681c516cf87cf51c13553f86020",
"assets/assets/icons/motion.svg": "63112e9b4776f9ff452cbbe2f856dad7",
"assets/assets/icons/portfolio.svg": "324ef5274898b47779556f1221772013",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
