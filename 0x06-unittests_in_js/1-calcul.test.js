const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('should test a as float', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3), 4);
    });
    it('test b as float', () => {
      assert.equal(calculateNumber('SUM', 9, 3.8), 13);
    });
    it('test a and b as float', () => {
      assert.equal(calculateNumber('SUM', 3.9, 3.8), 8);
    });
    it('test a and b as int', () => {
      assert.equal(calculateNumber('SUM', 7, 3), 10);
    });
    it('test b as float', () => {
      assert.equal(calculateNumber('SUM', 5, 3.1), 8);
    });
  });
  describe('When type is SUBSTRACT', () => {
    it('should test a as float', () => {
      assert.equal(calculateNumber('SUBSTRACT', 1.2, 3), -2);
    });
    it('test b as float', () => {
      assert.equal(calculateNumber('SUBSTRACT', 9, 3.8), 5);
    });
    it('test a and b as float', () => {
      assert.equal(calculateNumber('SUBSTRACT', 3.9, 3.8), 0);
    });
    it('test a and b as int', () => {
      assert.equal(calculateNumber('SUBSTRACT', 7, 3), 4);
    });
    it('test b as float', () => {
      assert.equal(calculateNumber('SUBSTRACT', 5, 3.1), 2);
    });
  });
  describe('When type is DIVIDE', () => {
    it('test divide normal case', () => {
      assert.equal(calculateNumber('DIVIDE', 12, 2), 6);
    });
    it('test divide with b o after rounding', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 0.4), 'Error');
    });
    it('test divide with float a', () => {
      assert.equal(calculateNumber('DIVIDE', 4.3, 1), 4);
    });
    it('test divide with a to be rounded up', () => {
      assert.equal(calculateNumber('DIVIDE', 7.8, 4), 2);
    });
    it('test divide with b float round down', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 4.2), 0.75);
    });
    it('tests divide with two floats', () => {
      assert.equal(calculateNumber('DIVIDE', 25.1, 5.2), 5);
    });
  });
});
