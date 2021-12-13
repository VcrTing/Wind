<template>
    <div>
        <button @click="$router.push('/auth/login')" v-if="!$store.state.token">
            YOU NEED LOGIN
        </button>
        <p v-else class="pt pl"> 
            已登陆
        </p>

        <div>
            <app-init-sms-msg ref="msgREF"></app-init-sms-msg>
        </div>
    </div>
</template>

<script>
import AppInitCategory from '../../netwidget/category/AppInitCategory.vue'
import AppInitSmsMsg from '../../netwidget/msg/AppInitSmsMsg.vue'
    export default {
  components: { AppInitCategory, AppInitSmsMsg },
        name: '',
        data() {
            return {
                
            }
        },
        async mounted() {
            
            let cates = await this.$refs.msgREF.switch_Msg()

            await this.$store.commit('saveCategory', cates)
        },
    }
</script>

<style lang="sass" scoped>
    
</style>