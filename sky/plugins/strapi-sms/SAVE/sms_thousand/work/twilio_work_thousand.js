const twi = require('../api/twilio.js')
const util = require('../utils/utils')

const data_msg = require('../data/data_msg')
const data = require('../data/data_thousand')


const _ser_body = function(res, cont) {
    return util.ser_body(res, cont)
}

const _get_body = async function(_id) {
    return await data_msg.msg_sms(_id)
}
const _ser_phoned = function(res) {
    return `+${res[1]} ${res[2]}`
}

// 执行
const running_task = async function(task, _factory, sender) {

    let error = [ ]
    let success = [ ]
    let tos = task.crowd ? task.crowd: [ ]
    let msg_sms = await _get_body(task.msg_sms_id) 

    let res = 0

    if (msg_sms) {
        task.msg_sms = msg_sms

        tos.map(async e => {
            console.log('发送给 =', e[0],  _ser_phoned(e) )
            try {
                res = await twi.send( _factory, _ser_body(task, e), _ser_phoned(e), sender )
            } catch(e) {
                res = false
            }
            
            res = twi.ser_result(res)
            e['result'] = res
            if (res.success) success.push(e); else error.push(e)
        })
    }

    return await data.task_result( task.id, success, error )
}

module.exports = {
    running_task
}