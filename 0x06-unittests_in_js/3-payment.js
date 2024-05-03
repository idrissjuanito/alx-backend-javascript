const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, TotalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, TotalShipping);
  console.log(`The total is ${sum}`);
}

module.exports = sendPaymentRequestToApi;
