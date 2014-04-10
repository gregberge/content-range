var assert = require('assert');
var contentRange = require('./index');

describe('Content-range formatter', function () {
  describe('#format', function () {
    it('should format content', function () {
      assert.equal(contentRange.format({
        name: 'items',
        offset: 0,
        limit: 20,
        count: 30
      }), 'items 0-19/30');

      assert.equal(contentRange.format({
        name: 'items',
        offset: 20,
        limit: 50,
        count: 400
      }), 'items 20-69/400');
    });
  });
});