'use strict';
importScripts('https://blog.caozhiming.tk/sw-toolbox.js'); toolbox.precache(["/","exam-time","covid-self-check.html"]); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
