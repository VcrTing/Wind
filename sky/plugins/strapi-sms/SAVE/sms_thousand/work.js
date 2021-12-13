
const key = require('./data/data_key')
const db_thousand = require('./data/data_thousand')

const twi = require('./api/twilio')

const _work_thousand = require('./work/twilio_work_thousand')

const work_thousand = async function() {


    let app = await key.app_key()
    let res = await db_thousand.task_thousand()

    let fac = twi.factory( app.api_key, app.api_token )

    if (res) {
        res.map(e => {
            
            _work_thousand.running_task(e, fac, app.sender)
        })
    }
}

module.exports = {
    work_thousand
}