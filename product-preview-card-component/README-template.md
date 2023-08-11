# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)



## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](images\screenshot_done.png) idk why the quality is so bad

## My process

It took 3h54m and i guessed 4h so that was a very nice estimate actually! :D
I started with the mobile version and created the image and the div with the content and placed it in the middle. Then I worked up to down basically. I used flexbox and then another flexbox for the price-part to get it beside each other.

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to change image depending on desktop width.

I always struggle with starting by making everything in px-form, to then having a hard time making it responsive and having to change the prefixes.

I also learned how to add fonts

Im proud of this code even though i took it from a website haha
<picture>

<source
          srcset="images\image-product-mobile.jpg"
          media="(max-width: 600px)"
        />
<source
          srcset="images\image-product-desktop.jpg"
          media="(min-width: 601px)"
        />
<img id="image" src="image-product-desktop.jpg" />
</picture>

### Continued development

I will focus on making variables that is responsive to the page to make it easier to make it responsive

### Useful resources

- https://css-tricks.com/snippets/css/complete-guide-grid/ this always helps me with grid and flexbox
