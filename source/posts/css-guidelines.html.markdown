---
title: CSS guidelines
slug: css-guidelines
date: 2019-11-06
tags: css3
---

This is a presentation I gave to a large development team advocating for a more robust CSS solution, and contains my guidelines for CSS which have been formed over many years. It might not be the most useful post without my sparkling personality accompanying each slide, but it's worth documenting.


[View as a full screen presentation](https://www.lendmeyourear.net/media/css-guidelines/index.html)

* `f` - full screen
* `arrow keys` - change slides

## CSS Syntax

```
.myclass { // Selector
    background-color: red; // (Declaration) property: value;
}

```

## CSS Specificity

* Not commonly understood.
* Actually relatively simple.
* The selector with the highest specificity wins.

### Specificity examples

```
                /* ids=a classes=b elements=c       */
LI              /* a=0 b=0 c=1 -> specificity =   1 */
UL LI           /* a=0 b=0 c=2 -> specificity =   2 */
UL OL+LI        /* a=0 b=0 c=3 -> specificity =   3 */
H1 + *[REL=up]  /* a=0 b=1 c=1 -> specificity =  11 */
UL OL LI.red    /* a=0 b=1 c=3 -> specificity =  13 */
LI.red.level    /* a=0 b=2 c=1 -> specificity =  21 */
#x34y           /* a=1 b=0 c=0 -> specificity = 100 */
#s12:not(FOO)   /* a=1 b=0 c=1 -> specificity = 101 */

```

### !important

* A trump card for individual declarations inside selectors.
* Automatically "wins" over any level of specificity.
* When multiple `!important`s are found in the same cascade, specificity applies again.
* Can be useful, but on the whole it is best to avoid using this where possible.

### !important examples

```
LI.special.heading { /* a=0 b=2 c=1 -> specificity =  21 */
  color: black;
}

LI { /* a=0 b=2 c=1 -> specificity =  1 */
  color: red !important; /* specificity =  1 !important */
}

LI.special { /* a=0 b=2 c=1 -> specificity =  11 */
  color: blue !important; /* specificity =  11 !important */
}

```

## CSS advice

### Use a CSS normalize

Browsers have a built in `user agent` stylesheet which are not standardised and differ between browsers. You should use a CSS normalize to fix these inconsistencies and set some useful defaults. Use a template such as [Modern normalize](https://github.com/sindresorhus/modern-normalize) and extend it to your own needs.

* Set `box-sizing: border-box` to all elements. [Why?](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)
* Fixes some known bugs (usually in IOS safari)
* Set up some useful defaults for typography
* Set some defaults for form elements
* Only work on the low specificity elements here: no classes

### Keep specificity low

* Rely on the sensible defaults you set for common elements
* Where possible, only use classes
* When specificity rises, your ability to maintain the CSS dimishes

### Low specificity example

```
a { /* Specificity of 1 */
    color: blue;
    font-weight: 800;
    text-decoration: underline;
}

.link-special { /* Specificity of 10 */
    color: red;
    text-decoration: none;
}
```

All links now have a default style, with an optional class for special links.

### Low specificity example continued...

```
h1 a { /* Specificity of 2 */
    color: black;
    text-decoration: none;
}

h1 a.link-special { /* Specificity of 12 */
    color: pink;
}
```

All links that are inside a `h1` have a special style, and our special links are handled differently for `h1` elements.

### High specificity example

```
a#title { /* Specificity of 101 */
    color: black;
    text-decoration: none;
}

.link-special { /* Specificity of 10 */
    color: red;
}
```

Our `.link-special` class will not apply it's `color` to this element. We're running into problems due to high specificity.

### High specificity to limit scope

```
<div id="my-extension">
    <p>Why not try <a href="http://google.com">google</a>?</p>
</div>

<style>
    #my-extension p { /* Specificity of 101 */
        font: 'ms comic sans'
    }
    
    #my-extension a { /* Specificity of 101 */
        color: blue;
        font-weight: 800;
    }
</style>
```

Sometimes high specificity is useful. This example prevents styles "leaking" from the element with the id `my-extension`.

### Use OOCSS for generic elements

* Object oriented CSS
* Seperate structure from skin
* Separate container and content
* Keep classes discreet, encapsulated
* Single responsibility principle

### Non OOCSS example

```
#sidebar h3 {  /* Specificity of 101 */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  line-height: 1;
  color: #777;
}

#footer h3 {  /* Specificity of 101 */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  line-height: 1;
  color: #777;
}
```

We're repeating CSS declarations here. We're defining our `h3` elements relative to their parent container. this increases specificity. A more elegant and maintanable solution would be to...

### OOCSS example

```
h3 { /* Specificity of 1 */
    font-size: 2em;
    line-height: 1;
    color: #777;
}

.heading-small { /* Specificity of 10 */
    font-size: 1em;
}
```

Each of our CSS declarations now have a single responsiblity, and naked `h3` elements now have a consistent appearance, with optional classes for use where required.

### Use BEM for discreet components

* BEM is useful for areas of the page that are unique organisms
* The single responsibility principle found in OOCSS also applies to BEM
* We can still rely on our generic styles for elements
* We can override our generic styles easily because specificity is low
* BEM stands for Block, Element, Modifier
* `[block]__[element]--[modifier]`

### BEM element example

```
<section class="media">
  <img class="media__item" src="me.jpg">
  <p class="media__description">Look at me!</p>
</figure>

<style>
  .media { } /* Specificity of 10 */
  .media__item { } /* Specificity of 10 */
  .media__description { } /* Specificity of 10 */
</style>
```

From the naming convention, we can see that the intention of the element class `.media__item` is that it 'belongs' to the block class parent `.media`.

### BEM Modifer example

```
<section class="media media--large">
  <img class="media__item media__item--framed" src="me.jpg">
</section>

<style>
  .media { } /* Specificity of 10 */
  .media--large { } /* Specificity of 10 */
  .media__item--framed { } /* Specificity of 10 */
</style>
```

From the naming convention, we can see that the intention of the modifier class `.media--large` is that it 'belongs' to the block class parent `.media`. `.media__item--framed` 'belongs' to the element class parent `.media__item`

### Use SCSS instead of CSS

* Writing CSS is static, you can't use code to automate it
* CSS is hard to maintain
* CSS involves repetition
* SCSS helps with all these issues

### Variables

```
$colour-brand-primary: #3D8C61;

.button {
    border: 1px solid $colour-brand-primary;
}

a {
    color: $colour-brand-primary;
}
```

Without these variables, changing a brand colour would involve find/replace.

### Placeholders

```
%list-inline {
    list-style-type: none;
    padding-left: 0;
    
    li {
        display: inline-block;
        margin-right: 1em;
    }
}

.breadcrumb,
.navigation {
    @extend %list-inline;
}
```

Our compiled CSS will still contain this repetition, but it doesn't mean we have to have bloated SCSS files to deal with. We can store repeated CSS declarations as placeholders.

### Mixins

```
@mixin svg-inline(colour: $colour-text, $width: 1em) {
    svg {
        width: $width;

        path {
            fill: $colour;
        }
    }
}

.logo {
    @include svg-inline($colour-ui-icon, 200px, 50px);
}
```

Mixins accept variables and return CSS.

### Nesting

```
#my-extension {
    p {
        font: 'ms comic sans'
    }
    
    a {
        color: blue;
        font-weight: 800;
    }
}

/* CSS outputs: */
#my-extension a { }
#my-extension p { }
```

Nesting allows you to see the structure of the SCSS better, and avoid repetition in the SCSS that you write.

### Colour functions

```
$colour-ui-link: #0A8045;
$colour-ui-link-hover: darken($colour-ui-link, 10%);
```

Manipulate colours.

### Maths

```
$grid-gutter-half: $font-size-base;
$grid-gutter-full: ($grid-gutter-half * 2);
```

Use Maths to calculate CSS properties relative to each other.

### Functions

```
// Convert a hex color value to a format safe to use in data-uri
@function url-friendly-colour($colour) {
    @return '%23' + str-slice('#{$colour}', 2, -1)
}
```

Automate common manual tasks, such as string formatting.

### Use seperate SCSS files

```
scss
  - atoms
    - typography.scss
    - buttons.scss
    - forms.scss
  - molecules
    - tables.scss
    - sections.scss
```

### Build a CSS file from all these seperate SCSS files

```
node-sass-chokidar --precision 8 --output-style compressed source/stylesheets/notbootstrap.scss build/stylesheets/notbootstrap.css
```

This is an example of an [npm package](https://github.com/michaelwayman/node-sass-chokidar) that will compile `notbootstrap.scss` into `notbootstrap.css`. `notbootstrap.scss` itself contains `@import`ed SCSS files:

```
@import 'core/variables';
@import 'core/reset';
@import 'core/functions';
@import 'core/mixins';
@import 'core/placeholders';
@import 'core/scaffolding';
```

### Recap

* Understand Specificity
* Understand !important
* Use a CSS normalize
* Keep specificity low
* Use OOCSS for generic elements
* Use BEM for discreet components
* Use SCSS instead of CSS

### Final thoughts

* Treat SCSS and the compiled CSS with as much care as you do JavaScript or Python, or anything else, and certainly not as an afterthought
* Don't write CSS, write SCSS
* Keep your SCSS minimal, maintainable, and understandable
* Understand and use the principles of OOCSS, BEM and low specificity
* Write comments in your SCSS and convert them [automatically to a styleguide](https://github.com/kss-node/kss-node)

### This presentation

* This presentation is written in markdown and converted to a slideshow presentation via [remark.js](https://lendmeyourear.net/posts/presentations-from-markdown-with-remark-js/)


