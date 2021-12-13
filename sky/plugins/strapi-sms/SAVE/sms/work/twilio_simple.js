const twi = require('../api/twilio.js')
const util = require('../utils/utils')
const db = require('../data/data_task')

const _ser_body = function(res, cont) {
    return util.ser_body(res, cont)
}

const _ser_phoned = function(res) {
    return `+${res[1]} ${res[2]}`
}

// 序列化 结果
const _clear_contact = function(rst) {
    rst['contact'] = rst['contact'][3]
}
const running_result = async function(rec, task_id, dbs) {
    let error = [ ]
    let success = [ ]

    rec.map(e => {
        _clear_contact(e)
        const rst =  twi.ser_result(e)
        rst.resend_num = !rst.success ? 0 : null
        if (rst.success) success.push(rst); else error.push(rst)
    })
    await db.task_result(dbs, task_id, success, error)
} 

// 发送
const running_task = async function(task, _factory, _sender, dbs) {

    let res = [ ]
    let _res = null
    let cont = task.contact_json
    if (!cont) return null; else cont = (Array.isArray(cont[0])) ? cont : [ cont ]

    for (let i= 0; i< cont.length; i++ ) {
        const e = cont[i]
        try {
            _res = await twi.send( _factory, _ser_body(task, e), _ser_phoned(e), _sender )
        } catch(err) {
            _res =  { code: 400,  msg: 'not a valid phone number.' }
        }
        
        _res['contact'] = e
        res.push(_res)
    }


    if (res) { await running_result(res, task.id, dbs) }

}

module.exports = {
    running_task
}