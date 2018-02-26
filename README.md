# Fuzz-App

## What Is It?
A single static HTML page built to illustrate a responsive nav skeleton cross-browser and platform compatible written in vanilla everything.

All scripts are processed on the client-side (in the browser). Requires no server or server-side processing or compiling.

Pure CSS for Responsive behavior. No JS.

#### Tools:
* Pure HTML/CSS/JS, FlexBox
* XMLHttpRequest Object + JSON


#### Supporting Tools:
* [Google Fonts](https://fonts.google.com/)
* [FontAwesome](https://fontawesome.com/)
* [Vue.js](https://vuejs.org/) (for placeholder body content only)

#### Installation
Requires no installation. Can be run from any local machine by clicking on html file. 

## Resources and Guidelines
Google Responsive Web Design Patterns - https://developers.google.com/web/fundamentals/design-and-ux/responsive/

CSS Breakpoints - 
https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862

W3C Resolutions and Statistics - https://www.w3schools.com/browsers/browsers_display.asp
http://viewportsizes.com/

Viewport Testing - Chrome Dev Tools - 
https://developers.google.com/web/tools/chrome-devtools/

### Breakpoints for Resolutions + Viewports 
Split between two main categories: Desktops + Laptops or Tablets + Smartphones. Roughly-
* smaller than 500 px (phone)
* larger than 500 px (tablet)
* larger than 600 px (tablet landscape)
* larger than 900 px (laptop, small devices)
* larger than 1000 px (laptop, medium devices)
* larger than 1800px (desktop, large devices)

### Responsive Pattern
**Flex Row Auto Height + centered**
* 12 items
* 800px-1200px

**Flex Row Auto Height + left**
* 12-24 items
* 800px-1200px
* 24+ items
* 500px-800px

**Flex Column + left**
* 24+ items
* 800px-1200px

**Dropdown + centered**
* Mobile
* any number of items
* 600px or less


### Notes
Great opportunity to use a CSS Pre-Processor SASS or LESS @mixins to set variable values

CSS can be written and organized in many ways given the tools used, situation, and guidelines. My approach, get a barebones down that fits most of what I'm looking for. Then step back, consider re-factoring options. Choose one.

Ended up spending a lot of time doing research on best practices for responsive layout patterns, viewport, resolution, and device best practices, best solutions for css, so did not use an application framework like React.

Design may not look similar but the skeleton is there. Chosen display styles are for ease of reference rather than to translate design.

Design Process - I coded out various menu displays. Played with those to see responsive behaviors. Combined all bevaiors into one master nav.

To see block elements turn on OUTLINE in css line 6.

Not tested across PC but it uses HTML/CSS/JS supported by all platforms and browsers at worst IE11+. (*Must include css prefixes).