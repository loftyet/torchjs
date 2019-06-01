/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b83f7c208b88edab3c056ea3bb37a3b3"
  },
  {
    "url": "assets/css/0.styles.7d55606c.css",
    "revision": "371ab1798914b8c1e977eba58094c7a0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cfa9acbd.js",
    "revision": "844ada9a31bde31cd5d078c3958d2a60"
  },
  {
    "url": "assets/js/11.17d0f339.js",
    "revision": "06c39a5671d9a5d3dfe5862ec1263a71"
  },
  {
    "url": "assets/js/12.a4444ef1.js",
    "revision": "bfcf7f0b30195bc4c67b5d796e9e7c4e"
  },
  {
    "url": "assets/js/13.4a844a68.js",
    "revision": "d5d7797d2432b32f87b3d09c38e018f5"
  },
  {
    "url": "assets/js/2.df446c01.js",
    "revision": "f18b338cf378a76b7ef3ceb3e7c79715"
  },
  {
    "url": "assets/js/3.93362087.js",
    "revision": "86eb4658725f9404c9403ce043423288"
  },
  {
    "url": "assets/js/4.a8efc248.js",
    "revision": "729cd3a77a5c85cce8fdaac76019dcc3"
  },
  {
    "url": "assets/js/5.35c3e9bb.js",
    "revision": "2e7cd36a6a412c413b7b83533a6b9f92"
  },
  {
    "url": "assets/js/6.52e1f152.js",
    "revision": "f8a76aa4b8774d9f7b8aa589b151ab60"
  },
  {
    "url": "assets/js/7.8152e891.js",
    "revision": "662ee77f73a135ae038bba1a721ad04a"
  },
  {
    "url": "assets/js/8.15fa40db.js",
    "revision": "38c1baddad3539901793ae4ebcf029d6"
  },
  {
    "url": "assets/js/9.032fd05d.js",
    "revision": "39194281f5fb743d897866da0bdf947c"
  },
  {
    "url": "assets/js/app.db93cda6.js",
    "revision": "b3f23ec94ed527ab255410cfd481c9ce"
  },
  {
    "url": "guide/advanced.html",
    "revision": "b2dcf459d0b7f90c54e803fb2e12eb03"
  },
  {
    "url": "guide/install.html",
    "revision": "f233d5e1dfa9b0046d5b7cade9c64e18"
  },
  {
    "url": "guide/options.html",
    "revision": "4f517b44d15133dcf826270ed34f8830"
  },
  {
    "url": "guide/usage.html",
    "revision": "eb7f848fa24e9dba0e0715d5419b96ac"
  },
  {
    "url": "index.html",
    "revision": "87b2897d7c6a7f37cc0403f170b2e438"
  },
  {
    "url": "zh/guide/advanced.html",
    "revision": "2ab9fbbd0ce12f6e08d48dd09c1b3bec"
  },
  {
    "url": "zh/guide/install.html",
    "revision": "f119e8761041d6028dff2f77bb8f6cd0"
  },
  {
    "url": "zh/guide/options.html",
    "revision": "96bcb5d4cfc4fc8e336d9053aa242249"
  },
  {
    "url": "zh/guide/usage.html",
    "revision": "41bfc29194ee11830306963dcf6dd130"
  },
  {
    "url": "zh/index.html",
    "revision": "12774d6cebea5fd8d962a0eb11936443"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
