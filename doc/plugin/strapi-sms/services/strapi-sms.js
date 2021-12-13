'use strict';

/**
 * strapi-sms.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = {

    runningSMS: async () => {
        const entity = await strapi.entityService.find(
            { },
            { model: 'product' }
        )
        console.log(entity.length)
    }
};
