const conf = require('../conf')

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

const app_key = async function(company = 1) {
    // let res = await strapi.services['key'].find({ typed : _typed})
    let res = await  strapi.entityService.find(
        { company, status: true},
        { model: conf.ENDPOINT.api }
    )
    res = res ? res[0] : null
    return res
}

module.exports = {
    app_key
}