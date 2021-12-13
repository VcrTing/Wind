<template>
    <div>
        <panel>
            <h5 class="px_em">
                任務聯絡人</h5>
            <sms-plus-write-contact ref="cntREF"></sms-plus-write-contact>
        </panel>

        <panel class="mt-4">
            
            <div class="row">
                <div class="col-50 fx-l ">
                    <h5>發送內容</h5>
                </div>
                <div class="col-50 fx-r">
                    <button class="btn btn_primary_thin" @click="next">下一步</button>
                </div>
            </div>
            <sms-plus-write-service ref="serREF"></sms-plus-write-service>
        </panel>
    </div>
</template>

<script>
import Panel from "@/components/ui/panel/Panel.vue"
import SmsPlusWriteContact from './Contact/SmsPlusWriteContact.vue'
import SmsPlusWriteService from './Service/SmsPlusWriteService.vue'

    export default {
        components: { Panel, SmsPlusWriteContact, SmsPlusWriteService },
        name: '',
        data() {
            return {
                def_serv: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let res = this.view.load('active_sms_serv')
                if (res) {
                    this.$refs.cntREF.task = res.task
                    this.$refs.serREF.for_Res(res)
                }
            },

            next() {

                let task = this.$refs.cntREF.task
                let serv = this.$refs.serREF.for_Res()

                if (serv) {
                    serv.task = task
                    this.view.save('active_sms_serv', serv)
                }

                this.$router.push('/sms/plus/preview')
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>