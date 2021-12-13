<template>
    <div class="px pb">
        <img :src="src"/>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        computed: {
            src() {
                return require('@/assets/Logo/123medhk.png')
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>