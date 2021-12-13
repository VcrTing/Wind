
const { default: createStrapi } = require('strapi')
const util = require('../utils/utils')


const _build_data = function(_limit) {
    return {
        send_date_gt: util.timed.day_string(-1),
        send_date_lt: util.timed.day_string(1),
        finish_send: false,
        ready_send: true,
        status: true,
        _limit
    }
}

// 提取任务
const task_running = async function(db, _limit) {
    let res = _build_data(_limit)
    res = await strapi.services[db].find(res)

    if (res) {
        res = res.filter(e => {
            delete e.updated_by
            delete e.created_by
            
            let ii = false
            if (e.ready_send) { if (!e.finish_send) { ii = true } }
            
            return ii
        })
    }

    return res
}

const task_result = async function(db, id, success, error) {

    const res = {
        finish_send: true,
        send_res_fail: error,
        send_res_success: success,
    }

    return await strapi.services[db].update({ id: id }, res)
}

module.exports = {
    task_running,
    task_result
}