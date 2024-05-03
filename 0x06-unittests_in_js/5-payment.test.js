const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./5-payment');

describe('Tests for send payment api function', () => {
  let spyConsole;
  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spyConsole.restore();
  });
  it('should test with args 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(console.log.calledWithExactly('The total is: 120')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });
  it('should test with args 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(console.log.calledWithExactly('The total is: 20')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });
});
