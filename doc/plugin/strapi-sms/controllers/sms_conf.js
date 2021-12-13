'use strict';

const strapiSms = require("../services/sms_conf.js");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {


  async find(ctx) {
    console.log('== 进来了')
    console.log(
      'service =', strapi.services
    )
    const results = await strapi.services.sms_conf.find()
    return results
  },
};
