---
title: 陛下，臣以为可以试试PWA…
categories:
 - 网站
tags:
 - 网站
 - 科技
 - PWA
 - Web前端
date: 2021/8/11 21:23:20
permalink: /2021/08/11/setup-your-pwa/
---

2016年，Google提出了一个叫PWA的概念。

2017年，该项目正式落地。随后，各大公司与浏览器开始宣布支持PWA。~~Internet Explorer不是一款浏览器。~~

2021年，本站全站支持PWA。

<!-- more -->

PWA全称**Progressive Web App**，即**渐进式网络应用**（自己翻译的，如有冲突请以官方为准）。它能够让你的网站有一种像应用的感觉~~（并没有好吧）~~，并且……

- 可以在后台加载，*妈妈再也不用担心关闭页面就不加载了*；
- 可以离线使用，Service Worker会缓存一些文件，*妈妈再也不用担心我的网站离线不能访问了*；
- UI（图形界面）好评，*妈妈再也不用担心我的网页访问起来不好看了*；
- 无需下载和安装，*妈妈再也不用担心我的安装包到处都是了*；
- 软件初版、迭代更新不必提交到App平台审核，*妈妈再也不用担心我的应用无缘由地审核不过了*；
- 不必开发Windows、MacOS X、Linux、Android、iOS、Android、iPadOS这么一堆版本，*妈妈再也不用担心我的电脑被开发的不同版本的软件塞满了*。

好吧，那么，我们就开始整PWA吧！

