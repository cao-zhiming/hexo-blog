'use strict';
importScripts('https://blog.caozhiming.tk/sw-toolbox.js'); toolbox.precache(["index.html"]); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
