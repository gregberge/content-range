/**
 * Module dependencies.
 */

var util = require('util');

/**
 * Expose module.
 */

exports.format = format;

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

  if (end - start < 0) return util.format('%s */%s', options.name, options.count);

  return util.format('%s %s-%s/%s',
    options.name,
    start,
    end,
    options.count
  );
}