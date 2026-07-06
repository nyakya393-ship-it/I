const CACHE_NAME = "inklog-v1";

const FILES = [

    "./",

    "./index.html",

    "./css/style.css",

    "./css/components.css",

    "./css/pages.css",

    "./css/animation.css",

    "./css/dark.css",

    "./css/responsive.css",

    "./js/app.js",

    "./js/router.js",

    "./js/storage.js",

    "./js/utils.js",

    "./js/ui.js"

];

self.addEventListener("install",event=>{

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache=>cache.addAll(FILES))

    );

});

self.addEventListener("fetch",event=>{

    event.respondWith(

        caches.match(event.request)

        .then(response=>{

            return response || fetch(event.request);

        })

    );

});
