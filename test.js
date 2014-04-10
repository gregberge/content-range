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

    it('should replace count by * if not defined', function () {
      assert.equal(contentRange.format({
        name: 'items',
        offset: 0,
        limit: 20
      }), 'items 0-19/*');

      assert.equal(contentRange.format({
        name: 'items',
        offset: 0,
        limit: 20,
        count: null
      }), 'items 0-19/*');

      assert.equal(contentRange.format({
        name: 'items',
        offset: 0,
        limit: 20,
        count: 0
      }), 'items 0-19/0');
    });

    it('should handle 0 result', function () {
      assert.equal(contentRange.format({
        name: 'items',
        offset: 5,
        limit: 0
      }), 'items */*');

      assert.equal(contentRange.format({
        name: 'items',
        offset: 5,
        limit: 0,
        count: 20
      }), 'items */20');
    });
  });
});