<template>
    <div class="login_page">

        <div>
            <h2 class="fs_c">
                Login
            </h2>
        </div>

        <widget-login></widget-login>
    </div>
</template>

<script>
import WidgetLogin from '../../../netwidget/auth/WidgetLogin.vue'
    export default {
  components: { WidgetLogin },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>