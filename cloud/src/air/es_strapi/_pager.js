
const pager = function(count, limit) {
    let res = Math.ceil(
        count
        /
        limit
    )
    return res
}

const page_to_condition = function(n, lmt, pag) {
    n = (n < 0) ? pag: n
    n = (n > pag || n == 0) ? 1 : n

    return {
        '_start': ( n * lmt ) - lmt,
        '_limit': lmt
    }
}

export default {
    pager,
    page_to_condition
}