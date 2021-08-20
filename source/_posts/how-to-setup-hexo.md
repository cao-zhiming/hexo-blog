---
title: 如何建立Hexo网站
categories:
 - 网站
tags:
 - 网站
 - 科技
 - Hexo
 - Web前端
date: 2021/5/4 13:23:20
permalink: /2021/05/04/how-to-setup-hexo/
---

我想写写怎么建个Hexo站。

好吧好吧，我知道网上教程一抓一大把，可是我再写一个，有什么错吗？

（其实我主要是想享受一下Hexo的代码编辑高亮，WordPress的高亮令人作呕）

<!-- more -->

好吧，正文开始。
注：本文使用Windows 10作为演示系统，其他系统或版本操作相仿。

## 在本地开始

先新建一个文件夹，爱建哪儿就~~别~~建哪儿。

OK了？现在，我建议你去[下载Git](http://git-scm.com/downloads)。因为用它部署Hexo超级方便。

注意！在安装时，一定要把```在文件夹中Git Bash here```的选项打开，否则会有些难搞。如果实在忘了，那么请看[忘记设置GBH](#忘记设置GBH)。

接下来，打开你的那个文件夹。右键空白，点击```Git Bash here```。然后，在新打开的黑色指令行中，先初始化Git。

```
git init
```

注意：<strong>Git Bash似乎不能直接</strong>```Ctrl+V```<strong>粘贴内容，你可以试试右键Git Bash窗口。</strong>

然后，安装Hexo并初始化它。

等等！由于Hexo需要用npm安装，然而因为某些奇奇怪怪的国内上网问题，npm超级慢。我们需要先配置个镜像。淘宝的镜像近来好像在维护，无法使用，那就用cnpm吧：

```
npm config set registry http://r.cnpmjs.org/
```

接下来再安装并初始化Hexo，就快多了：

```
npm install -g hexo-cli
hexo init
```
<p class="note note-warning">
如果文件夹不是空的，第二个指令输入后会报错。</p>

这两个指令分别输入成功后，分别返回：

```
+ hexo-cli@X.X.X  //这X.X.X是版本号
updated 1 package in XXXs  //这XXX是安装所耗费的秒数
```

```
INFO  Cloning hexo-starter https://github.com/hexojs/hexo-starter.git
[32mINFO [39m Install dependencies
added 190 packages from 160 contributors in 45.131s

15 packages are looking for funding
  run `npm fund` for details

INFO  Start blogging with Hexo!
```
接下来，你需要生成一些必需的文件。啊不，我是说，**它**需要生成一些。运行这个：

```hexo
hexo generate
```

懒得打这么多字？试试和它等同的短版本指令：

```hexo
hexo g
```

好啦，接下来输入这个：

```hexo
hexo server
```

好吧，如果你坚持你超懒，你可以用：

```hexo
hexo s
```

它应该显示：

```
INFO  Validating config
INFO  Start processing
INFO  Hexo is running at http://localhost:4000. Press Ctrl+C to stop.
```

于是，你应当打开一个浏览器~~（众所周知，IE不属于浏览器）~~，前往```localhost:4000```，并惊喜地发现：

![Hexo已成功部署在本地](https://ss.caozm.tk//img//hexo-demo.png)

好啦，至此，准备工作已就绪。接下来，有请重磅嘉宾——**Vercel**。

## 部署到网络

首先，先通过GitHub[登录](https://vercel.com/login)你的[Vercel](https://vercel.com/)账号。

在Dashboard点击```New Project```按钮，在右侧的```Clone Template```的下方，点按“Browse All Templates →”链接，在[新的页面](https://vercel.com/new/templates)中，向下翻，选择```Hexo```。它询问你将它部署在哪里（Select Vercel Scope），选择你的个人账号即可，在你的账号后面的```Select```按钮上点击。接着，它要求你初始化一个Git仓库，（Create Git Repository）选择GitHub，在REPOSITORY NAME项目中输入你希望的GitHub仓库名称，你可以勾选下方来将它变成私有的（他人无法看到的）仓库。最后，点击```Deploy```（部署）！

接下来，你将会在部署好的```vercel.app```子域名上的网站中看到Hexo那熟悉的界面。接下来，你可以Start blogging ~~and bugging~~ with Hexo了。

## 开始Hexo之旅

因为某些……国内上网问题，GitHub有时无法正常访问，所以我们最好还是通过在本地，Git推送到云端来写博客为妙。（我现在就是这样）

```git
git clone git@github.com:USERNAME/REPOSITROY.git
```

其中，```USERNAME```替换为你的GitHub用户名，```REPOSITORY```替换为你托管着Hexo的GitHub仓库。

<p class="note note-warning">
注：在执行本操作前，你可能需要先配置Git。有关如何进行配置，我建议你百度搜索“如何SSH配置Git”。</p>

接下来，肆意修改你的Hexo吧！要是想预览，可以```hexo s```。若是想直接部署到云端，请执行如下指令：

```git
git commit "说说你都修改了什么"
git push origin
```

好啦！静待若干秒（推送、部署需要时间），你的Hexo网站就会以你修改的样子~~和bug~~出现在你眼前！

## 忘记设置GBH

好吧，这个问题很简单就可以解决。想要实现和Git Bash here（这里简写为GBH）一样的效果，首先通过任何途径打开Git Bash（例如，从Windows左下角“开始”菜单找到它并双击打开），然后输入：

```git
cd DIR
```

其中```DIR```应当是你所想要在本地部署Hexo的文件夹的**绝对路径**。例如：```E:\blog\hexo\```。请尽量避免整个路径中出现任何空格、中文字符或某些特殊符号，因为它们可能导致未知的错误。
