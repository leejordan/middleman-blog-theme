---
title: CSS only 3d buttons
slug: css-only-3d-buttons
date: 2014-12-14
tags: animation, css3, design
---

These buttons use absolutely positioned translucent elements over a flat colour button to simulate a shiny 3d effect using the :before and :after pseudo elements. They also use an active state that simulates the button being pressed into the page. The core principle is the same in all these buttons but the implementation is subtly different. These buttons could be further enhanced by using other attributes such as background gradients, different borders, different shadow effects, multiple states and maybe even some keyframe animations.

## bubble

<button class="bubble three-d"></button><button class="bubble three-d bill"></button><button class="bubble three-d baby"></button><button class="bubble three-d logo"></button><button class="bubble three-d">default</button><button class="bubble three-d submit">submit</button><button class="bubble three-d cancel">cancel</button><button class="bubble three-d primary">primary</button>

## bubble-left

<button class="bubble-left three-d"></button><button class="bubble-left three-d bill"></button><button class="bubble-left three-d baby"></button><button class="bubble-left three-d logo"></button><button class="bubble-left three-d">default</button><button class="bubble-left three-d submit">submit</button><button class="bubble-left three-d cancel">cancel</button><button class="bubble-left three-d primary">primary</button>

## bubble-inverse

<button class="bubble-inverse three-d"></button><button class="bubble-inverse three-d bill"></button><button class="bubble-inverse three-d baby"></button><button class="bubble-inverse three-d logo"></button><button class="bubble-inverse three-d">default</button><button class="bubble-inverse three-d submit">submit</button><button class="bubble-inverse three-d cancel">cancel</button><button class="bubble-inverse three-d primary">primary</button>

## keyboard

<button class="keyboard three-d"></button><button class="keyboard three-d bill"></button><button class="keyboard three-d baby"></button><button class="keyboard three-d logo"></button><button class="keyboard three-d">default</button><button class="keyboard three-d submit">submit</button><button class="keyboard three-d cancel">cancel</button><button class="keyboard three-d primary">primary</button>

## keyboard-rounded

<button class="keyboard-rounded three-d"></button><button class="keyboard-rounded three-d bill"></button><button class="keyboard-rounded three-d baby"></button><button class="keyboard-rounded three-d logo"></button><button class="keyboard-rounded three-d">default</button><button class="keyboard-rounded three-d submit">submit</button><button class="keyboard-rounded three-d cancel">cancel</button><button class="keyboard-rounded three-d primary">primary</button>

## full keyboard

<div class="keyboard-grid">
  <button class="keyboard three-d">Q</button><button class="keyboard three-d">W</button><button class="keyboard three-d">E</button><button class="keyboard three-d">R</button><button class="keyboard three-d">T</button><button class="keyboard three-d">Y</button><button class="keyboard three-d">U</button><button class="keyboard three-d">I</button><button class="keyboard three-d">O</button><button class="keyboard three-d">P</button><button class="keyboard three-d">A</button><button class="keyboard three-d">S</button><button class="keyboard three-d">D</button><button class="keyboard three-d">F</button><button class="keyboard three-d">G</button><button class="keyboard three-d">H</button><button class="keyboard three-d">J</button><button class="keyboard three-d">K</button><button class="keyboard three-d">L</button><button class="keyboard three-d">Z</button><button class="keyboard three-d">X</button><button class="keyboard three-d">C</button><button class="keyboard three-d">V</button><button class="keyboard three-d">B</button><button class="keyboard three-d">N</button><button class="keyboard three-d">M</button>
</div>

## How to create this effect

### The button

First we are styling the buttons themselves. There's a lot you can do with this to personalise it so I've only included the bits that are relevant for the 3d effect. Relative position is required because we're positioning the pseudo elements absolutely. The -2px top raises the button up slightly so we can "push" it in to the page when it's active. We're specifying both an inset and a regular box-shadow so that the css transition animates correctly. If we only applied an inset box-shadow in the active state, it would not transition smoothly.

```css
button.three-d {
    transition: all 0.1s ease-in;
    position: relative;
    top: -2px;
    box-shadow: inset 0 0 0 0 #000000, 0 2px 2px #000000;
}
```

### The active state

In the active state the button is "pushed" down 2px and we invert the two box-shadows to give the impression of depth.

```css
button.three-d:active {
    top: 0;
    box-shadow: inset 0 2px 2px 0 #000000, 0 0 0 #000000;
}
```

### The overlay

Then we need to create our translucent overlays using absolutely positioned :before and :after pseudo elements. This is what gives them the 3d effect.

```css
button.bubble:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 30%;
    top: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
    border-radius: 2px 2px 50% 50%;
    opacity: .30;
}
```

## Cross browser concerns

IE8 and below manage to support :before and :after but they will not allow the use of opacity on these pseudo elements so you get solid white blocks which obscure the button content. If I wanted a fully cross browser solution, I would need to add markup (probably by using absolutely positioned spans). Therefore in all the examples I have effectively turned the overlays off by making them transparent in ie < 8

