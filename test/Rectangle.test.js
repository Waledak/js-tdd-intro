const assert = require('assert');
const Rectangle = require('../rectangle');

// give the test suite a label using describe
describe('Rectangle', () => {
  // give the test a label using it
  it('is a class', () => {
    assert.strictEqual(typeof new Rectangle(1,1), 'object');
  });

  it('testing isSquare', () => {
    assert.strictEqual(new Rectangle(10,5).isSquare(), false);
    assert.strictEqual(new Rectangle(10,10).isSquare(),true);
  });

  it('testing getArea', () => {
    assert.strictEqual(new Rectangle(13,7).getArea(), 91);
  });

  it('testing getPerimeter', () => {
    assert.strictEqual(new Rectangle(13,7).getPerimeter(), 40);
  });
});