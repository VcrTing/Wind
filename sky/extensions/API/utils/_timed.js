
const moment = require('moment')

const day_string = function(day = null) {
    let m = moment()

    if (day) {
        m = m.add(day, 'd')
    }
    return m.format('YYYY-MM-DD')
}

module.exports = {
    day_string
}