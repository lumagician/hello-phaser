var cacheName = 'phaser-v1';
var filesToCache = [
    '/',
    '/index.html',
    '/img/logo.png',
    '/img/icon-192.png',
    '/img/icon-256.png',
    '/img/icon-512.png',
    '/js/game.js',
    '/css/style.css',
    'https://cdn.jsdelivr.net/gh/photonstorm/phaser@3.10.1/dist/phaser.min.js'
];
self.addEventListener('install', function(event) {
    console.log('sw install');
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('sw caching files');
            return cache.addAll(filesToCache);
        }).catch(function(err) {
            console.log(err);
        })
    );
});