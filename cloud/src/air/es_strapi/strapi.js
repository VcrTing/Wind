import pager from './_pager'
import items from './_items'

const count = function(res, mx) {
    if (res >= mx) {
        return true
    }
    return false
}

export default {
    pager,
    items,

    count
}