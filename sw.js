/* Offline shell for Scooby.
   The page itself is fetched network-first so a fresh deploy shows up on the
   very next open; icons and the manifest are cache-first because they rarely
   change. The log lives in localStorage and never leaves the device. */
const CACHE = "scooby-v2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./icon-180.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// A page load, or the HTML behind it.
function isPage(req) {
  return req.mode === "navigate" ||
         (req.destination === "document") ||
         /\/(index\.html)?$/.test(new URL(req.url).pathname);
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;

  if (isPage(req)) {
    // Network first: always show the newest deploy when there's signal,
    // fall back to the stored copy when there isn't.
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put("./index.html", copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match("./index.html")))
    );
    return;
  }

  // Everything else: serve from cache, refresh in the background.
  e.respondWith(
    caches.match(req).then((hit) => {
      const live = fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || live;
    })
  );
});
