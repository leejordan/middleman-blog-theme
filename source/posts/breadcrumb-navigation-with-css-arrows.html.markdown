---
title: Breadcrumb navigation with css arrows
slug: breadcrumb-navigation-with-css-arrows
date: 2011-12-22
tags: javascript, css3, design, html5
---

A quick demo of a scalable, cross browser compatible breabcrumb navigation using css, some jquery and no images.

I've long been a fan of breadcrumb navigation using chunky arrows such as that used on the [guardian website][1] and there are several possible ways to approach this. The guardian's website uses images to achieve the desired result but what if we want to avoid using images? There are a few articles around the web on how to create these breadcrumb arrows with :before and :after pseudo elements but this does not work in older versions of Internet Explorer. My solution uses spans.

## CSS only:

<iframe src="http://www.lendmeyourear.net/bits/breadcrumb_arrows_css_nojs.html" width="100%" height="30" frameborder="no" scrolling="no"></iframe>

## With javascript enhancement:

<iframe src="http://www.lendmeyourear.net/bits/breadcrumb_arrows_css.html" width="100%" height="30" frameborder="no" scrolling="no"></iframe>

## Full guardian style design:

<iframe src="http://www.lendmeyourear.net/bits/breadcrumb_arrows_guardian.html" width="100%" height="30" frameborder="no" scrolling="no"></iframe>

## The HTML

A simple ordered list, a link inside each list item, with a span for the arrows. Every second list item has the class "odd" which alternates css styles for each breadcrumb. The final list item is our currently selected page and therefore I have not made this a link nor included a span for the arrow.

```html
<ol id="breadcrumbs">
  <li>
    <a href="#0">Home<span class="arrow"></span></a>
  </li>
  <li>
    <a href="#0" class="odd">World news<span class="arrow"></span></a>
  </li>
  <li>
    <a href="#0">America<span class="arrow"></span></a>
  </li>
  <li>
    <a href="#0" class="odd">Economics<span class="arrow last"></span></a>
  </li>
  <li>
    &nbsp;&nbsp;The currently selected page
  </li>
</ol>
```

## The CSS

First off, we have the css for the list, the list items, the links and the spans. The spans are basically a zero width and height element with thick borders to simulate the arrowhead. Here is what it would look like in isolation:

<span style="display: block; line-height: 0px; height: 0px; width: 0px; border-left: 10px solid #CCCCCC; border-right: none; border-top: 15px solid #e9e9e9; border-bottom: 15px solid #e9e9e9;"></span>

However, in the context of the rest of the breadcrumbs it becomes an arrowhead. The colours can be tweaked obviously, this is just a boring grey colour scheme for demo purposes.

```css
#breadcrumbs {
    padding: 0;
    margin: 0;
    height: 30px;
    line-height:30px; /* line-height MUST be the same as height */
    list-style-type:none;
    background: #CCCCCC;
}

#breadcrumbs li {
    float: left; /*ie6/7 needs this */
}

#breadcrumbs a {
    float: left;
    position:relative;
    padding: 0 20px 0 10px;
    color: #000000;
    text-decoration: none;
    outline: none;
}

#breadcrumbs a:hover {
    text-decoration: underline;
}
#breadcrumbs a.odd {
    background: #e9e9e9;
}

#breadcrumbs span {
    position: absolute;
    display: block;
    line-height: 0px;
    height: 0px;
    width: 0px;
    right: 0px;
    top: 0px;
    border-left: 10px solid #CCCCCC;
    border-right: none;
    border-top: 15px solid #e9e9e9;
    border-bottom: 15px solid #e9e9e9;
}

#breadcrumbs a.odd span {
    border-left: 10px solid #e9e9e9;
    border-top: 15px solid #CCCCCC;
    border-bottom: 15px solid #CCCCCC;
}
```

Then we have the classes for the javascript hover states which change the colours of the span arrows and the links themselves.

```css
#breadcrumbs a.hover {
    text-decoration: none;
    background: #999999;
}
#breadcrumbs a span.hover {
    border-left: 10px solid #999999;
}
#breadcrumbs a span.pre_hover {
    border-top: 15px solid #999999;
    border-bottom: 15px solid #999999;
}
```

## The javascript

This is optional but gives the illusion that the arrow is one distinct clickable link. It changes the class of the link that is being hovered, it's child span, and the span in the previous link too.

```js
$("#breadcrumbs a").hover(
    function () {
        $(this).addClass("hover").children().addClass("hover");
        $(this).parent().prev().find("span.arrow:first").addClass("pre_hover");
    },
    function () {
        $(this).removeClass("hover").children().removeClass("hover");
        $(this).parent().prev().find("span.arrow:first").removeClass("pre_hover");
    }
);
```

## More info

Here is [a similiar approach using the :after pseudo element][2] and here's [a solution that uses images][3].

[1]: http://www.guardian.co.uk/
[2]: http://css-tricks.com/triangle-breadcrumbs/
[3]: http://veerle-v2.duoh.com/blog/comments/simple_scalable_css_based_breadcrumbs/
