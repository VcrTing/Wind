'use strict';

const strapiSms = require("../services/strapi-sms");

/**
 * strapi-sms.js controller
 *
 * @description: A set of functions called "actions" of the `strapi-sms` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.

    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },

  msg: async (ctx) => {
    console.log('MSG PAGE.')

    ctx.send({
      message: 'Thank For Your Msg'
    });
  },

  createSms: async (ctx) => {
    const data = {
      named: 'AAA',
      status: true
    }
    const res = await strapiSms.entityService.create(
      data,
      { model: 'plugins::strapi-sms.sms' }
    )
    return res
  }
};
