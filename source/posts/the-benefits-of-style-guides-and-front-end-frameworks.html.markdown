---
title: The benefits of style guides and front-end frameworks
slug: the-benefits-of-style-guides-and-front-end-frameworks
date: 2017-03-15
tags: accessibility, css3, design, html5, javascript, ux
---

I will always advocate for the creation of a style guide and front end framework for any website that is more than a handful of static pages. Ideally this should be kept seperate from the rest of your codebase.

Whether you roll your own or use an existing front end framework with a bit of personalisation (a modified version of bootstrap for example) the benefits are huge for designers, developers and users.

## Sensible defaults and visual consistency

Your front end framework should provide a solid baseline on which to iterate. Every common HTML element should have a default style and your documentation should provide opinionated directions on their appropriate use.

## Standardised UI components

Certain components you can identify as being more than a collection of basic HTML elements which will regularly be used across your sites should be standardised. This will ensure that no matter which page or site a user visits, they will see and interact with roughly the same familiar functionality. Examples of this include dropdown menus and pagination.

## Less duplication of effort

By having a seperate front end framework you can focus your effort on building a component once, and rolling it out across all your pages or sites. I've personally worked for a company that had 3 seperate implementations of a carousel on one website which was probably because nobody knew of the existence of the other carousels and they therefore chose to work on adding a new implementation.

Keeping all your front end code in one place (and documenting it) results in clarity over what components are available and allows focus on getting the implmentation right once.

## Clearly see changes

As a standalone codebase, you can carefully review all changes in isolation instead of having css or javascript changes bundled in with back end changes. When your front end code is isolated, you can more easily track changes to classes and components and identify any problems that may arise from these changes.

## Keep it clean and lean

As discussed before, you can concentrate on delivering the highest levels of performance and accessiblity on your front end by focusing your efforts in one place.

When your front end code is tied up in a monolithic codebase and is often worked on alongside back end development work it becomes hard to keep track of what is changing and as a consequence CSS and JavaScript files can quickly become bloated. I've worked with many codebases and companies where this problem occurs.

Perhaps the best way to illustrate this improvement is by comparing CSS specificity graphs of a large codebase I created a front end framework for.

With CSS specificity graphs like this, spikes are bad news, and the general trend should be towards higher specificity later in the stylesheet. These graphs reflect the before and after of a large site before and after the introduction of a front end framework:

Before front end framework:
![](/images/the-benefits-of-style-guides-and-front-end-frameworks/grazestrap-specificity.jpg)

After front end framework:
![](/images/the-benefits-of-style-guides-and-front-end-frameworks/pistachio-specificity.jpg)

## Increase collaboration & buy in

When you have an established front end framework and style guide you are better able to educate new members of the team and any third parties that you may work with on appropriate use of your frond end components
