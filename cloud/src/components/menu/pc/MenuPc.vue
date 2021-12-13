<template>
    <nav>
        <logo-main></logo-main>

        <menu-pc-list class="mt"></menu-pc-list>
    </nav>
</template>

<script>
import LogoMain from '../../static/logo/LogoMain.vue'
import MenuPcList from './list/MenuPcList.vue'
    export default {
        name: '',
        components: { 
            LogoMain,
                MenuPcList 
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>