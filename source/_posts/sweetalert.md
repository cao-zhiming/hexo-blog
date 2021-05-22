---
title: 谁不想让自己的网站装载上Sweetalert呢？
categories:
 - 网站
tags:
 - 网站
 - 科技
 - Web前端
date: 2021/5/22 20:23:20
permalink: /2021/05/22/sweetalert/
---

说真的，谁不厌倦JavaScript自带的默认弹窗？谁不想让自己的网站装载上Sweetalert呢？
<!-- more -->

<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/cao-zhiming/ss-caozhimingtk/js/sweetalert.js"></script>

## 对于默认弹窗的厌烦

~~在互联网上混迹多年的~~你，可能会看到一些这样的弹窗：

<img src="https://ss.caozhiming.tk//img//js-alert.png"></p>

那个啥，这个效果是我用**本地JavaScript代码**搞出来的，可不是人家白宫官网自带的。~~我的网站还没有著名到让美国政府都知晓的程度。~~

不知道是不是写了太多这种弹窗，总感觉……好难看啊！！

<li>标题为“XXX网站显示”</li><li>没有标题上方图标</li><li>这个弹窗虽小，但是一旦弹出，只能按那个按钮才能继续，其它地方都点不了</li><li>功能太少了</li><br>

总之，我**极其讨厌默认的这个弹窗**！！！

## 开始Sweetalert

> 批判不仅要对事物提出自己的看法，有敢于提出自己的观点的勇气，也要有一定的建设性，而不能一味地否定。
> 整理自《义务教育教科书 道法 七年级下册（2016）》

好吧好吧，我不能只是批判默认弹窗，还得提出更好的，对吧？就如标题中所说，本次的主角是——Sweetalert。

<button onclick="swal('我是Sweetalert','没错，就是我','success');">点我，让Sweetalert出场</button>

那个东西就是Sweetalert~~（这不是废话吗）~~。针对那个功能，代码如下：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/cao-zhiming/ss-caozhimingtk/js/sweetalert.js"></script> //先安装Sweetalert到该页面

<script type="text/javascript">
swal("我是Sweetalert","没错，就是我","success");
</script> //主程序
```
<p class="note note-warning">值得注意的是，<strong>这两行代码的顺序不可互换</strong>。因为要先安装才能使用。</p>

当然，如果你喜欢用npm，也可以```npm install sweetalert --save```然后```import swal from 'sweetalert';```。如果这句话你没看懂，直接跳过并使用前一种方式就可以了。

## Sweetalert进阶

<button onclick="swal('Sweetalert生气了！','气死我了！难道你认为我就这么一个功能？','error');">点我，让Sweetalert气死</button>

首先，这个图标，有多个预设："warning", "error", "success" 和"info"。

```html
<script type="text/javascript">
swal("比较欣慰的Sweetalert","这还差不多。","info");
</script>
```
<button onclick="swal('比较欣慰的Sweetalert','这还差不多。','info');">预览上方代码</button>

你以为就这？别急，这才刚刚开始。先把按钮调整一下。

```html
<script type="text/javascript">
swal("很高兴认识你！", {
  button: "你好"
});
</script>
```

<script type="text/javascript">
function typeHello() {
    swal("很高兴认识你！", {
  button: "你好"
});
}
</script>

<button onclick='javascript:typeHello()'>预览上方代码</button>

好吧，基本的大致就这些。有关更多，请参见其[官方文档](https://www.sweetalert.cn/guides.html)。

## 一些超炫的东西

来几个炫酷的，基于Sweetalert的效果，来结束本文吧！

首先，去Apple iTunes搜电影：

```html
<script type="text/javascript">swal({
  text: '搜索电影名称：',
  content: "input",
  button: {
    text: "搜索",
    closeModal: false,
  },
})
.then(name => {
  if (!name) throw null;
 
  return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
})
.then(results => {
  return results.json();
})
.then(json => {
  const movie = json.results[0];
 
  if (!movie) {
    return swal("在iTunes上找不到相关电影！");
  }
 
  const name = movie.trackName;
  const imageURL = movie.artworkUrl100;
 
  swal({
    title: "首选搜索结果：",
    text: name,
    icon: imageURL,
  });
})
.catch(err => {
  if (err) {
    swal("哎呀！", "向iTunes发送的请求失败了！", "error");
  } else {
    swal.stopLoading();
    swal.close();
  }
});</script>
```

<script type="text/javascript">
function searchMov() {
    swal({
  text: '搜索电影名称：',
  content: "input",
  button: {
    text: "搜索",
    closeModal: false,
  },
})
.then(name => {
  if (!name) throw null;
 
  return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
})
.then(results => {
  return results.json();
})
.then(json => {
  const movie = json.results[0];
 
  if (!movie) {
    return swal("在iTunes上找不到相关电影！");
  }
 
  const name = movie.trackName;
  const imageURL = movie.artworkUrl100;
 
  swal({
    title: "首选搜索结果：",
    text: name,
    icon: imageURL,
  });
})
.catch(err => {
  if (err) {
    swal("哎呀！", "向iTunes发送的请求失败了！", "error");
  } else {
    swal.stopLoading();
    swal.close();
  }
});
}
</script>

<button onclick="javascript:searchMov()">预览上方代码</button>

```html
swal("说点什么吧？", {
  content: "input",
})
.then((value) => {
  swal(`你输入了：${value}`);
});
```
<script type="text/javascript">
function outInput() {
    swal("说点什么吧？", {
  content: "input",
})
.then((value) => {
  swal(`你输入了：${value}`);
});
}
</script>

<button onclick="javascript:outInput()">预览上方代码</button>

好吧，天知道我这篇文章写了多长时间，天知道这篇文章又会加载多长时间：这么多代码……好吧，本文就此了结吧。