首先，我认为你需要先有一个~~bug不太多的~~网站。静态的动态的都随意；自建的用框架的都可以。如果想用Hexo，我认为我可以~~强迫~~让你去看看我的[Hexo指南](https://blog.caozhiming.tk/2021/05/04/how-to-setup-hexo/)，写得超弱的。🤣

## Web Manifest
接着，我们需要配置Web Manifest。它相当于一个PWA网站的配置记录。示例如下：

```json
{
  "name": "百度一下，你可能就不知道",
  "short_name": "百度",
  "display": "standalone",
  "start_url": "/",
  "theme_color": "#8888ff",
  "background_color": "#aaaaff",
  "icons": [
    {
      "src": "logo.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

解释一下以上都是些什么东西哈。

### ```name```
网站的名称。

### ```short_name```
网站的简短名称。有时候网不好，或者什么其他原因，就用它。

### ```display```
这标志着这个PWA的显示形式。这里展示一下所有的显示形式以及其相关内容。

| 显示模式 | 描述 | 后备显示模式 |
| --- | --- | --- |
| fullscreen | 全屏显示, 所有可用的显示区域都被使用, 并且不显示状态栏。 | standalone |
| standalone | 让这个应用看起来像一个独立的应用程序，包括具有不同的窗口，在应用程序启动器中拥有自己的图标等。这个模式中，用户代理将移除用于控制导航的UI元素，但是可以包括其他UI元素，例如状态栏。 | minimal-ui |
| minimal-ui | 该应用程序将看起来像一个独立的应用程序，但会有浏览器地址栏。 样式因浏览器而异。 | browser |
| browser | 该应用程序在传统的浏览器标签或新窗口中打开，具体实现取决于浏览器和平台。 这是默认的设置。 | 呃……没有 |

### ```start_url```
这标志着你的PWA一打开会跳转到什么URL。一般就是根目录嘛。输入```/```就好了。

### ```theme_color```和```background_color```
分别是主题颜色和背景颜色，颜色转换请百度搜索“颜色代码在线转换”。

### ```icons```
src是图标的路径。如果是相对路径，那么基本路径就是这个manifest所在的路径。

sizes是大小。**请注意，经过反复尝试，我发现图标大小必须大于512x512，并且中间的乘号应输入小写字母x**。

type是图标的种类，与解码有关，常用的是image/png等等。**不一定与图标文件名后缀名相同。**

现在，把它保存成一个JSON文件，名字随便，最好类似于```manifest.json```，并上传到你网站的根目录。（特殊地，Hexo请上传到/source/目录下）接下来，在所有想要在PWA中包括的页面中的源代码的head部分，加入：

```html
<link rel="manifest" href="/manifest.json"/>
<meta name="theme-color"content="#8888ff"/> //这个应当与你在manifest.json当中的theme_color项设置内容一致
```

如果有需要（例如，有些页面不直接在根目录下），可以在href中使用绝对地址。（特殊地，Hexo请在/themes/<你安装并启用的主题>/layout/layout.ejs的head标签内嵌入上方代码，并在其第一个斜杠前加上你的网站的根URL，包括协议前缀，例如<strong>https://blog.caozhiming.tk</strong>）

## Service Worker

这时，PWA才真正开始。为了配置Service Worker，我建议你使用[sw-toolbox](https://github.com/cao-zhiming/ss-caozhimingtk/blob/main/js/sw-toolbox.js)，由于代码过长不便放在本文中。把它全部复制下来，保存为一个sw-toolbox.js文件，上传到网站根目录。（特殊地，Hexo请上传到/source/目录下）

然后，在根目录创建一个sw.js，并在里面写上以下内容。

```javascript
'use strict';
importScripts('sw-toolbox.js'); toolbox.precache(["index.html","/dir-to-cache",""]); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
```

你需要将```toolbox.precache()```当中的项名称改为你所需要提前在本地缓存的网页或文件或目录的地址。（特殊地，Hexo请务必将"index.html"改为"/"，除非你的主题或你的个人设置将主页的部署永久链接设为了"index.html"）

必须确保sw-toolbox.js以及sw.js在同一目录下且均可以正常访问。接下来，在每一个想要在PWA中显示的页面的head中添加如下代码：

```html
<script type='text/javascript'>
if ('serviceWorker' in navigator) {
 window.addEventListener('load', function() {  
   navigator.serviceWorker.register('/sw.js').then(
     function(registration) {
       // Registration was successful
       console.log('ServiceWorker registration successful with scope: ', registration.scope); },
     function(err) {
       // registration failed :(
       console.log('ServiceWorker registration failed: ', err);
     });
 });
}
</script>
```

如果有需要（例如，有些页面不直接在根目录下），可以在```navigator.serviceWorker.register()```中使用绝对地址。（特殊地，Hexo请在/themes/<你安装并启用的主题>/layout/layout.ejs的head标签内嵌入上方代码，并在其第一个斜杠前加上你的网站的根URL，包括协议前缀，例如<strong>https://blog.caozhiming.tk</strong>）

至此，基本的PWA内容已经结束。

## 杂项

不过PWA有的时候还要给一些手机用户用。这个时候，我们往往需要在head上加入这些代码：

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
<link rel="apple-touch-icon" sizes="192x192" href="apple-touch-icon.png"/>
```

第一行是把你的网页伸缩至适合的大小。当然，不止这么一行代码就完，你还得调整你的网站的div，不过如果是Hexo，主题程序猿应该已经为你做好了。

第二行是Apple iOS以及iPadOS设备将网站“保存”在主屏幕时显示的图标。请注意，这幅图片的大小必须是192x192（或者180x180），与[icons](#icons)当中的“必须大于512x512”相悖。因此必须保存两个大小不同的图片。若想编辑图片大小，建议你使用Windows自带“画图”工具或者Photoshop等修图工具，使用方法此处不再赘述。

如果```apple-touch-icon```需要使用绝对地址，同上。

经过以上~~的一番折腾~~，你使用浏览器打开自己的网站，在地址栏右侧应该就能看到它了：~~（这句话的正确性是建立 在Internet Explorer不是一款浏览器 的基础上的）~~

![PWA询问你是否安装](https://cdn.jsdelivr.net/gh/cao-zhiming/ss-caozhimingtk@1.0/img/pwa-ready.png)

以上就是有关PWA的一些内容以及相关安装方法。





