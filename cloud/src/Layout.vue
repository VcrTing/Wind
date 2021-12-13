<template>
    <main-layout ref="mainREF" v-if="$store.state.token">
        
    </main-layout>

    <html-layout v-else></html-layout>
</template>

<script>
import MainLayout from '@/components/layout/MainLayout.vue'
import AppInitCategory from './netwidget/category/AppInitCategory.vue'
import HtmlLayout from './components/layout/HtmlLayout.vue'
    export default {
        components: { MainLayout, AppInitCategory,
                HtmlLayout  
        },
        name: '',
        data() {
            return {
                
            }
        },
        async mounted() {

        }
    }
</script>

<style lang="sass">
</style>