'use strict';

let sms = require('../../extensions/API/index')

module.exports = {

  '1 * * * * *': () => {
    sms.running()
    // sms.thousand()
  },
};
