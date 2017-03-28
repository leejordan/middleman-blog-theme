---
title: My approach to unobtrusive javascript
slug: my-approach-to-unobtrusive-javascript
date: 2015-01-22
tags: accessibility, javascript
---

> Unobtrusive JavaScript is a way of writing JavaScript so that if for any reason your JavaScript is not working correctly your web page should still perform its core function

There's nothing new about this concept and I certainly didn't invent it but I just wanted to share why I personally think it is important to ensure that JavaScript does not get in the way of users' ability to interact with the websites that I build.

## Why is unobtrusive JavaScript important?

I'm not against JavaScript (in fact I love it) but I have to accept that it is the most unreliable part of the front end web stack. Unlike HTML and CSS where code that the browser does not understand is simply ignored, a broken line of JavaScript will break the script entirely. There's solid data behind this too.

**According to [a recent test performed by gov.uk][1], 1 in 93 (1.1%) of users failed to receive JavaScript enhancements for one reason or another.** By not relying on JavaScript I do not obstruct users from their goal if I can help it. I can still build cool stuff with JavaScript, I just do so by applying it as a layer on top of a solid, functional foundation.

## My principles of unobtrusive JavaScript

1.  My feature should never rely on JavaScript being available.
2.  If JavaScript happens to be available, I can present my users with an extra layer of usability.

In practical terms and by way of example this means things like:

1.  I build for core functionality first without JavaScript.
2.  All links must have a href.
3.  All forms must post to an endpoint that correctly handles the request.

## What are the exciting ways that JavaScript can fail?

1.  Your JavaScript file is not downloaded fully (for example on a poor 3G connection).
2.  Your JavaScript file uses a method that the browser does not support.
3.  Your JavaScript file has a bug that only affects certain browsers.
4.  Your Javascript file has a bug.
5.  Your JavaScript file is blocked by a firewall.
6.  Your user's security settings prohibit the use of JavaScript.
7.  Your user has explicitly turned JavaScript off.

Hopefully this list illustrates that it's not just a question of buggy code. Obviously the onus is on me as a developer reduce the amount of bugs I introduce but often the availability of JavaScript is out of my hands entirely.

## Real world examples

There are lots of real world examples where not following the principles of unobtrusive JavaScript has caused real issues for huge numbers of people. For example, a large number of websites are broken in China because they use a JavaScript library delivered from Google's own CDN which is blocked by the ["Great Firewall of China"][2]</a>.

Closer to home in the UK, the default network-level blocking by Internet Service Providers (A.K.A. The David Cameron Porn Filter) also blocks some domains regardless of content, so although I might not (currently) care about any potential market in China, I do care about being reachable by a UK audience. It's unlikely to be a concern for me but it makes sense to prepare for any eventuality.

Sky broadband parental controls in the UK [recently blocked code.jquery.com][3] which is a commonly used CDN for the jQuery library. Lots of Sky broadband users had some or all JavaScript made unavailable to them.

In all of these examples, the impact of this could have been entirely mitigated by following the principles of unobtrusive JavaScript. There's no good reason why you should cause problems for your users by not following these principles which will ensure your site works without JavaScript.

## Conclusion

Even if I managed never to introduce a single bug into the JavaScript libraries used across my sites, it's still possible that browser issues, security issues and connection issues outside my control will make JavaScript unavailable. Only by building my core functionality without JavaScript can I be sure that I do not obstruct our users' goals.

There's some extra value associated with my approach which is that I can quickly build a "minimum viable candidate", enabling rapid iteration of concept and user flows. I can then spend more time enhancing it with JavaScript once I have settled on something that works.

As always, let me know if you have any thoughts on this approach.

[1]: https://gds.blog.gov.uk/2013/10/21/how-many-people-are-missing-out-on-javascript-enhancement/
[2]: http://en.wikipedia.org/wiki/Golden_Shield_Project
[3]: http://www.theguardian.com/technology/2014/jan/28/sky-broadband-blocks-jquery-web-critical-plugin
