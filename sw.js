const CACHE_NAME = 'gudang-sparepart-v2'

const STATIC_ASSETS = [
  '/index.html',
  '/pengambilan.html',
  '/dashboard.html',
  '/js/config.js',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
]

// Install: cache static assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS)
    })
  )
  self.skipWaiting()
})

// Activate: hapus cache lama
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME })
            .map(function(key) { return caches.delete(key) })
      )
    })
  )
  self.clients.claim()
})

// Fetch: network first, fallback ke cache
self.addEventListener('fetch', function(event) {
  // Skip non-GET dan Supabase API requests (selalu online)
  if (event.request.method !== 'GET') return
  if (event.request.url.indexOf('supabase.co') !== -1) return

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // Cache response yang fresh
        if (response && response.status === 200) {
          var clone = response.clone()
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone)
          })
        }
        return response
      })
      .catch(function() {
        // Offline: ambil dari cache
        return caches.match(event.request).then(function(cached) {
          return cached || new Response('Tidak ada koneksi internet.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          })
        })
      })
  )
})
