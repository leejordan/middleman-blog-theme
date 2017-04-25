---
title: CSS animated cartoon characters
slug: css3-animated-cartoon-characters
date: 2014-01-21
tags: css3, animtation, design, responsive, javascript
---

There are a lot of good resources out there for css animations, most notably the excellent [animate.css][3] but I needed to create some animations for some kid's cartoon characters for an ongoing project at work and this was the result. I decided to throw it up on github in case it is useful to anybody else.

The best way to get the latest version of this is [on github][1] or you can view the source by [viewing the demo][2]

## Demo

Click or tap on the characters below to see their animations

<p id="stage">
    <img id="mr-punnet" class="animate hop click-shake" src="http://www.lendmeyourear.net/middleman/media/mr-punnet.png" alt="mr-punnet" />
    <img id="monsieur-le-box" class="animate hop click-jump" src="http://www.lendmeyourear.net/middleman/media/monsieur-le-box.png" alt="monsieur-le-box" />
    <img id="letterbox-face" class="animate hop click-flip" src="http://www.lendmeyourear.net/middleman/media/letterbox-face.png" alt="letterbox-face" />
    <img id="goody-girl" class="animate hover click-fly" src="http://www.lendmeyourear.net/middleman/media/goody-girl.png" alt="goody girl" />
</p>


There are 6 animations at the time of writing:

*   hop
*   shake
*   jump
*   flip
*   hover
*   fly

<style>
#stage {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
    margin: 0 auto;
}
.animate {
    position: absolute;
    cursor: pointer;
}

#goody-girl {
    left: 75%;
    bottom: 50%;
}

#monsieur-le-box {
    left: 25%;
    bottom: 2%;
}

#letterbox-face {
    left: 50%;
    bottom: 2%;
}

#mr-punnet {
    left: 5%;
    bottom: 2%;
}

.hop {
    -webkit-animation: hop 1s infinite normal linear;
            animation: hop 1s infinite normal linear;
}

.shake {
    -webkit-animation: shake 0.1s 3 normal linear;
            animation: shake 0.1s 3 normal linear;
}

.jump {
    -webkit-animation: jump 1s 1 normal linear;
            animation: jump 1s 1 normal linear;
}

.flip {
    -webkit-animation: flip 1s 1 normal ease-in-out;
            animation: flip 1s 1 normal ease-in-out;
}

.hover {
    -webkit-animation: hover 1s infinite  normal ease-in-out;
            animation: hover 1s infinite  normal ease-in-out;
}

.fly {
    -webkit-animation: fly 2s 1 normal ease-in-out;
            animation: fly 2s 1 normal ease-in-out;
}

@-webkit-keyframes hop {
    0% {
        -webkit-transform: translate(0%, 0%) rotate(0deg);
                transform: translate(0%, 0%) rotate(0deg);
    }
    25% {
        -webkit-transform: translate(4%, 4%) rotate(5deg);
                transform: translate(4%, 4%) rotate(5deg);
    }
    50% {
        -webkit-transform: translate(0%, 0%) rotate(0deg);
                transform: translate(0%, 0%) rotate(0deg);
    }
    75% {
        -webkit-transform: translate(-4%, 4%) rotate(-5deg);
                transform: translate(-4%, 4%) rotate(-5deg);
    }
    100% {
        -webkit-transform: translate(0%, 0%) rotate(0deg);
                transform: translate(0%, 0%) rotate(0deg);
    }
}

@-webkit-keyframes shake {
    0%, 50%, 100% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
    25% {
        -webkit-transform: translate(5%, 0%);
                transform: translate(5%, 0%);
    }
    75% {
        -webkit-transform: translate(-5%, 0%);
                transform: translate(-5%, 0%);
    }
}

@-webkit-keyframes jump {
    0% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
    5% {
        -webkit-transform: translate(0%, 5%);
                transform: translate(0%, 5%);
    }
    10% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
    25% {
        -webkit-transform: translate(0%, -90%);
                transform: translate(0%, -90%);
    }
    50% {
        -webkit-transform: translate(0%, -100%);
                transform: translate(0%, -100%);
    }
    75% {
        -webkit-transform: translate(0%, -90%);
                transform: translate(0%, -90%);
    }
    90% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
    95% {
        -webkit-transform: translate(0%, 5%);
                transform: translate(0%, 5%);
    }
    100% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
}

@-webkit-keyframes flip {
    0% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
    5% {
        -webkit-transform: translate(0%, 5%);
                transform: translate(0%, 5%);
    }
    10% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
    25% {
        -webkit-transform: translate(0%, -90%) rotate(0deg);
                transform: translate(0%, -90%) rotate(0deg);
    }
    50% {
        -webkit-transform: translate(0%, -100%) rotate(360deg);
                transform: translate(0%, -100%) rotate(360deg);
    }
    75% {
        -webkit-transform: translate(0%, -90%);
                transform: translate(0%, -90%);
    }
    90% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
    95% {
        -webkit-transform: translate(0%, 5%);
                transform: translate(0%, 5%);
    }
    100% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
}

@-webkit-keyframes hover {
    0%, 100% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
    50% {
        -webkit-transform: translate(0%, 10%);
                transform: translate(0%, 10%);
    }
}

@-webkit-keyframes fly {
    0% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
    50% {
        -webkit-transform: translate(-200%, 0%);
                transform: translate(-200%, 0%);
    }
    55% {
        -webkit-transform: translate(-200%, 0%);
                transform: translate(-200%, 0%);
        -webkit-transform: rotatey(180deg);
                transform: rotatey(180deg);
        -webkit-transform-origin: -50% 0%;
                transform-origin: -50% 0%;
    }
    95% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
        -webkit-transform: rotatey(180deg);
                transform: rotatey(180deg);
    }
    100% {
        -webkit-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
    }
}
</style>

<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>

<script>
    var shake = jQuery(".click-shake");
    shake.click(function () {
        jQuery(this).addClass('shake');
        jQuery(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                jQuery(this).removeClass('shake');
            });
    });

    var hover = jQuery(".click-fly");
    hover.click(function () {
        jQuery(this).addClass('fly');
        jQuery(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                jQuery(this).removeClass('fly');
            });
    });

    var hop = jQuery(".click-jump");
    hop.click(function () {
        jQuery(this).addClass('jump');
        jQuery(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                jQuery(this).removeClass('jump');
            });
    });

    var hopflip = jQuery(".click-flip");
    hopflip.click(function () {
        jQuery(this).addClass('flip');
        jQuery(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
                jQuery(this).removeClass('flip');
            });
    });
</script>

[1]: https://github.com/leejordan/cartoon
[2]: http://lendmeyourear.net/bits/animations
[3]: http://daneden.github.io/animate.css/
