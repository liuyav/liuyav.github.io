---
title: 重识css之---BestPractice
date: 2017-09-02 14:10:55
tags:
  - css
categories:
  - 前端
---

# 前言
永远遵循一套编码规范，确保无论多少人参与代码编码，都看起来像是一个人的的编码风格。

## BestPractice
1. 为了代码的易读性，在每个声明块的左花括号前添加一个空格，声明块的右花括号应当单独成行。
2. 每条声明语句的 : 后应该插入一个空格。
3. 每条声明语句的都应该独占一行。
4. 所有声明语句都应当以分号结尾。最后一条声明语句后面的分号是可选的，但是，如果省略这个分号，你的代码可能更易出错。
5. 每条规则之间保持一个换行
```css
body {
  font-size: 12px;
  background: #000;
}
```

6. 为选择器分组时，将单独的选择器单独放在一行。<!-- more -->
```css
body,
html {

}
```

7. 对于只包含一条声明的样式，为了易读性和便于快速编辑，建议将语句放在同一行。
```css
p { text-align: center; }
```

8. 对于以逗号分隔的属性值，每个逗号后面都应该插入一个空格（例如，box-shadow）。
9. 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）。
10. 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;。 
```css
div {
  box-shadow: 1px 1px 0 1px #000, inset 1px 1px 0 1px #fff;
  transition: .5s all;
  background: background(0, 0, 0, .6);
  margin: 0;
}
```

11. class 名称中只能出现小写字符和破折号（dashe）
12. 选择器要尽可能短，并且尽量限制组成选择器的元素个数，建议不要超过 3 
```css
.tab-hd-item {

}
```

13. 对于通用元素使用 class ，这样利于渲染性能的优化。
```css
.wrap {
  width: 1260px;
  margin: 0 auto;
}
```

14. 相关的属性声明应当归为一组
```css
.box {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 400px;
  height: 300px;
  margin-left: -200px;
  margin-top: -150px;

  font-size: 20px;
  line-height: 300px;
  text-align: center;

  background-color: red;
  color: #000;
  border: 1px solid #000;
} 
```
  并按照下面的顺序排列：【可选】
    * Positioning
    * Box model
    * Typographic
    * Visual

## CSSComb
当然，按照上述的语法规则一下子改变过来可能会降低开发速度，在 sublime text3 下有一个插件叫 ```CSSComb```，官网上有个<a href="http://csscomb.com/config" style="font-weight: bold">Build config</a>可根据自己选项自动生成配置，在sublime下安装插件```CSSComb```，在```Preferences```->```Package Settings```->```CSSComb```->```Setting-User```将生成的配置粘贴在上面，以后整理格式，只需要在当前```css```文件右键运行```Run CSSComb```即可整理```CSS```代码格式。

## 结语
本文由个人理解和参考整理，仅供学习参考，欢迎留言交流~~







