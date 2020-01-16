---
title: CSS only flowcharts
slug: css-only-flowcharts
date: 2019-12-20
tags: css3, design, html5
---

Is it possible to generate flowcharts on a web page using only CSS and HTML? The short answer is yes (but only for simple charts).

I've occasionally run into the requirement to display flow charts on the web. I've never been entirely satisfied with any of the solutions I've landed on. I've generated them as flat images, or rendered them on a canvas element. In my efforts to render a more accessible flow chart, I wondered if you can achieve this with just HTML and CSS.

I spent an enjoyable few hours poking away and have produced a few demos which show how it could work, but only for quite simple flow charts.

## Basic SCSS example

There is far more to discuss that I've outlined here, but this should give you the basic idea before I show a few examples. For a deeper dive, [view the full SCSS on github][1].

For a vertical family tree style flow chart, Take a set of nested unordered lists:

```
<ul>
  <li>
    Arthur Thucksake
    <ul>
      <li>
        Harry Thucksake
        <ul>
          <li>
            Oswald Thucksake
          </li>
        </ul>
      </li>
      <li>
        Theresa Thucksake
        <ul>
          <li>
            Melinda Pickles
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

Use flexbox to setup the lists so that they flow nicely and are horizontally centered:

```
ul {
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}
```

Use pseudo elements to create the lines that visually connect each item in the list:

```
li {
  &:before {
    content: '';
    position: absolute;
    top: 1em;
    width: 100%;
    border-top: 3px solid black;
  }

  &:after {
    content: '';
    position: absolute;
    top: 1em;
    left: 50%;
    height: 1em;
    border-left: 3px solid black;
  }
}
```

Use descendent selectors to handle direct children of the list (so that we don't add lines where they are not needed)

```
> li {
    &:before,
    &:after {
      display: none;
    }
  }
``` 

## Basic family tree example

<div>
<ul class="flow-family-tree">
  <li>
    Arthur Thucksake
    <ul>
      <li>
        Harry Thucksake
        <ul>
          <li>
            Oswald Thucksake
          </li>
        </ul>
      </li>
      <li>
        Theresa Thucksake
        <ul>
          <li>
            Melinda Pickles
          </li>
          <li>
            Brian Pickles
            <ul>
              <li>
                Steve Giblets
              </li>
              <li>
                Vanessa Giblets
              </li>
              <li>
                Wilhelm Giblets
              </li>
            </ul>
          </li>
          <li>
            Timothy Pickles
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
</div>

This looks like a decent solution at first but it has one important limitation: how do you indicate a link between items in the same row? Take this example of a family tree where you can see links horizontally:

![family tree example][2]

How do you express that relationship with only HTML and CSS? In short, I'm not sure you can, at least not with the markup I'm using as an example. Perhaps two spans inside the first list item? We could draw a line between the two with the same pseudo element approach that we use for the vertical lines.

```
<li>
    <span>Arthur Thucksake</span>
    <span>Gemina Thucksake</span>
