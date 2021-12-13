<template></template>
<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            _build(cond, sort) {
                let res = cond
                for (let k in sort) {
                    // res['sort'] = sort[k] ? `${k}:desc` : `${k}:asc` 
                }
                return res
            },
        
            async switching( res = { }, sort = { 'gender': false} ) {
                res['status'] = true
                return await this.conn.get(
                    this.api.contact, this.$store.state.token, this._build(res, sort)
                )
            }
        }
    }
</script>