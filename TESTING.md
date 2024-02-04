# Testing


Return back to the [README.md](README.md) file.


## Code Validation

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

- https://validator.w3.org/nu/?doc=https%3A%2F%2Fconor-timmis.github.io%2FFlip-Frenzy%2Findex.html

[screenshot](documentation/testing/index.png)

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

- https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fconor-timmis.github.io%2FFlip-Frenzy

[screenshot](documentation/testing/style.png)

My page is showing no errors, but is showing 1 warning, with the use of the "-webkit" vendor extension style I have opted to use to work around an issue I was facing.

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

[screenshot](documentation/testing/flipgame.png)


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | Notes |
| --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/browser-compatibility/chrome.png) | Works as expected |
| Firefox | ![screenshot](documentation/browser-compatibility/firefox.png) | Works as expected |
| Edge | ![screenshot](documentation/browser-compatibility/edge.png) | Shows errors not relevant to page in console |
| Opera GX | ![screenshot](documentation/browser-compatibility/operagx.png) | Works as expected |


## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Home | Notes |
| --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsiveness/mobile.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsiveness/tablet.png) | Works as expected |
| Desktop | ![screenshot](documentation/responsiveness/desktop.png) | Works as expected |


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Audit | Notes |
| --- | --- | --- |
| Home | ![screenshot](documentation/testing/audit.png) | Minor issue relating to Google Fonts with response time |
