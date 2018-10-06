# RepeatJS 
by Leonhard Pfob

## How it works!

First you need to include the script. You can either use the way shown in the example or download and include it yourself. 

(The file to download and include is located under "/src/compiled/repeat.min.js")

```html
<html>
    <head>
        ...
        <script src="https://libs.3-klicks.de/repeat.min.js"></script>
        ...
    </head>
    ...
</html>
```

After we included the script we need to apply the attribute "repeat-element" with a numeric value to an element. This step could look something like this:

```html
<h1 repeat-element="10">Hello World!!</h1>
```

In this case the header would be displayed 10 times. The expected output is:

```html
<h1>Hello World!!</h1>
<h1>Hello World!!</h1>
<h1>Hello World!!</h1>
... 7 more times
```

### Example 1 - Hello World

This is the way it would look, if you followed the instructions step by step:

```html
<html>
    <head>
        <script src="https://libs.3-klicks.de/repeat.min.js"></script>
    </head>
    <body>
        <h1 repeat-element="10">Hello World!!</h1>
    </body>
</html>
```

### Example 2 - Hello Planet

You can also use the repeat attribute in bigger structures. If a child element is repeatet and its parent, too, it will repeat the child element first and copy them in every repeation of the parent element.

Lets repeat a div with a header of mutiple subheaders.

```html
<div repeat-element="3">
    <h1>Hello Planet!</h1>
    <h2 repeat-element="5">Hello World!</h2>
</div>
```

This would produce the following output:

```html
<div>
    <h1>Hello Planet!</h1>
    <h2>Hello World!</h2>
    <h2>Hello World!</h2>
    <h2>Hello World!</h2>
    <h2>Hello World!</h2>
    <h2>Hello World!</h2>
</div>
... 2 more times
```

## Purpose

"Why would I use this?" you might ask. Developing a web application you usually don't include the logic right away, but focus on getting all your elements ready. If you use example elements, you often have to copy them. If you change something up, you have to do so for every single one. Instead, you could use **repeat.js**, which helps you avoid this issue and stay organized.






