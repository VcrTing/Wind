

export default {
    success_one(e) {
        try {
        const id = e.id
        } catch(e) {
        return false
        }
        return true
    },
    success_many(e) {
        if (e.length > 0) {
        return true
        }
        return false
    }
}