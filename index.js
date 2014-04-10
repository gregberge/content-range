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
  return util.format('%s %d-%d/%d',
    options.name,
    options.offset,
    options.offset + options.limit - 1,
    options.count
  );
}