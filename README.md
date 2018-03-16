<p align="center"><img src="prepare.png" alt="prepare.js" /></p>
<p align="center">A small and simply library for dynamically add a resource-hints in your web pages</p>
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
You can install "preparejs" using npm, yarn or bower:
```
$ npm install preparejs
$ yarn add preparejs
$ bower install preparejs
```
### Usage

The library is exports as **UMD module**

```js
// RequireJS and other-like
require(['preparejs'], ({ preresolve }) => { 
    preresolve('https://cdn-domain.com');
});
// CommonJS and other-like
const { preresolve } = require('preparejs');
preresolve('https://cdn-domain.com');
```
```html
<!-- Browser /-->
<script type="application/javascript" src="prepare.min.js"></script>
<script type="application/javascript">
    const { preresolve } = preparejs;
    preresolve('https://cdn-domain.com');
</script>
```

### Examples
```js
// prefetch DNS of one or many hosts
prepare('dns-prefetch', 'https://domain.com');
prepare('dns-prefetch', ['https://domain1.com', 'https://domain2.com']);
// or using alias
preresolve('https://domain.com');

// preconnect to hosts
prepare('preconnect', ['https://domain1.com', 'https://domain2.com']);
// or using a alias
preconnect(['https://domain1.com', 'https://domain2.com']);

// prefetch resource from other domain
prepare('prefetch', 'https://other-domain.com/script.js', { as: 'script', crossorigin: 'anonymous' });
// or using a alias
prefetch('https://other-domain.com/script.js', { as: 'script', crossorigin: 'anonymous' });

// preload resource as font for a specific media
prepare('preload', 'https://domain.com/font.ttf', { as: 'font', media: 'screen' });
// or using a alias
preload('https://domain.com/font.ttf', { as: 'font', media: 'screen' });

// prerender a page
prepare('prerender', 'https://domain.com');
// or using a alias
prerender('https://domain.com');
```

### License
[MIT](https://mit-license.org/)

### Author
Kuznetsov Aleksey, [Email](mailto:kyznecov.alexey@gmail.com)
