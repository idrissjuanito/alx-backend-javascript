const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should test a as float', () => {
    assert.equal(calculateNumber(1.2, 3), 4);
  });
  it('test b as float', () => {
    assert.equal(calculateNumber(9, 3.8), 13);
  });
  it('test a and b as float', () => {
    assert.equal(calculateNumber(3.9, 3.8), 8);
  });
  it('test a and b as int', () => {
    assert.equal(calculateNumber(7, 3), 10);
  });
  it('test b as float', () => {
    assert.equal(calculateNumber(5, 3.1), 8);
  })
});
