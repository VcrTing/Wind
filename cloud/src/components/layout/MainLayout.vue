<template>
    <div class="layout_menu">

        <ipad-trigger-button @menu_Father="() => menu = true"></ipad-trigger-button>

        <div class="menu" :class="{ 'menu_view': menu }">
            <menu-switch></menu-switch>
        </div>
        <div class="menu_overlay" :class="{ 'menu_overlay_view': menu }" @click="() => menu = false"></div>

        <div class="content" v-if="live">
            <router-view />

            <!-- web-footer></web-footer -->
        </div>

        <slot></slot>
    </div>
</template>

<script>
import MenuSwitch from '../menu/MenuSwitch.vue'
import IpadTriggerButton from '../menu/trigger/IpadTriggerButton.vue'
import WebFooter from '../static/footer/WebFooter.vue'
    export default {
        components: { MenuSwitch, WebFooter, IpadTriggerButton },
        name: '',
        data() {
            return {
                live: true,
                menu: false
            }
        },

        methods: {
            
        }
    }
</script>

<style lang="sass" scoped>
    
</style>