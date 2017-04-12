---
title: How to embed Silverlight using javascript
slug: how-to-embed-silverlight-using-javascript
date: 2012-06-05
tags: javascript, silverlight
---

This was written in response to the headache I had getting silverlight working via javascript. The Microsoft documentation is pretty good but there's far too much of it and it lacks a "quick start" guide so I thought I'd write a concise introduction to the basics of getting Silverlight working via javascript.

## 1) Get Silverlight.js

From [microsoft][1] and include it in your page:

```html
<script type="text/javascript" src="sl/Silverlight.js"></script>
```

## 2) Set up a parent element

```html
<div id="silverlightControlHost"></div>
```

## 3) Create the Silverlight object

Using the `createObject` function in Silverlight.js you can now create your Silverlight object. Here's an example:

```html
<script type="text/javascript">
Silverlight.createObject(
    "sl/silverlight_test.xaml",  // source
    document.getElementById('silverlightControlHost'),  // parent
    "slPlugin",  // id for generated Silverlight object
    {
        width: "400", height: "100", background: "#CCCCCC"
    }, // property values of the silverlight object
    {  }, // event handlers (optional)
    "param1=value1,param2=value2", //extra params (optional)
    "context"    // context (optional)
);
</script>
```

## More detail

Here's an explanation of the various parameters used above in `Silverlight.createObject`

1) Your silverlight file you want to embed on the page:

```js
"sl/silverlight_test.xaml",  // source
```

2) The html element on the page that will become the parent element of your silverlight object. The Microsoft documentation suggests just providing the id of the element only but if you do not target it using javascript (`document.getElementById`), it will not work in all browsers:

```js
document.getElementById('silverlightControlHost'),  // parent
```

3) The id your embedded Silverlight object will have:

```js
"slPlugin",  // id for generated Silverlight object
```

4) Various property values for the silverlight object. Most important are width and height. If you want to look into this in more detail, [here's the Microsoft documentation][2]:

```js
{
    width: "400", height: "100", background: "#CCCCCC"
}, // property values of the silverlight object
```

5) This is optional but you can specify various event handlers here such as onLoad or onError. At the very least, it's a good idea to have some kind of error handling and there is an example of how to do this near the end of this article. You can leave this parameter empty but must still include the braces {}

```js
{  }, // event handlers (optional)
```

6) You can optionally provide custom initialization parameters for the Silverlight plugin you are using. [More info here][3]:

```js
"param1=value1,param2=value2", //extra params (optional)
```

7) This gives the generated Silverlight object a specific context which is useful if you are using several seperate silverlight objects and want to be able to isolate each of them for some further functionality using the OnLoad event handler. There's an example of this being used [on this page][4]

```js
"context"    // context (optional)
```

## A basic example

This is the most basic example of embedding a silverlight object on a page using javascript providing only the bare minimum of parameters.

```html
<!DOCTYPE HTML>
<html>
    <head>
        <script type="text/javascript" src="sl/Silverlight.js"></script>
    </head>
    <body>
        <div id="silverlightControlHost"></div>
        <script type="text/javascript">
            Silverlight.createObject(
                "sl/silverlight_test.xaml",
                document.getElementById('silverlightControlHost'),
                "slPlugin",
                { width: "400", height: "100", background: "#CCCCCC" },
                {  },
                "",
                ""
            );
        </script>
    </body>
</html>

```

Which gives us this Silverlight object...

<iframe class="border" src="http://www.lendmeyourear.net/bits/silverlight_basic.html" width="400" height="100" frameborder="no" scrolling="yes"></iframe>

## Detect if Silverlight is installed

Now we have Silverlight.js on our page we can use the various functions within. One useful function is `isInstalled` which we can take advantage of to detect if the user has silverlight installed and perhaps do something different if they do not have it installed. The default behaviour of Silverlight is to show a download link if the user doesn't have it installed but if you want to create a custom solution for this eventuality it's easy to do.

```js
if (Silverlight.isInstalled("4.0")) {
    // do something now we know Silverlight is installed
} else {
    // do something different for users without Silverlight
}
```

*NB: The version number is required because if you do not provide it the function will always return true and it will treat a visitor as having silverlight installed even when they do not!*

## Error handling using event handlers

If you wish to perform error handling you can do so easily enough by adding an event handler for the `onError` event in the 5th parameter of your silverlight object (going by the numbering system above). For example... The following example will call a function called `onSLError` when silverlight returns an error of any kind.


```js
{ onError: onSLError },
```

And here's an example of a basic function called `onSLError` which will be called in the event of a silverlight error of any kind:

```js
function onSLError (sender, errorArgs) {
    alert('error');
}
```

There's a lot more information on error handling on [the microsoft site][5] and a generic [example of a "catch-all" error handler][6].

 [1]: http://archive.msdn.microsoft.com/silverlightjs
 [2]: https://msdn.microsoft.com/en-us/library/cc838268(v=VS.95).aspx
 [3]: https://msdn.microsoft.com/en-us/library/cc189004(v=vs.95).aspx
 [4]: https://msdn.microsoft.com/en-us/library/cc265155(v=vs.95).aspx
 [5]: http://msdn.microsoft.com/en-us/library/cc189070%28v=vs.95%29.aspx
 [6]: http://msdn.microsoft.com/en-us/library/bb404737.aspx
