const staticDevCoffee = "dev-coffee-site-v1";
const assets = ["/", "/index.html"];

// service-worker.js
self.addEventListener("install", function () {
  console.log("Install!");
});
self.addEventListener("activate", (event) => {
  console.log("Activate!");
});
self.addEventListener("fetch", function (event) {
  console.log("Fetch!", event.request);
});

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      // console.log("Returning cached file for: ", res.request);
      return res || fetch(fetchEvent.request);
    })
  );
});
