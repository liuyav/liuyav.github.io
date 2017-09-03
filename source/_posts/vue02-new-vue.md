---
title: vue实例
date: 2017-09-03 19:21:19
tags:
  - javascript
  - vue
categories:
  - 前端
---

# 前言
每一个应用都是通过vue实例进行启动 new Vue(选项对象)
需要传入选项对象，选项对象包括挂载元素、数据、模板、方法等
  1. el:挂在元素选择器    String||HTMLElement
  2. data:代理数据        Object||Function
  3. method:定义方法      Object

new vue()实例如下：
{% codeblock lang:html new vue()实例 http://study.liuyav.com/js/vue/html/vue02-new-vue.html 点击预览 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../vue.js"></script>
</head>
<body>
  <div id="box">
    <div v-on:click="clickHander">{{ decr }}</div>
  </div>
  <script>
    // 数据
    let obj = {
      decr: "hello world"
    }

    // vue 实例
    new Vue({
      el: "#box", // 挂载元素
      data: obj,  // 代理数据
      methods: {  // 方法
        clickHander() {
          alert("点击触发了");
        }
      }
    })

  </script>
</body>
</html>
{% endcodeblock %}

## vue代理数据
每个vue对象都会代理其data对象里面的全部属性，这些代理的属性是响应的，<span style="font-weight: bold">但是新添加的属性是不具备响应功能的，数据改变不会更新视图。</span>

<p style="color: red">注意：如果程序后面用到某个值，这个值又必须是响应的，请务必在代理数据中对它进行初始化</p>

## vue实例自身属性和方法
暴露自身属性和方法，以$开头例如：$el $data...

## 声明式渲染
只需要知道在哪里声明，做什么，无需关心怎么实现
命令式渲染：具体代码做什么，在哪里，怎么实现（例如写js代码）

我们都写过js，我们用js操作一个数组，过滤出大于某个数的集合，做这样一个操作，我们知道操作一个集合，我们都是先要进行循环，好比发出一个命令循环这个数组，然后再对数组的每个值进行操作，这样的过程都是经过一系列的命令发出的，我们称为命令式渲染。如下：
{% codeblock lang:html 命令式渲染 http://study.liuyav.com/js/vue/html/vue02-new-vue2.html 点击预览 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../vue.js"></script>
</head>
<body>
  <script>
    var arr = [1, 2, 3, 4, 5];
    var newArr = [];

    for (var i=0; i<arr.length; i++) {
      if (arr[i] >= 3) {
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
  </script>
</body>
</html>
{% endcodeblock %}

但是，如果我使用es5中的过滤函数，我直接就可以处理业务逻辑，而不需关心怎样循环，只需要关心做什么，哪里做，我们称之为声明式渲染。如下：
{% codeblock lang:html 声明式渲染 http://study.liuyav.com/js/vue/html/vue02-new-vue3.html 点击预览 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../vue.js"></script>
</head>
<body>
  <script>
    var arr = [1, 2, 3, 4, 5];
    var newArr = [];

    newArr = arr.filter(function(v) {
      return v>=3;
    })
    console.log(newArr);
  </script>
</body>
</html>
{% endcodeblock %}

## 模板
在vue中，模板分为4中：
1. 文本插值模板
2. html模板
3. template 模板
4. 模板-render函数

下面详细说一下每个模板的解析方式
<p style="color: red; font-weight: bold">注：如果需要复制代码，双大括号左右空格请自行去掉</p>

### 文本插值模板
* 文本：{ { value } } 
* 自定义属性属性： v-bind 或者简写 :
* javascript 简单的表达式
{% codeblock lang:html 文本插值模板 http://study.liuyav.com/js/vue/html/vue02-new-vue4.html 点击预览 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../vue.js"></script>
</head>
<body>
  <div class="box">
    <!-- 属性插值 -->
    <p v-bind:customer="id">{ { text } }</p>   <!-- 文本插值 -->
  </div>
  <script>
    let obj = {
      text: "文本插值",
      id: 2,
    }

    new Vue({
      el: '.box',
      data: obj,
    });
  </script>
</body>
</html>
{% endcodeblock %}


### html模板
* 基于DOM的模板，模板都是可解析的htm
* 原生html v-html = "value"
{% codeblock lang:html html模板 http://study.liuyav.com/js/vue/html/vue02-new-vue5.html 点击预览 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../vue.js"></script>
</head>
<body>
  <div class="box">
    <p v-html="str"></p>
  </div>
  <script>
    let obj = {
      str: "<span>内联span</span>"
    };

    new Vue({
      el: '.box',
      data: obj,
    });
  </script>
</body>
</html>
{% endcodeblock %}

### template 模板
* 选项对象的 template 属性
* 模板会被替换为 template 模板
* 根节点只能有一个
* 将html写在script标签里面，type类型指定x-template
{% codeblock lang:html template模板 http://study.liuyav.com/js/vue/html/vue02-new-vue6.html 点击预览 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="../vue.js"></script>
  <script type="x-template" id="box2">
    <div>template div2</div>
  </script>
</head>
<body>
  <div class="box">
    <p>段落</p>
  </div>
  <div class="box2">
    <p>段落2</p>
  </div>
  <script>
    // template 选项属性
    let str = "<div>template div</div>";
    var v1 = new Vue({
      el: '.box',
      template: str
    });
    // script标签
    var v2 = new Vue({
      el: '.box2',
      template: '#box2'
    });
  </script>
</body>
</html>
{% endcodeblock %}

### 模板-render函数
render函数返回一个vnode对象，里面有一个createElement函数，包括三个参数：
1. 创建元素
2. 数据对象
3. 子元素
{% codeblock lang:html render函数 http://study.liuyav.com/js/vue/html/vue02-new-vue7.html 点击预览 %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    .bold { font-weight: bold; }
  </style>
  <script src="../vue.js"></script>
</head>
<body>
  <div class="box">
  </div>
  <script>
    var v1 = new Vue({
      el: '.box',
      render(createElement) {
        return createElement(
          'ul',
          {
            class: {
              bold: true
            },
            style: {
              fontSize: "30px"
            }
          },
          [
            createElement('li', 1),
            createElement('li', 2),
            createElement('li', 3),
          ]
        );
      }
    });
  </script>
</body>
</html>
{% endcodeblock %}

# 结语
本文由个人理解和参考整理，仅供学习参考，欢迎留言交流~~