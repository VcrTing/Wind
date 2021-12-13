

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

const app_key = async function(_typed = 1) {
    let res = await strapi.services['key'].find({ typed : _typed})
    res = res ? res.map(entity => sanitizeEntity(entity, { model: strapi.models['key'] })): [ ]
    res = res ? res[0] : null
    return res
}

module.exports = {
    app_key
}