const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Send payment request qpi testing', () => {
  it('should spy ion calculate number function', () => {
    sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.calledWithExactly('SUM', 100, 20)).to.be.true;
  });
});
