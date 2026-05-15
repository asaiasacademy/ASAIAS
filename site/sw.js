const CACHE_NAME = "asaias-academy-v7";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.webmanifest",
  "./assets/logo-symbol.svg",
  "./assets/logo-asaias.svg",
  "./assets/app-icon.svg",
  "./assets/hero-academy-command-center.png",
  "./assets/merch-academy-mockup.png",
  "./assets/academic-atlas.svg",
  "./assets/governance-map.svg",
  "./assets/risk-map.svg",
  "./assets/presentation-previews/01-Факультет-стратегического-управления-ИИ.png",
  "./assets/presentation-previews/02-Факультет-автономных-систем-и-агентных-архитектур.png",
  "./assets/presentation-previews/03-Факультет-доверия-безопасности-и-верификации.png",
  "./assets/presentation-previews/04-Факультет-образовательных-технологий-и-просвещения.png",
  "./assets/presentation-previews/05-Факультет-методологии-сценариев-и-институционального-проектирования.png",
  "./assets/presentation-previews/06-Факультет-AI-governance-и-общественных-последствий.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"))
    )
  );
});
