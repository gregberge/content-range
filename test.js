var assert = require('assert');
var contentRange = require('./index');

describe('Content-range formatter', function () {
  describe('#format', function () {
    it('should format content', function () {
      assert.equal(contentRange.format({
        unit: 'items',
        first: 0,
        limit: 20,
        length: 30
      }), 'items 0-19/30');

      assert.equal(contentRange.format({
        unit: 'items',
        first: 20,
        limit: 50,
        length: 400
      }), 'items 20-69/400');

      assert.equal(contentRange.format({
        unit: 'items',
        first: 20,
        last: 29,
        length: 100
      }), 'items 20-29/100');
    });

    it('should replace length by * if not defined', function () {
      assert.equal(contentRange.format({
        unit: 'items',
        first: 0,
        limit: 20
      }), 'items 0-19/*');

      assert.equal(contentRange.format({
        unit: 'items',
        first: 0,
        limit: 20,
        length: null
      }), 'items 0-19/*');

      assert.equal(contentRange.format({
        unit: 'items',
        first: 0,
        limit: 20,
        length: 0
      }), 'items 0-19/0');
    });

    it('should handle 0 result', function () {
      assert.equal(contentRange.format({
        unit: 'items',
        first: 5,
        limit: 0
      }), 'items */*');

      assert.equal(contentRange.format({
        unit: 'items',
        first: 5,
        limit: 0,
        length: 20
      }), 'items */20');
    });
  });

  describe('#parse', function () {
    it('should parse header', function () {
      assert.deepEqual(contentRange.parse('items 0-19/30'), {
        unit: 'items',
        first: 0,
        last: 19,
        length: 30
      });
    });

    it('should parse null first/last and null length', function () {
      assert.deepEqual(contentRange.parse('items */*'), {
        unit: 'items',
        first: null,
        last: null,
        length: null
      });
    });

    it('should return null if parse fail', function () {
      assert.equal(contentRange.parse('blooo'), null);
    });

    it('should return null if parse is not a string', function () {
      assert.equal(contentRange.parse(null), null);
    });
  });
});