</li>
```

If we could resolve this then our solution would work well for more complex family trees and even organisational charts. But for now it's starting to get more and more complex so I'll think further about this issue in the future. Let's move on to the next example...

## Dendogram example

<ul class="flow-dendrogram">
  <li>
    Hominoidia
    <ul>
      <li>
        Hylobatidae
        <ul>
          <li>
            Hylobates
          </li>
        </ul>
      </li>
      <li>
        Hominidae
        <ul>
          <li>
            Ponginae
          </li>
          <li>
            Homininae
            <ul>
              <li>
                Gorillini
              </li>
              <li>
                Hominini
              </li>
              <li>
                Homo
              </li>
            </ul>
          </li>
          <li>
            Pongo
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

A dendrogram, among other things, is used to display the evolutionary relationships among various biological groups. This seems ideal for our HTML/CSS solution because we only ever have one ancestor so we don't need to show relationships between nodes at the same level.

## Decision tree example

<ul class="flow-decision-tree">
  <li>
    <span class="terminator">Start</span>
    <ul>
      <li>
        <span class="process">Answer phone</span>
        <ul>
          <li>
            <span class="decision">How can we help?</span>
            <ul>
              <li>
                <span class="process">Billing enquiry</span>
                <ul>
                  <li>
                    <span class="process">Take name and company</span>
                    <ul>
                      <li>
                        <span class="process">Transfer to Finance team (ext. 1324)</span>
                        <ul>
                          <li>
                            <span class="terminator">End</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span class="process">Customer services</span>
                <ul>
                  <li>
                    <span class="process">Transfer to Customer services (ext. 8753)</span>
                    <ul>
                      <li>
                        <span class="terminator">End</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

In a decision tree, we need to visually distinguish the various node types, so we're using `<span>` elements inside our list items and styling them as required. For example:

```
.terminator {
  display: flex;
  align-items: center;
  padding: 1em 2em;
  border-radius: 2vw;
  background-color: #c9c9c9;
}
```

This allows us to build decision trees in a single direction. However, there is one important limitation to this solution which is sometimes a decision tree will want to link back to an earlier node. We can't do that here, but for decision trees without that requirement, this should work.

## Conclusion

It's certainly possible to render *simple* flow charts in various styles using HTML and CSS only, as long as you are willing to accept the limitations. It would therefore be possible to dynamically render simple charts like this from nested data objects, such as JSON strings.

Check out [the code on github][3] if you want, and let me know if you have any suggestions.


[1]: https://github.com/leejordan/flow/tree/master/scss/includes
[2]: /images/posts/css-only-flowcharts/family-tree.png
[3]: https://github.com/leejordan/flow/tree/master/

<style>
.flow-family-tree {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  text-align: center;
  font-size: 1.5vw;
}

@media only screen and (min-width: 900px) {
  .flow-family-tree {
    font-size: 18px;
  }
}

.flow-family-tree *,
.flow-family-tree *::after,
.flow-family-tree *::before {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
  list-style: none;
}

.flow-family-tree ul {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  position: relative;
  padding: 1em 0;
}

.flow-family-tree ul:after {
  content: '';
  position: absolute;
  top: 1em;
  left: 50%;
  height: 1em;
  border-left: 3px solid black;
}

.flow-family-tree > ul {
  padding: 0;
}

.flow-family-tree li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 3em 1em 0 1em;
}

.flow-family-tree li:before {
  content: '';
  position: absolute;
  top: 1em;
  width: 100%;
  border-top: 3px solid black;
}

.flow-family-tree li:after {
  content: '';
  position: absolute;
  top: 1em;
  left: 50%;
  height: 1em;
  border-left: 3px solid black;
}

.flow-family-tree li:first-child:before {
  left: 50%;
  width: 50%;
}

.flow-family-tree li:last-child:before {
  right: 50%;
  width: 50%;
}

.flow-family-tree li:only-child:before {
  display: none;
}

.flow-family-tree > li {
  padding: 0;
}

.flow-family-tree > li:before, .flow-family-tree > li:after {
  display: none;
}

.flow-dendrogram {
  box-sizing: border-box;
  outline: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  text-align: center;
  font-size: 2vw;
}

@media only screen and (min-width: 900px) {
  .flow-dendrogram {
    font-size: 18px;
  }
}

.flow-dendrogram *,
.flow-dendrogram *::after,
.flow-dendrogram *::before {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
  list-style: none;
}

.flow-dendrogram ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  padding: 0;
}

.flow-dendrogram ul:after {
  content: '';
  position: absolute;
  top: 50%;
  left: .5em;
  width: 1em;
  border-top: 3px solid black;
}

.flow-dendrogram > ul {
  padding: 0;
}

.flow-dendrogram li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: .5em 1em .5em 3em;
}

.flow-dendrogram li:before {
  content: '';
  position: absolute;
  top: 0;
  left: 1.5em;
  height: 100%;
  border-left: 3px solid black;
}

.flow-dendrogram li:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 1.5em;
  width: 1em;
  border-top: 3px solid black;
}

.flow-dendrogram li:first-child:before {
  top: 50%;
  height: 50%;
}

.flow-dendrogram li:last-child:before {
  bottom: 50%;
  height: 50%;
}

.flow-dendrogram li:only-child:before {
  display: none;
}

.flow-dendrogram > li {
  padding: 0;
}

.flow-dendrogram > li:before, .flow-dendrogram > li:after {
  display: none;
}

.flow-decision-tree {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  font-size: 2vw;
}

@media only screen and (min-width: 900px) {
  .flow-decision-tree {
    font-size: 18px;
  }
}

.flow-decision-tree *,
.flow-decision-tree *::after,
.flow-decision-tree *::before {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
  list-style: none;
}

.flow-decision-tree ul {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  position: relative;
  padding: 0;
}

.flow-decision-tree ul:after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  height: 1em;
  border-left: 3px solid black;
}

.flow-decision-tree > ul {
  padding: 0;
}

.flow-decision-tree li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 2em 1em 0 1em;
}

.flow-decision-tree li:before {
  content: '';
  position: absolute;
  top: 1em;
  width: 100%;
  border-top: 3px solid black;
}

.flow-decision-tree li:after {
  content: '';
  position: absolute;
  top: 1em;
  left: 50%;
  height: 1em;
  border-left: 3px solid black;
}

.flow-decision-tree li:first-child:before {
  left: 50%;
  width: 50%;
}

.flow-decision-tree li:last-child:before {
  right: 50%;
  width: 50%;
}

.flow-decision-tree li:only-child:before {
  display: none;
}

.flow-decision-tree > li {
  padding: 0;
}

.flow-decision-tree > li:before, .flow-decision-tree > li:after {
  display: none;
}

.terminator {
  display: flex;
  align-items: center;
  padding: 1em 2em;
  border-radius: 2vw;
  background-color: #c9c9c9;
}

.process {
  display: flex;
  align-items: center;
  padding: 1em 2em;
  background-color: #c9c9c9;
}

.decision {
  position: relative;
  display: flex;
  align-items: center;
  padding: 1em 2em;
  background-color: #c9c9c9;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
</style>

