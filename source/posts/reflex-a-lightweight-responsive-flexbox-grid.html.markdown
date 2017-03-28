---
title: Reflex - a lightweight responsive flexbox grid
slug: reflex-a-lightweight-responsive-flexbox-grid
date: 2015-04-24
tags: accessibility, css3, design, flexbox, html5, responsive
---

It's a common problem in responsive web development that making elements the same height at all viewport sizes is quite fiddly to do, especially when your elements are dynamically generated.

As you clever people know, flexbox solves this problem perfectly by introducing the property of [align-items: stretch][1].

Flexbox also solves a whole host of other layout problems such as vertical centering. I started to research flexbox and learnt that (at the time of writing), [full global flexbox support is at 81.74%][2] (excluding browsers with outdated or partial support) so if I begin using flexbox it will solve a lot of these layout problems.

This caught my interest and I ended up building a [lightweight responsive flexbox grid][3] with cross browser support, an inline-block fallback for older browsers and no polyfills. The cross browser support is good, giving us a reliable grid that performs well across most browsers that developers typically have to support and I have implemented it on several of the websites I currently work on, including this one. Feel free to browse the [documentation][4] or [demo][5] pages for more information.

## More info

Edit - Since this post was published I have written a post [explaining the underlying css][6] and how it works.


 [1]: http://www.w3.org/TR/css-flexbox-1/#valdef-align-items-align-self-stretch
 [2]: http://caniuse.com/#search=flex
 [3]: https://github.com/leejordan/reflex
 [4]: http://leejordan.github.io/reflex/docs/
 [5]: http://leejordan.github.io/reflex/docs/demo.html
 [6]: http://www.lendmeyourear.net/layering-css-so-we-can-use-flexbox-now.html
