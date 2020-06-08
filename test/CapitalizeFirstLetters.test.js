const assert = require('assert');
const CapitalizeFirstLetters = require('../CapitalizeFirstLetters');

// give the test suite a label using describe
describe('CapitalizeFirstLetters', () => {
  // give the test a label using it
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof CapitalizeFirstLetters, 'function');
    assert.strictEqual(CapitalizeFirstLetters.length, 1);
  });

  it('transforms javaScript correctly', () => {
    assert.strictEqual(CapitalizeFirstLetters('javaScript javaScript'), 'JavaScript JavaScript');
  });

  it('works with a 1-character string', () => {
    assert.strictEqual(CapitalizeFirstLetters('z'), 'Z');
  });

  it('works with an empty string', () => {
    assert.strictEqual(CapitalizeFirstLetters(''), '');
  });
});