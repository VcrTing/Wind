
const util = require('../utils/utils')

const _build_data = function() {
    return {
        send_date_gt: util.timed.day_string(-1),
        send_date_lt: util.timed.day_string(1),
        finish_send: false,
        ready_send: true,
        _limit: 1
    }
}

const task_thousand= async function() {

    let res = _build_data()
    
    res = await strapi.services['task-crowd-send'].find(res)

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

const task_result = async function(id, success, fail) {
    let has_fail = (fail && fail.length > 0) ? true : false
    
    res = {
        has_fail,
        corwd_fail: fail,
        ready_send: false,
        finish_send: true,
        corwd_success: success,
    }
    // if (sid) { res['send_sid'] = sid }
    return await strapi.services['task-crowd-send'].update({ id: id }, res)
}
module.exports = {
    task_result,

    task_thousand
}