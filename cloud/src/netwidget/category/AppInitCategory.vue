<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {
            async switch_Category() {
                console.log('Token =', this.$store.state.token)

                let res = await this.conn.get(
                    this.api.category, this.$store.state.token, { }
                )

                console.log('Category =', res)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>