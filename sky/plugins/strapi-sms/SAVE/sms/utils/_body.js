const _lang = function(task, lang) {
    if (lang == 'ch') {
        return task.msg_sms.msg_ch
    }
    else if (lang == 'en') {
        return task.msg_sms.msg_en
    }
    return task.msg_sms.msg_ch
}

const _ser = function(body, params) {
    for(let k in params) {
        body = body.replace(
            `{{${k}}}`
            , params[k])
    }
    return body
}

const ser_body = function(task, cont) {
    const lang = cont.length > 3 ? cont[4] : 'ch'

    let body = _lang(task, lang)

    const par = cont.length > 4 ? cont[5] : null

    body = par ? _ser(body, par) : body

    return body
}

module.exports = ser_body