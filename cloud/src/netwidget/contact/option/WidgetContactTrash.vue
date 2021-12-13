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
            async trash(v) {

                console.log('删除 ', v.id)
                let res = await this.conn.put(
                    this.api.build(
                        this.conf.ENDPOINT.contact, 
                        v.id
                    ),
                    this.$store.state.token,
                    {
                        status: false
                    }
                )

                if (res) {
                    return true
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>