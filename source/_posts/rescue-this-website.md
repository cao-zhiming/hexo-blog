---
title: 1个月，抢救一个网站
categories:
 - 网站
tags:
 - 网站
 - 科技
 - Freenom
 - 域名
 - 迁站
date: 2021/8/21 21:23:20
permalink: /2021/08/21/rescue-this-website/
---

本网站的一岁生日即将到来。

然而，由于种种原因，它险些在1岁时撒手人寰。

幸好，经过奋力抢救，我们挽回了它的性命。

故事，要从一个月黑风高的夜晚说起……

<!-- more -->

## 病危通知书

那天，我正在备考期末考试，突然收到一封语音邮件，来自Micraow：

> 小曹，我们放暑假了，就有点闲的时间了。 我之前那个Micraow.tk的域名你给我续期了吗？我感觉好像快要到期了呀。

于是，我上到Freenom，准备登录我的Google账号以从第三方登录我的Freenom，而这时……Google阻止了我的登录。它认为我是黑客，并要求我验证身份。问题是：我哪还有我之前留的手机号啊？但是，不登录Google就没法登录我的Freenom账号，因为我没有设置其它登录方式……

这，也就是说，我无法访问我的Freenom账号了，自然，也无法管理我的任何域名。虽然我还能在Cloudflare上管理其DNS、SSL等功能与配置，但是域名续期等操作**一律无法执行**。这就等于，给我的网站下了一篇病危通知书。

**此时，距离本网站的域名到期还有2个月。**

我连忙发[邮件](https://email-archives.caozm.tk/freenom-help-me.html)给Freenom支持，但至今杳无音信。
（注：在多数外国网站，我化名Tom Weasel；我在这封邮件中假装我的Google账号被我手贱删除了，是因为我觉得这样可以免去一些不必要的麻烦）

我即刻通知了我的一些好友们，包括Micraow和代码一姐。Micraow给了回复。

> 你好，我已经注意到这个问题。很抱歉，我用的是邮箱注册的freenom账号，而非谷歌账号，因此没有遇到这个问题，不熟悉情况，也许你可以试试用邮箱。

## Google

但是，我的账号已经无法访问，无法设置邮箱登录方式。迫不得已，我翻遍了Google所有与登录失败有关的帮助文档，但最终无效。

**此时，距离本网站的域名到期还有1个半月。**

我只好又向Google发送了[邮件](https://email-archives.caozm.tk/google-help-me.html)，但是它们也不曾回复。时间正在一分一秒地逝去、逝去……

## 你是怎么做到的？

那么，只好重新开始。

我一开始想，可以等那个域名自然地到期了，我再重新用新的账号购买它。Google账号都准备好了。但问题是，你怎么能确定Google明年不会像现在一样~~抽风~~呢？

我想起Micraow说的，他用的邮件。但是，我找了半天也没找到邮件入口。

有趣的是，我发现我的新Google账号可以正常登录Gmail之类，但是无法登录Freenom，它提示"Your social login could not be determined"；即使在访客身份下选择域名，刚刚还是可以选择的域名，点完“选择”按钮一下子就变成了“不可用”。

我只好向Micraow求助。那天晚上发完邮件已经很晚了。

**此时，距离本网站的域名到期还有1个月10天左右。**

## 曙光

第二天，我又打电话给了Freenom。值得庆幸的是，它们接了电话，我终于联系上他们了。

<audio src="https://cdn.jsdelivr.net/gh/cao-zhiming/ss-caozhimingtk@0.9.5/audio/Freenom.m4a" controls="controls">
你的浏览器不支持音频播放。
</audio>

打完电话，我打开了邮箱，发现Micraow已经给了我答复。他说最好使用**无痕模式**，**关掉拦截广告和Cookies的程序**。于是，我照办了。

虽不曾有转好，但是，我不断尝试。（如果那次尝试还没成功，我可能会被指控试图DDoS攻击Freenom的网站🤣）终于，我通过邮箱注册了```caozm.tk```。

既然注册了新域名，那么也没必要等到caozhiming.tk失效再重新注册该域名了！反正之前的caozhiming.tk太长，很容易打成“caozhiminh.tk”。于是，我将网站全部迁移到了caozm.tk。

本站从此做了器官移植手术，得以死里逃生。

**此时，距离本网站的域名到期仅剩1个月。**

## 鸣谢

感谢[Micraow](https://msblog.ml)，是他让我提前发现了本站潜伏的病情，如果没有他，我很难发现此事，等到域名到期时便会焦头烂额；

感谢[Freenom](https://www.freenom.com/zh/index.html?lang=zh)，它大部分时候都提供着质量良好的免费域名，没有它，本网站不可能存在；

感谢[Cloudflare](https://www.cloudflare.com)，是它，让本网站病危时还能配置良好，也是它，即使经历了RDDoS，仅在1小时多就恢复了原样，也在[DNSPerf](https://dnsperf.com)上被评为最佳DNS服务商；

要感谢的还有很多，这里限于篇幅，仅略列出：[李天星](https://ltx1102.com)、[GitHub](https://github.com)、[jsDelivr CDN](https://cdn.jsdelivr.net)、[Vercel](https://vercel.com)、[Cloudflare Pages](https://pages.cloudflare.com)、[Netlify](https://netlify.com)、[Hexo](https://hexo.io)、[WordPress](https://cn.wordpress.org)。

以上均深表感谢，没有你们任何一部分的力量，本站都无法完成；感谢程度与顺序无关，与“详细阐明”或“略列出”无关。
