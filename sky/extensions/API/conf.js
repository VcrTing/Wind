const TASK_LIMIT = 20

const ENDPOINT = {
    api: 'plugins::strapi-sms.strapi_sms_api',
    task: 'plugins::strapi-sms.strapi_sms_task',
    task_mollion: 'plugins::strapi-sms.strapi_sms_task_million'
}

module.exports = {
    ENDPOINT,

    TASK_LIMIT
}