```css
<!--[if lt IE 9]>
    <style type="text/css">
        a:before, a:after {
            background:transparent !important;
        }
    </style>
<![endif]-->
```

## More info

You can check out the [code on github][1] or [view all the examples on one page][2].

<style>
    button.three-d {
        transition: all 0.1s ease-in;
        position: relative;
        top: -2px;
        display: inline-block;
        margin: 0 10px 20px 0;
        padding: 0 10px;
        background-color: #D8D4D5;
        color: #333;
        min-width: 40px;
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
        font-family: 'Lato', sans-serif;
        font-weight: normal;
        font-size: 16px;
        text-decoration: none;
        text-align: center;
        border: 1px solid #636363;
        text-shadow: 1px 1px #e9e9e9;
        box-shadow: inset 0 0 0 0 #000000, 0 2px 2px #000000;
        border-radius: 3px;
    }

    button.three-d:hover,
    button.three-d:focus {
        cursor: pointer;
        outline: none;
    }

    button.three-d:active {
        outline: none;
        top: 0;
        box-shadow: inset 0 2px 2px 0 #000000, 0 0 0 #000000;
        background-color: #c1bebf;
    }

    button.large {
        padding: 0 30px;
        min-width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 24px;
        border-radius: 5px;
        box-shadow: inset 0 0 0 #000000, 0 2px 4px #000000;
    }

    button.bill {
        background: url(http://www.fillmurray.com/80/80) no-repeat 50% 50% scroll #D8D4D5;
        background-size: cover;
    }

    button.baby {
        background: url(http://www.lendmeyourear.net/bits/images/portrait-medium.jpg) no-repeat 50% 50% scroll #D8D4D5;
        background-size: cover;
    }

    button.logo {
        background: url(http://www.lendmeyourear.net/bits/images/fb-medium.jpg) no-repeat 50% 50% scroll #D8D4D5;
        background-size: cover;
    }

    button.submit {
        text-shadow: 1px 1px #777;
        background-color: #00b5e9;
        color: #fff;
    }

    button.submit:active {
        background-color: #03a8d8;
        color: #f7f7f7;
    }

    button.cancel {
        text-shadow: 1px 1px #333;
        background-color: #ab1818;
        color: #fff;
        border: 1px solid #333;
    }

    button.cancel:active {
        background-color: #921616;
        color: #f7f7f7;
    }

    button.primary {
        text-shadow: 1px 1px #333;
        background-color: #80a000;
        color: #fff;
        border: 1px solid #333;
    }

    button.primary:active {
        background-color: #728f00;
        color: #f7f7f7;
    }

    button.bubble:before {
        content: " ";
        display: block;
        width: 100%;
        height: 30%;
        top: 0;
        left: 0;
        right: 0;
        position:absolute;
        background-color: #FFFFFF;
        border-radius: 2px 2px 50% 50%;
        opacity: .30;
    }

    button.bubble-left:before {
        content: " ";
        display: block;
        width: 100%;
        height: 50%;
        top: 0;
        left: 0;
        right: 0;
        position:absolute;
        background-color: #FFFFFF;
        border-radius: 2px 2px 0 100%;
        opacity: .30;
    }

    button.bubble-inverse:after {
        content: " ";
        display: block;
        width: 100%;
        height: 30%;
        bottom: 0;
        left: 0;
        right: 0;
        position:absolute;
        top: 70%;
        background-color: #000000;
        border-radius: 50% 50% 2px 2px;
        opacity: .10;
    }

    .keyboard-grid button {
        margin: 0 3px 9px 0;
    }

    button.keyboard:before {
        content: " ";
        display: block;
        width: 100%;
        height: 15%;
        top: 0;
        left: 0;
        right: 0;
        position:absolute;
        background-color: #FFFFFF;
        border-radius: 2px 2px 0 0;
        opacity: .30;
    }

    button.keyboard:after {
        content: " ";
        display: block;
        width: 100%;
        height: 15%;
        bottom: 0;
        left: 0;
        right: 0;
        position:absolute;
        top: 85%;
        background-color: #000000;
        border-radius: 0 0 2px 2px;
        opacity: .20;
    }

    button.keyboard-rounded:before {
        content: " ";
        display: block;
        width: 100%;
        height: 15%;
        top: 0;
        left: 0;
        right: 0;
        position:absolute;
        background-color: #FFFFFF;
        border-radius: 2px 2px 50% 50%;
        opacity: .30;
    }

    button.keyboard-rounded:after {
        content: " ";
        display: block;
        width: 100%;
        height: 15%;
        bottom: 0;
        left: 0;
        right: 0;
        position:absolute;
        top: 85%;
        background-color: #000000;
        border-radius: 50% 50% 2px 2px;
        opacity: .20;
    }
</style>

<!--[if lt IE 9]>
<style type="text/css">
    a:before, a:after {
        background:transparent !important;
    }
</style>
<![endif]-->

[1]: https://github.com/leejordan/3d-css-buttons
[2]: http://www.lendmeyourear.net/bits/3d-css-buttons.html
