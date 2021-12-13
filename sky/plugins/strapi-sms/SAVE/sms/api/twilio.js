const Client = require('twilio')

const { decode } = require('./_secrt.js')
const { serial } = require('./_serial_res.js')

const factory = function(SID, TOKEN) {
    SID = decode(SID)
    TOKEN = decode(TOKEN)
    return Client(SID, TOKEN)
}

const ser_result = function(rec) {
    let status = false
    if (rec) {
        if (rec.sid) status = true
    }
    
    rec = serial(rec, status)
    rec.success = status

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