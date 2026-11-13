// Minimal service worker: it lets Android Chrome offer "Install app".
// It caches nothing, so uploading a new index.html to GitHub always shows the new version.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  // Leave Google Forms / Sheets and other websites alone; only pass our own files through.
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request));
});
