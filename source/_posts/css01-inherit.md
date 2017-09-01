---
title: 重识css之---css继承
date: 2017-08-06 11:21:26
tags:
  - css
categories:
  - 前端
---

# css 三大特性之一继承
```css```继承性是指所有的```css```中定义的可继承性的属性，会被运用到后代元素中去

## 如何使用
最直观的用法就是要知道哪些属性是拥有可继承性的，这样就能合理的使用```css```继承性，在```css```中以```text-```、```font-```、```line-```开头的属性都是可以继承的<!-- more -->

{% codeblock lang:html 子集继承父级示例 http://study.liuyav.com/css/example01-inhert.html 点击查看效果 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body style="color: red">
  <div>
    <p>继承body的字体颜色</p>
    <span>继承body的字体颜色</span>
  </div>
</body>
{% endcodeblock %}

## 继承中的特殊性
1. ```<a>```标签的不能继承字体颜色
2. ```<h>```标签不能继承字体大小

## 处理特殊性
在css中，所有的css属性，都是一个值叫```inherit```，他可以使一些没有继承性的元素，强制继承父级的样式，例如```<a>```标签。

{% codeblock lang:html inherit属性强制继承 http://study.liuyav.com/css/example01-inhert2.html 点击查看效果 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div style="color: blue">
    <p>p标签可以继承父级颜色</p>
    <a href="###" style="color: inherit;">使用inherit让a强制继承父级颜色</a>
  </div>
</body>
</html>
{% endcodeblock %}

对于```<h>```标签字体大小不能继承来自于浏览器的缺省样式。浏览器中默认的字体大小为```12px```，2级标题的大小非```12px```，而是缺省的```1.5em```，标题字体原本就是比正文大一些，所有这样也是合理的。

## 正确的打开方式
1. 在非常之顶级的元素上定义一些基础样式，这样他的子孙元素可以直接使用。
2. 在一些共性的申明放在父类，不同子类拥有同样样式。
3. 抽象出页面中共用的属性，放在一个类中。
4. 继承使用相对值。这样如果父级有变动的时候，不会同时更改子节点的一些样式







  


