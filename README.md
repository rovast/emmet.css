# emmet.css

```
+----------------------------+
|                            |
|  Emmet + CSS = emmet.css   |
|                            |
+----------------------------+
```

## 安装

```bash
npm install @rovast/emmet.css
```

## 设计哲学

**One class, one css attribute.**

也就是说，通过引入该库后，一个 class name 只对应一个 css 属性。 本库聚焦的是 css 缩写。

- 一个类名对应一个CSS属性，理解负担低
- 无需在 HTML 和 CSS 之间来回切换，提升开发体验

## 设计背景

当前的 CSS 相关库已经够多了，为什么还需要开发这么一个库呢？本库是作者多年 CSS 的最佳实践总结。
对于从 Notepad++ 过来的 Web 程序员，应该对 emmet 这个插件不陌生。
在那个年代，没有那么多的构建工具，真正的纯手工打造 HTML + CSS。

发展到今天，已经有很多开箱即用的 CSS 库了，比如优秀的 tailwind.css。

但是在使用过程中，我发现，这个东西有点像黑盒子，具体体现在

- 做的太多。一个 class 可能对应了多个 css 属性。
- 新的命名规则。也就是说，你要习惯他的命名规则。
- 复杂的 Setup。

当然了，上述的设置对我而言，或许是个缺点。但是对于部分开发人员而言，或许是个福音。
毕竟，对 CSS 进行抽象，你不需要理解里面的细节，就能写出一个漂亮的页面，谁能拒绝呢？

但是对于我而言，我不需要，我需要的是 full control，需要的是 clean code。

恰巧，emmet 里面提供了大量的 CSS shortcut，为何不能进行二合一。


## 不满足你需求?

如果本软件不能满足你需求，你也可以使用下述软件包(库)进行替代。

- [tailwind.css](https://tailwindcss.com/)

## 致谢

- [Emmet](https://docs.emmet.io/cheat-sheet/)
- [Gulp](https://gulpjs.com/)


Just focus on HTML Writing, without dancing between css file and html file.

Based on [emmet](https://docs.emmet.io/cheat-sheet/) short rules.
