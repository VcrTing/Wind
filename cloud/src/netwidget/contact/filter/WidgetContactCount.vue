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
            async count(res = { }) {
                return await this.conn.get(
                    this.api.build(this.conf.ENDPOINT.contact + '/count'),
                    this.$store.state.token, res
                )
            },
            async contact_same(area, phoned) {
                
                let res = {
                    area,
                    phoned,
                    status: true
                }

                return await this.contact(res)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>