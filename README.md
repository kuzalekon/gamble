<p align="center"><img src="gamble.png" alt="gamble" /></p>
<p align="center">A small and simply javascript library for dynamically add a resource-hints in your web pages</p>
<hr>
<p align="center">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT">
    <img src="https://img.shields.io/badge/chrome-%3E%3D%204-blue.svg" alt="Chrome">
    <img src="https://img.shields.io/badge/firefox-%3E%3D%203.5-blue.svg" alt="FireFox">
    <img src="https://img.shields.io/badge/opera-%3E%3D%2015-blue.svg" alt="Opera">
    <img src="https://img.shields.io/badge/safari-%3E%3D%205-blue.svg" alt="Safari">
    <img src="https://img.shields.io/badge/ie-%3E%3D%209-blue.svg" alt="IE">
    <img src="https://img.shields.io/badge/edge-%3E%3D%2012-blue.svg" alt="Edge">
</p>

### Installation
You can install `gamble` using npm, yarn or bower:
```
$ npm install gamble
$ yarn add gamble
$ bower install gamble
```
### Usage

Note: the library is exports as **UMD module**.

```js
const gamble = require('gamble');

// dns-prefetch
gamble({
    rel: 'dns-prefetch',
    href: 'https://domain.com'
});
// prefetch a script with CORS
gamble({
    rel: 'prefetch',
    href: 'https://domain.com/script.js',
    as: 'script',
    crossorigin: 'use-credentials'
});
// preload a HTML page
gamble({
    rel: 'preload',
    href: 'https://domain.com/index.html',
    as: 'html'
});
// prerender a page
gamble({
    rel: 'prerender',
    href: 'https://domain.com/index.html'
});
```
