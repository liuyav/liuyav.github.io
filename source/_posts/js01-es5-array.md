---
title: ECMAScript5 新特性学习（一）Array  
date: 2017-09-03 00:01:10
tags:
  - javascript
  - es5
  - array
categories:
  - 前端
---

# ES5新特性
本文将简单列举ES5的核心特性,ES5多半是扩展原生对象的功能，让```Object```、```Array```、```Function```更加强大。其他的特性包括```strict mode```和一个期待已久的工具方法(例如：```JSON.parse```等)。

ES5的大部分特性都在主流浏览器中（IE9+）支持。而且大部分特性都可以通过Javascript垫片（pollyfill）在运行环境中实现

下面先来学习一下```Array```的新特性<!-- more -->

## 检测数组方法
在ES3的时候，在确定某个对象是不是数组问题时候，使用```instanceof```操作符就能得到满意结果。
{% codeblock lang:js %}
if (value instanceof Array) {
  ...
}
{% endcodeblock %}

<p style="color: red; font-weight: bold;">问题：如果网页包含多个框架，实际上就存在多个全局window对象，从而存在多个不同版本Array构造函数，如果你从一个框架向另外一个框架传入一个数组，与第二个框架原生数组相比，其实他们是有不同的构造函数</p>

### Array.isArray()
```ECMAScript5```新增了```Array.isArray()```方法，这个方法可以检测一个值到底是不是一个数组，而不用管在哪个全局环境中创建，用法如下：
{% codeblock lang:js %}
if (Array.isArray(value)) {
  ...
}
{% endcodeblock %}

## 位置方法
```ECMAScript5```为数组提供了两个位置方法：```IndexOf()```和```LastIndexOf()```。这两个方法都接收两个参数：
1. 要查找的项
2. 开始查找的位置（可选）

### Array.prototype.indexOf()
{% codeblock lang:js %}
var nums = ['a', 'b', 'c',  'd', 'e', 'c'];
console.log( nums.indexOf('c') );       // 2
console.log( nums.indexOf('c', 3) );    // 5
{% endcodeblock %}
从数组索引为0的开始找，返回位置，没找到返回-1

### Array.prototype.lastIndexOf()
{% codeblock lang:js %}
var nums = ['a', 'b', 'c',  'd', 'e', 'c'];
console.log( nums.lastIndexOf('c') );     //5
console.log( nums.lastIndexOf('c', 4) );  //2
{% endcodeblock %}
从数组最后一个的开始找，返回位置，没找到返回-1

## 迭代方法
每个方法都接收两个参数，第一个参数为传入的函数，第二个可选参数为作用域对象。回掉函数中接收三个参数，数组项的值，数组项的位置，和数组对象本身。

### Array.prototype.every()
对数组的每一项给定运行函数，如果每一项返回true，则```every()```函数都返回true
{% codeblock lang:js %}
var nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = nums.every(function(value, index, arr) {
  return (value>2);
});
console.log( everyResult );   //false
{% endcodeblock %}

### Array.prototype.some()
对数组的每一项给定运行函数，如果任一项返回true，则```some()```返回true
{% codeblock lang:js %}
var nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var someResult = nums.some(function(value, index, arr) {
  return (value>2);
})
console.log( someResult );    //true
{% endcodeblock %}

### Array.prototype.filter()
对数组的每一项给定运行函数，返回由true的项组成的数组。
{% codeblock lang:js %}
var nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var filterResult = nums.filter(function(value, index, arr) {
  return (value>2);
})
console.log(filterResult);    //[3, 4, 5, 4, 3]
{% endcodeblock %}

### Array.prototype.map()
对数组的每一项给定运行函数，返回每次调用结果组成的数组。
{% codeblock lang:js %}
var nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var mapResult = nums.map(function(value, index, arr) {
  return value * 2;
})
console.log(mapResult);   //[2, 4, 6, 8, 10, 8, 6, 4, 2]
{% endcodeblock %}

### Array.prototype.forEach()
对数组的每一项给定运行函数，无返回值
{% codeblock lang:js %}
var nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
nums.forEach(function(value, index, arr) {
  ...s
})
{% endcodeblock %}

## 归并方法
```ECMAScript5```新增了两个归并数组的方法：```reduce()```和```redeceRight()```。这两个方法都会迭代数组的所有项，然后构建一个最终返回值。这两个方法都接收两个参数，调用的函数和作为归并基础的初始值（可选）。函数接受4个参数：前一个值，当前值，索引，和数组对象。

### Array.prototype.reduce()
{% codeblock lang:js %}
var nums = [1, 2, 3, 4, 5];
var sum = num.reduce(function(prev, next, index, arr) {
  return prev+next; //cur: 1,3,6,10,15
})
alert(sum);     //15
{% endcodeblock %}

### Array.prototype.reduceRight()
{% codeblock lang:js %}
var nums = [1, 2, 3, 4, 5];
var sum = num.reduceRight(function(prev, next, index, arr) {
  return prev+next; //cur: 5,9,12,14,15
})
alert(sum);     //15
{% endcodeblock %}

# 结语
本文由个人理解和参考整理，仅供学习参考，欢迎留言交流~~















