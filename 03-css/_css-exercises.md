# CSS Exercises

- [Exercise 01 - Selectors](#ex01)
- [Exercise 02 - Pseudo](#ex02)
- [Exercise 03 - Specificity](#ex03)
- [Exercise 04 - Layout](#ex04)
- [Exercise 05 - Position](#ex05)
- [Exercise 06 - Media Queries](#ex06)

## <a id="ex01"></a> Exercise 01 - Selectors

Recreate the snapshot below by using attribute, descendant, child, and sibling selectors.

<img src="../_assets/css-exercises/css-ex01-selectors.png" height=200 alt="screenshot of an exercise">

## <a id="ex02"></a> Exercise 02 - Pseudo

Recreate the snapshot below using pseudo elements.

<img src="../_assets/css-exercises/css-ex02-pseudo.png" height=200 alt="screenshot of an exercise">

## <a id="ex03"></a> Exercise 03 - Specificity

Calculate the specificity of the rules below.

```css
nav .list-item > a {
}

#main::first-letter {
}

input[type] {
}

section .main::first-line {
}

nav ul.menu li#first a:not([class='visited']) {
}

div ol li ul li ol li ul li a {
}
```
CSS Specificity is given by: (a, b, c)
Where:
a = number of ID selectors
b = number of class, attribute selectors, and pseudo-classes
c = number of element and pseudo-element selectors.

1. ```nav .list-item > a {}``` has a specificity of (0, 1, 2)
2. ```#main::first-letter {}``` has a specificity of (1, 0, 1)
3. ```input[type] {}``` has a specificity of (0, 1, 1)
4. ```section .main::first-line {}``` has a specificity of (0, 1, 2)
5. ```nav ul.menu li#first a:not([class="visited"]) {} ``` has a specificity of (1, 2, 4)
6. ```div ol li ul li ol li ul li a {}``` has a specificity of (0, 0, 12)


## <a id="ex04"></a> Exercise 04 - Layout

Update the layout in the starter files to match the screenshots below.

<img src="../_assets/css-exercises/css-ex04-layout-01.png" height=200 alt="screenshot of a layout">
<img src="../_assets/css-exercises/css-ex04-layout-02.png" height=200 alt="screenshot of a layout">

## <a id="ex05"></a> Exercise 05 - Position

Update the layout in the starter files to match the screenshots below.

<img src="../_assets/css-exercises/css-ex05-position-01.png" height=300 alt="screenshot of a layout">
<img src="../_assets/css-exercises/css-ex05-position-02.png" height=300 alt="screenshot of a layout">

## <a id="ex06"></a> Exercise 06 - Media Queries

Update the layout in the starter files to match the screenshots below.

<img src="../_assets/css-exercises/css-ex06-media-queries-01.png" height=200 alt="screenshot of a layout">
<img src="../_assets/css-exercises/css-ex06-media-queries-02.png" height=200 alt="screenshot of a layout">
<img src="../_assets/css-exercises/css-ex06-media-queries-03.png" height=200 alt="screenshot of a layout">
