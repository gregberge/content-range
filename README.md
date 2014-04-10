# content-range

[![Build Status](https://travis-ci.org/neoziro/content-range.svg?branch=master)](https://travis-ci.org/neoziro/content-range)
[![Dependency Status](https://david-dm.org/neoziro/content-range.svg?theme=shields.io)](https://david-dm.org/neoziro/content-range)
[![devDependency Status](https://david-dm.org/neoziro/content-range/dev-status.svg?theme=shields.io)](https://david-dm.org/neoziro/content-range#info=devDependencies)

Content-range header formatter.

## Install

```sh
npm install content-range
```

## Usage

```js
var contentRange = require('content-range');

var header = contentRange.format({
  name: 'items',
  offset: 10,
  limit: 20,
  count: 100
});

console.log(header); // items 10-30/100

## License

MIT