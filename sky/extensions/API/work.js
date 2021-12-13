
const conf = require('./conf')

const key = require('./data/data_key')
const db = require('./data/data_task')
const db_msg = require('./data/data_msg')

const twi = require('./api/twilio')

const _work = require('./work/twilio_simple')

// 普通
const work = async function() {

    let dbs = 'task-sms'
    let app = await key.app_key()
    
    let res = await db.task_running(dbs, conf.TASK_LIMIT)

    let fac = twi.factory( app.api_key, app.api_token,  app.api_token_end )

    if (res) {
        res.map(e => {
            
            _work.running_task(e, fac, app.sender, dbs)
        })
    }
}

const work_million = async function() {

    let msg = { id: 0 }
    let dbs = 'task-million'
    let app = await key.app_key()
    let res = await db.task_running(dbs, 3)

    let fac = twi.factory( app.api_key, app.api_token )

    if (res) {
        res.map(async e => {
            msg = await db_msg.msg_sms(e.msg_sms_id)
            if (!msg) return; e.msg_sms = msg
            _work.running_task(e, fac, app.sender, dbs)
        })
    }
}

module.exports = {
    work,
    work_million
}