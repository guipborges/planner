// Caminho do seu repositório; inclua a barra inicial
const GHPATH = '/planner';
const APP_PREFIX = 'plannerPWA_';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/manifest.webmanifest`,
  `${GHPATH}/css/styles.css`,
  `${GHPATH}/js/app.js`,
  `${GHPATH}/img/icon-512.png`,
  // adicione outros arquivos que devem ser cacheados
];

// Instala o service worker e adiciona arquivos ao cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS);
    })
  );
});

// Ativa o service worker e remove caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key.indexOf(APP_PREFIX) !== 0) {
          return caches.delete(key);
        }
      }));
    })
  );
});

// Intercepta requisições e responde com cache ou rede
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
