const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('should test a as float', () => {
      expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    });
    it('test b as float', () => {
      expect(calculateNumber('SUM', 9, 3.8)).to.equal(13);
    });
    it('test a and b as float', () => {
      expect(calculateNumber('SUM', 3.9, 3.8)).to.equal(8);
    });
    it('test a and b as int', () => {
      expect(calculateNumber('SUM', 7, 3)).to.equal(10);
    });
    it('test b as float', () => {
      expect(calculateNumber('SUM', 5, 3.1)).to.equal(8);
    });
  });
  describe('When type is SUBSTRACT', () => {
    it('should test a as float', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2);
    });
    it('test b as float', () => {
      expect(calculateNumber('SUBTRACT', 9, 3.8)).to.equal(5);
    });
    it('test a and b as float', () => {
      expect(calculateNumber('SUBTRACT', 3.9, 3.8)).to.equal(0);
    });
    it('test a and b as int', () => {
      expect(calculateNumber('SUBTRACT', 7, 3)).to.equal(4);
    });
  });
  describe('When type is DIVIDE', () => {
    it('test divide with b o after rounding', () => {
      expect(calculateNumber('DIVIDE', 3, 0.4)).to.equal('Error');
    });
    it('test divide with float a', () => {
      expect(calculateNumber('DIVIDE', 4.3, 1)).to.equal(4);
    });
    it('test divide with a to be rounded up', () => {
    });
    it('test divide with b float round down', () => {
      expect(calculateNumber('DIVIDE', 3, 4.2)).to.equal(0.75);
    });
  });
});
