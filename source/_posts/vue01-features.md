---
title: vue特性介绍
date: 2017-09-03 16:31:19
tags:
  - javascript
  - vue
categories:
  - 前端
---

# 前言
在使用新的框架一定要了解，它的出现解决了什么问题。前端有很多框架与库，不能说哪个比哪个好，只能说，当前面对一个问题，用某个框架解决效率更高，性能更高。面对一个实际的项目，要选择一个适合它的技术栈才是最好的解决方案。

好了，下面我们来一起学习下```vue```有什么特性。

## vue特性
* 渐进式框架
* 响应的数据绑定
* 组合的视图组件
* 虚拟```DOM```。
* ```MVVM```模式。<!-- more -->

### 渐进式框架
```vue```是构建用户界面的渐进式框架，只关注视图层。

看到这个描述，是不是有点懵了，渐进式？ emm...

hh，慢慢来，所谓的渐进式，是指你用到哪块功能来引哪一块，比如，你只需要用```vue```的模板，你只需要引它的核心库，当你用到它的路由做```spa```应用，在引它的route，而不是把所有东西强加给你。这大概就是渐进式的意思。

### 响应的数据绑定
响应的数据绑定，也就是当数据发生改变时候，会自动更新视图

下面是vue一个例子，两秒后修改数据值，视图更新
{% codeblock lang:html vue响应的数据绑定 http://study.liuyav.com/js/vue/html/vue01-feature.html 点击预览 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../vue.js"></script>
</head>
<body>
  <div id="box">{{ decr }}</div>
  <script>
    // 数据
    let obj = {
      decr: "hello world"
    }

    // vue 实例
    new Vue({
      el: "#box",
      data: obj
    })

    // 两秒后改变数据
    setTimeout(function() {
      obj.decr = "hello vue";
    }, 2000)
  </script>
</body>
</html>
{% endcodeblock %}

<p style="color: red">Vue内部利用 object.defineProperty() 中的 setter 和 getter 来代理数据，监测数据的操作，比脏值检查性能更好。</p>

### 组合的视图组件
  * ui 页面映射为组件树
  * 划分组件可维护，可重用，可测试
  <img src="/uploads/vue/1.png" class="full-image" />

### 虚拟DOM
在js中，操作DOM时候会更新整个DOM树，这使得操作DOM会变得很慢，而虚拟DOM只是在渲染数据改变的部分，在vue中生成一个DOM大致如下过程
  1. 模板阶段
  2. ```complie```阶段：调用 ```createElement()``` 渲染函数，创建节点
  3. ```render```阶段：生成虚拟DOM树，也就是对象
  4. ```create```阶段：通过编译器，编译成真实的DOM

### MVVM模式
M model 数据模型
V view 视图模板
VM view-model 视图模型

利用 MVVM 模式我们可以完成一个经典的小例子：
{% codeblock lang:html MVVM双向数据绑定 http://study.liuyav.com/js/vue/html/vue01-feature2.html 点击预览 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../vue.js"></script>
</head>
<body>
  <div id="box">
    <input type="text" v-model:value="decr">
    <div>{{ decr }}</div>
  </div>
  <script>
    // 数据
    let obj = {
      decr: "hello world"
    }

    // vue 实例
    new Vue({
      el: "#box",
      data: obj
    })
  </script>
</body>
</html>
{% endcodeblock %}

# 结语
本文由个人理解和参考整理，仅供学习参考，欢迎留言交流~~
