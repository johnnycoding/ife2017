# 制作一个简单的菜单动画效果思路详解

一个有交互动画的按钮、表单会更显元气，让使用者让人眼前一亮，用户体验 UP，UP！
一个富有生机、创造的交互动画也会让开发者编码时也更有成就感，不显得枯燥。

我们有什么理由不做呢？

## 了解 transition

在正式编写代码前，我们先来了解这一个任务的关键 - transition。

### 什么是 transition

transition 是 CSS3 的新属性，主要用于定义元素在不同状态之间切换的过渡效果。

详细的 transition 定义和语法可以访问 [MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

这里不再班门弄斧。

### 使用 transition

如我们需要制作一个导航栏，需要实现当鼠标移入导航栏里面的每个 item 时，每个 item 切换颜色。

但是直接切换颜色会略显突兀，我们可能会需要加上一个渐变效果。

在以往，我们常常需要通过 JavaScript 代码来实现。不过现在，只需要使用一行简单的 CSS3 就可以实现了。

```css
transition:background-color 0.5s linear; /* 注意浏览器兼容性 */
```

### transition 兼容性问题

作为一个较新的属性，css 不支持 IE10 之前的版本，且老版本的 chrome、firefox 也需要使用 -moz、-webkit 等浏览器私有前缀进行兼容。

查看

### transition 与 animation

transition 与 animation 都可以实现一些动画过渡效果。不过 transition 更为简单易用，强调过渡效果，可以实现一些简单的过渡动画。如果需要更复杂的效果，则可以使用 animation。

## 编写菜单动画效果

我因为算是一个初学者，很难做到看一遍需求就把整个功能完完整整的做出来。所以在考虑一个需求怎么实现之前，我往往会先进行拆分，做这一个任务时，我想先忽略可能涉及 JavaScript 代码的切换效果，转而直接先实现不依赖 JavaScript 的鼠标移入产生效果，这样一拆分，任务就简明许多。

### 实现下方的线条

我们暂时先不考虑动画效果，先把线条做出来，可能我们会考虑使用 直接使用元素的 border 属性来制作线条，但是 border 属性只能设置 border-width，因为 border 的长度、宽度受元素的长宽影响。

