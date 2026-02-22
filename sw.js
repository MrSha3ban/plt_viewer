const CACHE_NAME = 'markercad-v1';

// We just need it to install and stay active
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Essential for PWA offline support
  event.respondWith(fetch(event.request));
});
