
import timed from './timed/ser_timed'
import float from './num/float'


const if_def = function(rec, def = '- -') {
    if (rec) { return rec } return def
}

const first_Max = function(rec) {
    return rec.slice(0, 1).toUpperCase() + rec.slice(1)
}

const save = function(k, rec) {
    sessionStorage.setItem('cloud_' + k, JSON.stringify(rec))
}
const load = function(k) {
    let res = sessionStorage.getItem('cloud_' + k)
    res = res ? JSON.parse(res) : null
    return res
}

export default {
    ser_timed: timed.ser_timed,
    float,

    save,
    load,
}