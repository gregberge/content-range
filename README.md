# content-range

[![Build Status](https://travis-ci.org/gregberge/content-range.svg?branch=master)](https://travis-ci.org/gregberge/content-range)

Parser and formatter for HTTP/1.1 Content-Range header field.

## Install

```sh
npm install content-range
```

## Usage

```js
import { format, parse } from "content-range";

format({
  unit: "bytes",
  start: 10,
  end: 20,
  size: 100,
});
// bytes 10-20/100

parse("bytes 10-20/100");
// {
//   unit: "bytes",
//   start: 10,
//   end: 20,
//   length: 100,
// }
```

## License

MIT
