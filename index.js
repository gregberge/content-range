(function (root, factory) {
  // AMD
  if (typeof define === 'function' && define.amd) define(['exports'], factory);
  // Common JS
  else if (typeof exports === 'object') factory(exports);
  // Global
  else factory((root.contentRange = {}));
}(this, function (exports) {

  /**
   * Expose module.
   */

  exports.format = format;
  exports.parse = parse;

  /**
   * Format the content-range header.
   *
   * @param {Object} options
   * @param {String} options.name
   * @param {Number} options.offset
   * @param {Number} options.limit
   * @param {Number} options.count
   */

  function format(options) {
    options.count = typeof options.count === 'undefined' || options.count === null ?
      '*' : options.count;

    var start = options.offset;
    var end = options.offset + options.limit - 1;

    if (end - start < 0) return options.name + ' */' + options.count;

    return options.name + ' ' + start + '-' + end + '/' + options.count;
  }

  /**
   * Parse the content-range header.
   *
   * @param {String} str
   * @returns {Object}
   */

  function parse(str) {
    var matches;

    if (matches = str.match(/^(\w+) (\d+)-(\d+)\/(\d+|\*)/)) return {
        name: matches[1],
        start: +matches[2],
        end: +matches[3],
        count: matches[4] === '*' ? null : +matches[4]
      };

    if (matches = str.match(/^(\w+) \*\/(\d+|\*)/)) return {
        name: matches[1],
        start: null,
        end: null,
        count: matches[2] === '*' ? null : +matches[2]
      };

    return null;
  }

}));