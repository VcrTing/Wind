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
        
            async switch_Category(
                
            ) {

                let res = {
                    
                }

                return await this.conn.get(
                    this.api.category, this.$store.state.token, res
                )
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>