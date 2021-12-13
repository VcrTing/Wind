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
            async plus( res ) {
                res = await this.conn.post(
                    this.api.contact,
                    this.$store.state.token,
                    res
                )
                if (res && res['id']) { return res }
                return null
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>