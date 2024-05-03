const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should test a as float', () => {
    assert.equal(calculateNumber(1.2, 3), 4);
  });
  it('test b as float', () => {
    assert.equal(calculateNumber(2, 3.8), 6);
  });
  it('test a and b as float', () => {
    assert.equal(calculateNumber(3.9, 3.8), 8);
  });
  it('test a and b as int', () => {
    assert.equal(calculateNumber(7, 3), 10);
  });
});
