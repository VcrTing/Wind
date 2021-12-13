
import conf from '@/conf'

const build = function(endPoint, iD = '') {
    return [ conf.apiURL + '/' + endPoint + '/' + iD, endPoint ]
}

export default {
    contact: build(conf.ENDPOINT.contact),
    task_sms: build(conf.ENDPOINT.task_sms),
    
    category: build(conf.ENDPOINT.category),
    mag_group: build(conf.ENDPOINT.mag_group),

    build,
}