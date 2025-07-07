'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7879f5e1d212251a452d89e51b967362",
"version.json": "159d5e6fdf7dbfba8f978f3a77d83b27",
"index.html": "8df5de31d314e12f5425116bc231ece9",
"/": "8df5de31d314e12f5425116bc231ece9",
"firebase-messaging-sw.js": "fd470e448d0706c511ca4b14b88f27de",
"main.dart.js": "6d88eba064e2190b5b8318459a2e983f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "33579ca49a870a70dadbe02d098c7a3c",
"assets/AssetManifest.json": "eeec9a2e36e585552080eda5a759563c",
"assets/NOTICES": "9d6e461fe9fff787d3abc3ebe7495870",
"assets/FontManifest.json": "45b01ca338ada0e1275da5d79cb5b1b6",
"assets/AssetManifest.bin.json": "1e460814f943f77394459121b757a8bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e1404748a1d21d20e66f523c175550df",
"assets/fonts/MaterialIcons-Regular.otf": "6bbb6bc2c1110c393b46e1f809346fb9",
"assets/assets/images/place_holder.png": "8ee5d836868180a191ffcc95919fa59d",
"assets/assets/images/faab.png": "1e6df6c459c3996c522eb0245488d18b",
"assets/assets/images/illustration_login.png": "5cc936a1f2d507d22a724e20e8eea0de",
"assets/assets/images/faab_logo.png": "672ea6039c21c254173a8a37b5114c87",
"assets/assets/icons/search.svg": "9252768b9e989c8532b4d2eecaf85975",
"assets/assets/icons/placements.svg": "9fd92524e81accea5f2bd8fb32ab250b",
"assets/assets/icons/registrations.svg": "1648497bcffc647d7a349dcae4fb9617",
"assets/assets/icons/home/productive_calls.svg": "dc455814ac111b60242eafe70aa57b12",
"assets/assets/icons/home/todays_calls.svg": "4a00349c310328e99d38fa72c68674a8",
"assets/assets/icons/home/my_deals.svg": "b1a607f643e192cec72824be15851e17",
"assets/assets/icons/home/untouched_leads.svg": "4f3abf9ebc1425775958b7852a17e502",
"assets/assets/icons/home/scheduled_calls.svg": "707cc519a56031f4eeb87e4ab777e647",
"assets/assets/icons/home/missed_calls.svg": "943106eb7a0f18758994d4305f1f7d03",
"assets/assets/icons/spv/directors.svg": "f8cca861adefe4e6e41bf5da3e86a591",
"assets/assets/icons/spv/edit_icon.svg": "de8624c253008197d4636292f062b48d",
"assets/assets/icons/spv/edit_pen.svg": "48df0018e63466f1b1306fcf0c6340dc",
"assets/assets/icons/spv/general.svg": "7abf83d4c6175cf4367a6bda20044735",
"assets/assets/icons/spv/meetings.svg": "c2acb028baf83c7ac467001502edf6b0",
"assets/assets/icons/spv/documents.svg": "74443e7cb94c2c26497543333efaf701",
"assets/assets/icons/calls.svg": "347f14d851ef39cb904b1c0b715fb881",
"assets/assets/icons/webinar.svg": "be3946ee6d611c399adb293730c1fb72",
"assets/assets/icons/user.svg": "4b92563ef4ef8171c10e35d178811860",
"assets/assets/icons/app_users.svg": "8b6938852e95fdd0ee2b64a1a25f5275",
"assets/assets/icons/shrink.svg": "3a206f6a60d14c97d33a166eaf97b60c",
"assets/assets/icons/sc.svg": "4225dc4785c6aecb590b9e1e1298b84f",
"assets/assets/icons/certificate_credentials.svg": "95a6337bfe460ef1f876b73016fa8f06",
"assets/assets/icons/edit_icon.svg": "48a9e28ead3a2328bacce66533318a92",
"assets/assets/icons/lock.svg": "8cf8a0ceaeb5f49bdd326575be1f18ba",
"assets/assets/icons/private_placements.svg": "00fda992dd42d8ef60ce5bdc14d9ae08",
"assets/assets/icons/deals.svg": "bc8ec3e1787d2179555314be7a6dddfa",
"assets/assets/icons/settings.svg": "bd9bf3b2752389e6e8efbcecf5b2240d",
"assets/assets/icons/download.svg": "752ed1796f2bc14b65acf5d6452650a7",
"assets/assets/icons/expand.svg": "199254a1436163e08fb4ba30ee60c213",
"assets/assets/icons/spvs.svg": "203a992d4ed699988c24315236d4bfb3",
"assets/assets/icons/attendees.svg": "db042193dfc6a6927d47f0cfb4bbef7b",
"assets/assets/icons/dashboard.svg": "c8e5eb04bc9039ce53677df26b5d497e",
"assets/assets/icons/meeting.svg": "35d07625b5022cc736ee98322aee301b",
"assets/assets/icons/egm.svg": "78b928d5d6adcdd069ad27cc36f0bfb5",
"assets/assets/icons/add.svg": "904f960fb8f6910a841d64125f52ea5b",
"assets/assets/icons/backouts.svg": "ac551aaf5b30e0bab55acf5bf94ffade",
"assets/assets/icons/issue_sc.svg": "0461f6135db574d207c14f34f46ba121",
"assets/assets/icons/indian_rupee.svg": "21a46b0e5c724faaa1e26ffc84d0350c",
"assets/assets/icons/stamp_paper.svg": "906f4a8fa1ca9e36db8eed993706d092",
"assets/assets/icons/conversions.svg": "5498414dd30cbf1c1227059f691bc18d",
"assets/assets/icons/opportunities.svg": "cc4a26f3be2423fcbd5f66c30b336e46",
"assets/assets/icons/notification.svg": "8460fd5bfb047d7d9be5dc8f9abf5471",
"assets/assets/icons/meetings.svg": "c60f1041bc499698367cf1ca4979c02a",
"assets/assets/icons/pas4.svg": "78a9d2955bde6620463462e38eb432e9",
"assets/assets/icons/delete.svg": "50563307992f99f52056d115488ad4b5",
"assets/assets/icons/eoi.svg": "427b8eee42a766d396abd480d8ee7ded",
"assets/assets/icons/issue_ccd.svg": "5adee91a614bc2ac0829ed7496f4dae9",
"assets/assets/icons/attendants.svg": "6d3cc45dff1537a0dacb8392991f7b56",
"assets/assets/icons/calendar.svg": "55384ba6f7a14dd001be2c48e77830fb",
"assets/assets/icons/pp.svg": "c7a3e5aca907b6e7900723348f48a7d4",
"assets/assets/icons/upload.svg": "de858def012fd9551da469731e9d0584",
"assets/assets/icons/meta_icon.svg": "cd16b85296927cf5be0ecdc4adaf9801",
"assets/assets/icons/done.svg": "2fed62ccdbe26229630a6827cf422b27",
"assets/assets/icons/person_add.svg": "478dcb5108bf0083e98995f3853ee6ca",
"assets/assets/fonts/Inter.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Archivo-Bold.ttf": "1eab2d39d7ab68303d0f814aea7d1269",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
