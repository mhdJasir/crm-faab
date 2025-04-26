'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "52370563de4ae312294f0ece54b1d0a0",
".git/config": "559880149c1e80f64f859c7dd0fec8aa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b4e1ec2dc9d76d336ed2af73ac4e5c55",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a1ceb6e9564d1dd6ce91756ec5ab25e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "206766486925ac3877f1bcefc8bd56dc",
".git/logs/refs/heads/main": "604749f8417190fa7c00ae0baf52aa08",
".git/logs/refs/heads/master": "46728b2ce1fa13f634ab9e7bf42000cc",
".git/logs/refs/remotes/crm/main": "88f037e993e33406be59449e12810ad2",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/18fbef153f920110e1802090be20bb6ff74d8d": "15814b8a1f6bb11bf366a6f4536b2b63",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/79c2e73252687b3077f37ef51dfb4a5456af3c": "204cd5c2308f2f14f99e62c04fd0425c",
".git/objects/07/e3946951d7e0003de3c62c7098f9b2bcfb6275": "3ddefcab920fae11d0e01dbd41e22535",
".git/objects/09/826b1417ee416b89c699211dc976f3bcf2a439": "5d814bf4a68829f762e4ec43edce7c6b",
".git/objects/14/406b1b1dc7d27adc6bdf79fb2c526b84ca60ae": "67af880449aa0fde390029b51374cd9f",
".git/objects/18/c1422e0439d3bfbaa9b757528658e8bfcf1372": "6d84feb6e04152d388f37c7cc516d7cf",
".git/objects/20/829a8992196d36ad030a45e91c47ce73bef4b4": "f168d67778fc21f89ba6256a00d651ff",
".git/objects/28/eff99f6e500c9d49e8a3ba8994b61163f29f8f": "03f468f2d30d7efcdc7a88cefed055a9",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/6c3cb5a6731b5ec30cea3058c3b09986d403dc": "6c524719393d06aa3221ba4f54ace721",
".git/objects/31/81ed7ac9bb230c9bc55775fa3cf2120baa1b11": "26533ed1e5c5635c0cb289b62b2d864c",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3b/87e42e33e2f5e20e1e856fb97574ce9fc14de9": "436096e917e77a14cb111a5b08573ba7",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/47/bfa122481ed9072e76e133a7e08b2853833d5d": "6c05646bb0c7d8b2533219f6e4275be8",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5b/d4460f67c49bd23b3721123556f8652815a025": "d27bc4b02a6539a22392ad26f50b2da2",
".git/objects/5e/28e768178cd0f112a529b25ef6faecd4b3ce8b": "3e11088e0d44555c7b20da523c5dd314",
".git/objects/5e/53fdc7e3f4df0cfc7e365c12fdf29564e6adb8": "606a5d9c1d08267f015f73869e5f5318",
".git/objects/5f/aba9abdabc76d301d5b0e560c37d5f16670d25": "33739303aa5e6973661647bea64c7786",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/c75fb782698c8faadb65d30660665685e997f4": "c0566beef01de2d404f75a51597c8bdf",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/ed10fea170eece9383bd2a2ece1e00dcb103d9": "20eb622917dfebc1349525daf94dfe5f",
".git/objects/72/a2552626ba36775d07868e6aa018a97f073511": "59df02c8a8f3b02b82fd5f000c54e964",
".git/objects/7b/2e3f816cc4c8d5a9ddfb35aed64257ff261e32": "d8857cc4305119406cc683d7412a97c0",
".git/objects/82/a209d6790e4528fa21d41bfcd9d7dfdaaec1db": "a3470c116d80b2f08ca5bde0d45b9cf0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/394c0596f9ca766580b2519f587f8576c0050f": "3a6ad7ec3f8b96f829d6e72f8e4ca223",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d3d4aaf7113d318ea07b52a3f4255121d6f96b": "a61141f0b4719f4c6bf091c69aaaea0b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/c74d71b1527799309e6fac105267aa15c6c63d": "f6542f5949cbae25fed65cd737bd465f",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/6ed97bf11b70c2de8f64c9930ed5226d9b393c": "1ccca1f0ab0adadde89c97a968487c58",
".git/objects/96/57638ea8a814478c8f12da0ba4ea65eb80176c": "1000ba57ebd8c7d4689f48a9223febc4",
".git/objects/96/6861de8eff9d36d85d6e1a64ad4a2cd3b85a8e": "4e250f5a3486b27dabe77d241e19ac26",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a2/7faf95e181bbb3b80e90cfe71174d525a0c92e": "7195ba7514a7b5739eb192c09e08dfb4",
".git/objects/a3/db0c14717b4aa4cf8975b520e125d118dba0cc": "0cab6162ef7b370145196776e72005ba",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/2d375070164654ea5df0f91e3a0063d12cdca3": "7d26ae648906d21bbae467dfd4c495f8",
".git/objects/ab/cda98237c0eb616d739bf4f55b5f32342cd555": "c27179840a5e32f54962e8431fe16d6f",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/c6/25e0d1ac3fcbeb326069d40beff8d0925294dd": "6977d0e6dd1e66ce531c1d532c075eb3",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/d4/21fef28a8a422f4b47cdb258af55a5d653717b": "8458ea697c43e1913fcddcfdc45d2c8d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/8d8e0948874e5abbf224318beca37265d15692": "c56ec5342d85a7986b86f22b507b1822",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/aeff7789f92bbddf9e0b56e05c1a0259429b0c": "c98c53b68da514d8f228c38b84232099",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/65c404a66101cb5d6b87b7156cff986c66b168": "9d9c0d91edb1a14960f42e45d5fa6057",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/6bede56184785ce6d1eb9162053ad26aa0f58f": "26807d326f20cf75d203afa8134180e9",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/eb8092bf51364a208002ac1f948c64a6e75a45": "b080be24f41da18c0014c472a00a176b",
".git/objects/fd/9935a4b8e04723fbda6db92ec71eb99d2b48b8": "792a3926d92c24d3371a73d2c3031cb1",
".git/objects/pack/pack-f6d88a3e1e3f04197d03f47ab77cec4c1f3ad6f7.idx": "f83b40c2395a48865c0f7591deb92eda",
".git/objects/pack/pack-f6d88a3e1e3f04197d03f47ab77cec4c1f3ad6f7.pack": "60acb1af50fc3cb77d678f63219889d3",
".git/objects/pack/pack-f6d88a3e1e3f04197d03f47ab77cec4c1f3ad6f7.rev": "1f6921abb51632856ec91dfe48d6d842",
".git/ORIG_HEAD": "7228e8b7be47fb63e6695edf8782b757",
".git/rebase-merge/author-script": "1dea41ef86cbc85dd6cb58b658867e92",
".git/rebase-merge/done": "f74e6cf5a234ed79e9b0c2012fb68c38",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "82954dd90e6018e8fae9c45f33039ae4",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "bfd64ca6809776bdfa87271e455d5bba",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "4b56257988c84adfb43cfa1700efe00f",
".git/rebase-merge/orig-head": "7228e8b7be47fb63e6695edf8782b757",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "7228e8b7be47fb63e6695edf8782b757",
".git/REBASE_HEAD": "7228e8b7be47fb63e6695edf8782b757",
".git/refs/heads/main": "7228e8b7be47fb63e6695edf8782b757",
".git/refs/heads/master": "7228e8b7be47fb63e6695edf8782b757",
".git/refs/remotes/crm/main": "4b56257988c84adfb43cfa1700efe00f",
"assets/AssetManifest.bin": "15c7eecd6fc4866e83dbdbe97a222ff4",
"assets/AssetManifest.bin.json": "d6a00ab56f6a3e499743dd1e4b811690",
"assets/AssetManifest.json": "9c8bf57e6ef9eb6607c317fc3bbd1be3",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/faab_logo.png": "672ea6039c21c254173a8a37b5114c87",
"assets/assets/images/illustration_login.png": "5cc936a1f2d507d22a724e20e8eea0de",
"assets/FontManifest.json": "188d24d5f37116cd0393d354b854f8f4",
"assets/fonts/MaterialIcons-Regular.otf": "aa21cb25174e29f465d8d090240b51ea",
"assets/NOTICES": "e0fc9a22235115c2d03656eabc2be908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "780f9c132f31ac9a19df88e1d7093982",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3a3fe8a7c62457d118c02f5f6233ec04",
"/": "3a3fe8a7c62457d118c02f5f6233ec04",
"main.dart.js": "407a7550b71d7e51fac337041c0d3a45",
"manifest.json": "db70fe1ed4c5226db2159b30cd0de7ee",
"version.json": "159d5e6fdf7dbfba8f978f3a77d83b27"};
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
