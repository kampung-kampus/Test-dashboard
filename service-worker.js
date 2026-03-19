const CACHE_NAME = "farm-cache-v1";

const urlsToCache = [
  "/office-farm/",
  "/office-farm/index.html",
  "/office-farm/dashboard.html",
  "/office-farm/data/farm.json"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
