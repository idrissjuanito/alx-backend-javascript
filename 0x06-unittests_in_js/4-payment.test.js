const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('Send payment request qpi testing', () => {
  let calcStub;
  let spy;
  before(() => {
    calcStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // sinon.spy(Utils, 'calculateNumber');
    spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
  });
  after(() => {
    calcStub.restore();
    spy.restore();
  });
  // it('should spy ion calculate number function', () => {
  //   expect(Utils.calculateNumber.calledWithExactly('SUM', 100, 20)).to.be.true;
  // });
  it('console log spy', () => {
    expect(console.log.calledWith('The total is: 10')).to.be.true;
  });
  // it('calc number should have been called once', () => {
  //   expect(Utils.calculateNumber.calledOnce).to.be.true;
  // });
  it('expect stub to have been called with know args', () => {
    expect(calcStub.calledWithExactly('SUM', 100, 20)).to.be.true;
  });
});
