const Client = require('twilio')

const { decode } = require('./_secrt.js')
const { serial } = require('./_serial_res.js')

const factory = function(SID, TOKEN) {
    SID = decode(SID)
    TOKEN = decode(TOKEN)
    return Client(SID, TOKEN)
}

const ser_result = function(rec) {
    let res = false
    if (rec) {
        if (rec.sid) {
            res = true
        }
    }

    rec = serial(rec, res)
    rec.success = res

    return rec
}

const send = async function(client, body, to, from) {
    return await client.messages
    .create({
        body,
        from,
        to
    })
}

module.exports = {
    ser_result,

    factory,

    send
}