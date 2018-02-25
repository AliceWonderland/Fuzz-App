# Fuzz-App

## What Is It?
A single static HTML page built to illustrate a responsive nav skeleton cross-browser and platform compatible written in vanilla everything.

All scripts are processed on the client-side (in the browser). There is no server-side processing or compiling.

Pure CSS for Responsive behavior. No JS.

### Responsive Skeleton Using:
Pure HTML/CSS/JS

XMLHttpRequest Object + JSON

CSS FlexBox

### Supporting Tools:
[Google Fonts](https://fonts.google.com/)

[FontAwesome](https://fontawesome.com/)

[Vue.js](https://vuejs.org/) (for placeholder body content only)

## Resources and Guidelines
Google Responsive Web Design Patterns - https://developers.google.com/web/fundamentals/design-and-ux/responsive/

CSS Breakpoints - 
https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862

W3C Resolutions and Statistics - https://www.w3schools.com/browsers/browsers_display.asp
http://viewportsizes.com/

Viewport Testing - Chrome Dev Tools - 
https://developers.google.com/web/tools/chrome-devtools/

### Breakpoints for Resolutions + Viewports 
Split between two main categories: Desktops + Laptops or Tablets + Smartphones.
* smaller than or equal to 768 px (smartphones)
* larger than 768 px (small devices, tablets)
* larger than 992 px (medium devices)
* larger than 1200px (large devices)

### Responsive Pattern
Flex Row for under 12 items
Flex Column for 12-20 items
Dropdown for 24 items and over

### Notes
Great opportunity to use a CSS Pre-Processor SASS or LESS @mixins to set variable values

Repeated styles in css for ease of cut/copy for now

CSS Prefixes for Brower Support

CSS can be written and organized in many ways given the tools used, situation, and guidelines. My approach, get a barebones down that fits most of what I'm looking for. Then step back, consider re-factoring options. Choose one.