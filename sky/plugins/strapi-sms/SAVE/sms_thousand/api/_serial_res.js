

const serial = function(res, succ) {
    if (succ) {
        res = {
            sid: res.sid,
            uri: res.uri,
            body: res.body,
            price: res.price,
            status: res.status,
            duration: res.duration,
            priceUnit: res.priceUnit
        }
    }

    return res
}

module.exports = {
    serial
}