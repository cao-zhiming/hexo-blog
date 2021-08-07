// 导入 Workbox
importScripts(
    'https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.4/workbox/workbox-sw.js'
);

workbox.setConfig({
    modulePathPrefix: 'https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.4/workbox/'
});

const { core, precaching, routing, strategies, expiration, cacheableResponse, backgroundSync } = workbox;
const { CacheFirst, NetworkFirst, NetworkOnly, StaleWhileRevalidate } = strategies;
const { ExpirationPlugin } = expiration;
const { CacheableResponsePlugin } = cacheableResponse;

// 定义 Service Worker 版本

const cacheVersion = '-210213a';

// 清空其他版本缓存

self.addEventListener(
    // 当 Service Worker 被激活
    'activate',()=>{
        caches.keys().then(keys=>{
            return Promise.all(keys.map(key=>{
                // 删除不包含该版本号的所有缓存
                if(!key.includes(cacheVersion)) return caches.delete(key);
            }))
        });
    }
)

// 开始定义 Workbox

// 定义 workbox 基本信息

core.setCacheNameDetails({
    prefix: '曹智铭的网站',
    suffix: cacheVersion
});

// 清空其他版本信息

core.skipWaiting(); // 抢占 Service Worker 更新
core.clientsClaim();
precaching.cleanupOutdatedCaches(); // 清除预热的过期信息

// 开始编写缓存规则

/*
 * 缓存来自 jsdelivr 的资源
 * cdn.jsdelivr.net
 *
 * 使用 CacheFirst 模式，即缓存优先
 * 缓存时间: 30d
 */
routing.registerRoute(
    /.*cdn\.jsdelivr\.net/,
    new CacheFirst({
        fetchOptions: {
            // 启用CORS跨域
            mode: 'cors',
            credentials: 'omit'
        },
        plugins: [
            new ExpirationPlugin({
                //设置缓存时间
                maxAgeSeconds: 30 * 24 * 60 * 60,
                purgeOnQuotaError: true
            })
        ]
    })
);

/**
 * 
 *  缓存所有js css文件
 * 
 *  使用 staleWhileRevalidate 模式 （即优先使用缓存，在后台自动更新
 *  缓存名称 static-assets-cache
 * 
 */

routing.registerRoute(
    //匹配路径 可使用正则表达式
    /.*\.(css|js)/,
    new StaleWhileRevalidate(),
);

/**
 * 
 *  默认路由
 * 
 *  使用 NetworkFirst 网络优先模式，即有网络时网络优先，无网络时调用缓存
 * 
 */

routing.setDefaultHandler(
    new NetworkFirst(),
);
