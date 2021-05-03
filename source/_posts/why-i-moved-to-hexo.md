---
title: 为什么我放弃WordPress，迁到了Hexo？
categories:
 - 网站
tags:
 - 网站
 - 科技
 - Hexo
 - Web前端
date: 2021/5/2 20:46:25
permalink: /2021/05/02/why-i-moved-to-hexo/
---

我自2020年9月22日开始运营的WordPress博客，为什么刚半年多就迁站了？你会在本文中找到答案。

<!-- more -->
这个故事得从2020/9/22说起。那天，我成功地配置好了WordPress，从此开启了WordPress之旅。

## 与WordPress相伴的日子

老实说，使用WordPress后的4个多月，我一直在添加功能。```论坛、动态、点赞、暗黑模式、SEO……```这些东西，无一例外。但是，文章没写多少。而且，根据后来加入的统计，这些功能也没多少人用。唉……

就在这期间，引起我使用WordPress的Micraow（他之前的[Micraow.cf](http://micraow.cf)是**WordPress**做的）把他的网站迁移到了[Hexo](https://msblog.ml)。在他的[Hexo博客](https://msblog.ml/)中，他是这么说的：

> 这是我用过一会的感受：
> 太慢！！（我**好同意**啊！！！）
> 有点 千篇一律（我有点不同意啊，白宫、清华国际学校、Microsoft News都是拿WordPress做的，没看出来千篇一律……）
> 老是出问题！（不得不说，真的是。）
> 总之，在重装3次后，我放弃Wordpress 了。

于是我也想整个Hexo，到Vercel部署了半天，用的是**vercel.app的子域名**，也就是Vercel的默认域名。但是没搞好。我想，算了，专一也好。

于是我继续拼命加一堆奇奇怪怪的功能，直到……

## 灾难！！

好吧，我可以承认这个小标题起得过分了。但是如果你是一个网站的运维人员，这种事情算是个灾难。

所以，到底啥灾难啊？不用我回答，这个图已经明摆着了：

![网站Status记录的截图](https://ss.caozhiming.tk//img/status-show.png)

曾经24小时无法访问！！！
刚好了一天，第二天又7小时无法访问！！！

然后我去翻了翻Micraow的Hexo博客的状态~~，差点馋哭了~~。

![Micraow网站的状态截图](https://ss.caozhiming.tk/img//micraow-status.png)

100%在线！而且，它的访问速度超快，而我的网站的速度又是另一个故事了……

## 重拾旧念

好吧，那件灾难只是让我**不再超级喜爱**WordPress了，但这件事让我彻底用上了Hexo。

这天，折腾GitHub。0202年还在用GitHub的人，都知道GitHub新建一个和自己用户名一样的仓库，里面的```README.md```会**自动部署到你的用户概述上**。于是我也像其他用户一样，想尽了办法把这个东西发挥到极致。突然，我发现了[这个](https://github-readme-stats.vercel.app)。

它看起来真的超级美观，而且易用，还实时同步！比如这个：

![我的GitHub统计](https://czm-github-stats.vercel.app/api?username=cao-zhiming)

（注：上方的这个图片源为我自己为源程序部署的CDN，以便减轻源程序服务器负担，而不是直接源于源程序）

但是，当我打开使用文档，想要看看到底怎么用时，发现它给出的是这样的：

```markdown
![Cao Zhiming's GitHub Stats](https://github-readme-stats.vercel.app/api?username=cao-zhiming)
```

确实很易用。

诶诶诶？.vercel.app？好熟悉？？哦，我想起来了。我曾经的Hexo就在那里！唉，不过它现在仍是一片空白。

于是，我不过那个Hexo，着手把这个实时显示GitHub统计的程序部署到了Vercel。然后~~莫名其妙地~~我点进了那个之前的Hexo，巨大的驱使——**速度、可正常访问时间**，抓住了我，我不禁重新部署了我的Hexo站。这熟悉的“Hello, World”界面啊……Hexo，你对世界表达了你的问候“世界，你好”，我也要向你回应：**Hexo，你好！**

## 折腾Hexo

Hexo和WordPress虽本质上不同，一个PHP，一个静态，但是都有大量插件和主题。于是，5月1日~2日我全耗费在了弄主题上。

不要以为我在选主题。

Hexo的文件都是存储在一个GitHub仓库里，而部署由Vercel承担。第一次，我看上了主题casper，于是，把它的源码下载下来，一个文件夹一个文件夹地，上传到GitHub网页版（因为GitHub网页版不支持上传文件夹）。但是，我好像被骗了。

这玩意真的比原来的主题好看了多少？？“归档”链接原来默认主题有，你给删了是几个意思？

好吧。那就试试nexmoe。

白屏。整个网页都是空的。

好吧，Micraow用的pure主题，我也用用肯定不会错。

白屏。整个网页仍然是空的。

%*&^\@%$！好吧，让尊敬的百度告诉我为什么吧。

**百度**：我也不知道。

好吧，有什么解决方法吗？

**百度**：把Hexo部署到本地。然后在创建hexo server时终端就会把出的错给你报出来。

好吧。难不倒我。

```git
git clone git@github.com:cao-zhiming/hexo-blog
cd hexo-blog
hexo init
hexo generate
hexo server
```

它告诉我，是有个插件```wordcount```没安装。好吧，那么就安装上。

```npm
npm i --save hexo-wordcount
```

```git
hexo server
```

还报错！说有个YAML文件语法有问题。好吧，我去改。改了半天，还是提示有问题。一怒之下，把整个项给删了。然后就不报错了。

```git
hexo server
INFO  Validating config
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

终于好了。再不好我真的得把电脑砸了。好吧，现在来到了最后一步——我该怎么把它扔到网上去？（现在还是本地部署）

用之前的一个文件夹一个文件夹的方法肯定不行，因为pure主题文件夹数量有点多……于是，Git再次上场。

```git
git commit "Setup theme pure"
git push origin
```

完美！现在到GitHub上存储起来了。我只要去Vercel上把它部署一下即可！在这之前，我先看看部署前什么样，方便作对照嘛。于是，我访问了我的Hexo站。

这这这这这是怎么回事？？？
主题怎么自己就跑上去了？？？我还没部署呀！

等自己从恍惚中反应过来，脑子能用后才明白，它给自动部署了。

不错。既然这样，以后就用Hexo了。

## WordPress，后会有期！

尊敬的WordPress团队及其母公司Automattic，以及正在阅读本文的你：

你们好。

我弃用了WordPress，不是因为它不够好。Gutenburg编辑器、自动embed、BuddyPress，这些都是WordPress出类拔萃的功能。但是，我的经济能力和个人精力有限，无法正常地周转运行一个WordPress站点。我的需求似乎也从功能转到了速度。因而，我迁到了Hexo。

有时，我还会习惯性地在浏览器地址栏输入```https://caozhiming.tk/wp-admin/```（WordPress管理员的登录地址），在按下回车键的那一刹那似乎幡然明白了什么，又怅然若失地，逐字符地把这个地址用Backspace键删去，换成登录GitHub的```https://github.com/login```。WordPress陪伴了我半年多，尤其是WordPress.com，它陪我度过了一个难忘的疫情，我甚至还用它做了一个班级作业发布网站，提醒小学同学们，这个网站至今仍可访问。即使我以后不再用到WordPress，用WordPress、改WordPress代码、发现他人网站用的是WordPress，这些与WordPress相关的记忆，仍将永远刻入我的那些美好记忆中。WordPress，我向你起誓，不管是多少年后，只要我有了足够的条件，我必定再次回归你的怀抱。是你，点燃了我做网站的希望与初衷，给了我力量。

诚挚的，

曹智铭。
