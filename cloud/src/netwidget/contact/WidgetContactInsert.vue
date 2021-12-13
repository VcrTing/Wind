<template>
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            async _insert(data) {

                return await this.conn.post(
                    this.api.contact, this.$store.state.token, data
                )
            },

            async insert(rec) {
                if (rec) {
                    return await this._insert(rec)
                } 
                return null
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>