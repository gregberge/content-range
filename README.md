# content-range

[![Build Status](https://travis-ci.org/gregberge/content-range.svg?branch=master)](https://travis-ci.org/gregberge/content-range)

Content-range header formatter.

## Install

```sh
npm install content-range
```

## Usage

```js
var contentRange = require("content-range");

var header = contentRange.format({
  unit: "items",
  first: 10,
  limit: 20,
  length: 100,
});

console.log(header); // items 10-29/100
```

### contentRange.format(obj)

Format a content-range header.

```js
var header = contentRange.format({
  unit: "items",
  first: 10,
  limit: 20,
  length: 100,
});

console.log(header); // items 10-29/100
```

### contentRange.parse(str)

Parse a content-range header.

```js
var parts = contentRange.parse("items 10-29/100");

console.log(parts); // { unit: 'items', first: 10, last: 29, length: 100 }
```

## License

MIT
