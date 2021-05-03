---
title: 折腾Hexo的livere评论
categories:
 - 网站
tags:
 - 网站
 - 科技
 - Hexo
 - Web前端
 - livere
date: 2021/5/3 22:21:25
permalink: /2021/05/03/setup-comments/
---

好吧，我承认，我还在像用WordPress时那样，给网站加功能。

但是我只是想加个评论功能啊，这不过分吧？？

<!-- more -->

于是，我翻开了我使用的网站主题的```_config.yml```，看了看我的主题默认支持哪些评论。

<details><summary>我的主题支持的评论系统列表</summary>
<li>Gitalk</li><li>Gitment</li><li>Valine</li><li>Disqus</li><li>livere</li></details>

好嘛，那就一个一个试。

## Gitalk/Gitment

我去百度搜了搜这两个东西怎么用，却给我自动弹出：不要用这种评论系统，因为它们申请的GitHub App权限太多，容易把你的账户给搞毁了。

这难不倒我。我又去注册了一个GitHub账号。

可是，即使我如此努力，它们仍不争气。不是初始化失败就是原作者的服务器不维护了。再一想，我并不是所有用户都有GitHub账号，而它们都要求GitHub登录，好吧，算了。

## Valine

我很看好它！[Micraow Blog](https://msblog.ml/)就用的它，还支持一堆表情，而且无需登录，只要输入昵称、邮箱和网站。于是，我去看看怎么用它。

说是要到[leancloud](http://leancloud.cn)上注册一个账号。但是，当我去注册时，发现它需要手机号、实名认证才能申请建立应用，从而才能初始化我的Valine。

……

这个世界对我这种手机SIM卡放进电话手表，接不到短信验证码的青少年这么残酷的吗？

好吧，我放弃你了，Valine。

## Disqus

这个可不是那个曾风靡一时的论坛软件```Discuz!```，而是一个评论系统。于是，我到它的官网上去，

加载中……加载中……加载中……加载失败。好吧，那就算了，Disqus。

## livere

我当时的问题和你现在的问题一样：**livere是个啥**？于是，我去[livere.com](http://livere.com)看了看，尝试注册个账号，没想到……

![livere账号注册页面](https://ss.caozhiming.tk//img//livere.png)

全是韩文啊啊啊！好吧，这个时候，浏览器的翻译功能就派上了用场。我成功注册了一个livere账号，然后把我的uid粘贴到```_config.yml```，大功告成！！

## BUG更新

Pure主题下，livere可用；但是fluid主题下，livere不显示出全部评论内容。已提交[issue](https://github.com/fluid-dev/hexo-theme-fluid/issues/471)。

