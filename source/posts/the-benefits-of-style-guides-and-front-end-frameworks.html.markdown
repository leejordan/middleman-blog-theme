---
title: The benefits of style guides and front-end frameworks
slug: the-benefits-of-style-guides-and-front-end-frameworks
date: 2017-03-15
tags: accessibility, css3, design, html5, javascript, ux
---

I will always advocate for the creation of a style guide and front end framework for any website that is more than a handful of static pages. Ideally this should be kept seperate from the rest of your codebase.

Whether you roll your own or use an existing front end framework with a bit of personalisation (a modified version of bootstrap for example) the benefits are huge for designers, developers and users.

## Sensible defaults

The intention here is that our front end framework should provide a solid baseline on which to iterate. It doesn't contain every possible front end web component you can imagine but provides a platform on which to build.

## Visual consistency

Every standard html element has a default style and our style guide provides opinionated directions on their appropriate use.

## Standardised consistent UI components

Certain components we've identified as regularly being used across our sites have been standardised to ensure no matter which graze website a user visits, they should see and interact with roughly the same familiar functionality. Examples of this include dropdown menus, pagination, and forms.

## Make your own choices
- we can change the look and feel across all our websites at once by releasing a new version of pistachio

## clearly see changes
- As a standalone repo, we can carefully review all changes in isolation instead of having css or javascript changes bundled in with back end changes

## keep it clean and lean
- we can concentrate on delivering the highest levels of performance and accessiblity on our front end by focusing our efforts in one place

When your front end code is tied up in a monolithic codebase and is often worked on alongside back end development work it becomes hard to keep track of what is changing and as a consequence CSS and JavaScript files can quickly become bloated. I've worked with many codebases and companies where this problem occurs.

Perhaps the best way to illustrate this improvement is by comparing CSS specificity graphs.

With CSS specificity graphs like this, spikes are bad news, and the general trend should be towards higher specificity later in the stylesheet. These graphs reflect the before and after of a large site before and after the introduction of a 

Before Pistachio:
![](/content/images/2016/02/grazestrap-specificity.png)

After Pistachio:
![](/content/images/2016/02/pistachio-specificity.png)

## Increase collaboration & buy in
- we have an established style guide with which to educate new members of the team and any third parties that we work with
