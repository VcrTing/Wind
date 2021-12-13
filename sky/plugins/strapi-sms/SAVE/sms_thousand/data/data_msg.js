

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

const msg_sms = async function(_id) {
    let res = await strapi.services['task-sms'].find({ id : _id})
    res = res ? res.map(entity => sanitizeEntity(entity, { model: strapi.models['task-sms'] })): [ ]
    res = res ? res[0] : null
    return res
}

module.exports = {
    msg_sms
}