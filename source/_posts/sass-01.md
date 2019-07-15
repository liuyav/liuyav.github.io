---
title: sass 基本使用（一）变量
date: 2019-07-15 14:51:01
tags:
  - sass
  - css
categories:
  - 前端
---

# sass 变量
本文讨论有关 sass 语法，变量部分。文中案列可进行复制，在sass的一个在线运行网站上进行测试 **[sass在线转换](https://www.sassmeister.com/)**

## 变量分类
1. 普通变量
2. 默认变量
3. 特殊变量
4. 多值变量
5. 全局变量

<!-- more -->

### 普通变量
sass 变量以 $ 打头后接变量名，如：
{% codeblock lang:scss %}
$white_color: #fff;
// 声明一个颜色为白色的变量

.color {
  color: $white_color;
}
{% endcodeblock %}

### 默认变量
默认变量声明方式和普通变量一样，在结尾处添加 !default 如：
{% codeblock lang:scss %}
$color: #000;
$color: #fff;

.color {
  color: $color;
}

// 同名变量，默认变量会被覆盖
{% endcodeblock %}

### 特殊变量
特殊变量用于属性的拼接，进行属性拼接的时候，使用 `#{}` 连接
{% codeblock lang:scss %}
$dir: left;

.border {
  border-#{$dir}: 1px solid #000;
}
{% endcodeblock %}

### 多值变量
多值变量，分为 list 类型 和 map 类型

#### list类型
1. 可通过空格，逗号或小括号分隔多个值
2. 可用 nth($var,$index)取值，索引从1开始
3. 关于其他list数据操作的， 自定百度 sass Functions

{% codeblock lang:scss %}
$colors: #fff #000 #e2e2e2;
$colors2: #fff,#000,#e2e2e2;
$colors3: (#fff)(#000)(#e2e2e2);

body {
  background: nth($colors, 1);
  color: nth($colors2, 2);
  border: 1px solid nth($colors3, 3);
}
{% endcodeblock %}

#### map类型
1. map数据以key和value成对出现，其中value又可以是list
2. 可通过map-get($map,$key)取值
3. 关于其他map数据操作的， 自定百度 Map Functions

{% codeblock lang:scss %}
$colors: (
  black: #000,
  white: #fff
);

body {
  background: map-get($colors, black);
  color: map-get($colors, white);
}
{% endcodeblock %}

### 全局变量（v3.4）
定义全局变量，在普通变量定义后加 !global 标识即可，覆盖全局变量，只需在后面全局变量定义后申明一次即可
{% codeblock lang:scss %}
$colors: #e2e2e2!global;
$colors: #fff;


body {
  background: $colors;
  color: $colors;
}
{% endcodeblock %}



