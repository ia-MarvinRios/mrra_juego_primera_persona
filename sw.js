const Cache_Name = "videojuego-primera-persona-MRRA";

// Se registran los archivos indicados en la caché del navegador
self.addEventListener('install',event=>{
    event.waitUntil((async()=>{
        const cache = await caches.open(Cache_Name);
        await cache.add([
            './',
            './index.html',
            './js/script.js',
            './css/style.css'
        ]);
    }));
});

// Se consultan los archivos cacheados cuando es necesario (el navegador decide esto)
self.addEventListener('fetch',(event)=>{
    event.respondWith((new Promise((resolve,reject)=>{
        fetch(event.request).then(resolve).catch(reject);
    })).catch(() => {}));
});