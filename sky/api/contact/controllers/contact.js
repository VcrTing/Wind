'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {


  async count(ctx) {

    if (ctx.query._q) {
      return strapi.services.contact.countSearch(ctx.query);
    }

    let res = await strapi.services.contact.count(ctx.query);

    return res
  },
};
