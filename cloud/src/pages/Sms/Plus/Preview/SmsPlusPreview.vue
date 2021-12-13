<template>
    <div>
        <panel>
            <h5 class="px_em">任務聯絡人</h5>
            <sms-plus-preview-contact></sms-plus-preview-contact>
        </panel>

        <panel>
            <div class="row">
                <div class="col-50 fx-l ">
                    <h5>任务进程</h5>
                </div>
                <div class="col-50 fx-r">
                    <button class="mr" @click="$router.go(-1)">返回</button>
                    <button class="btn btn_primary_thin" @click="submit">提交进程</button>
                </div>
            </div>
            <sms-plus-preview-service></sms-plus-preview-service>
        </panel>

        <sms-task-insert ref="insertREF"></sms-task-insert>
    </div>
</template>

<script>
import Panel from '@/components/ui/panel/Panel.vue'
import SmsPlusPreviewContact from './Contact/SmsPlusPreviewContact.vue'
import SmsPlusPreviewService from './Service/SmsPlusPreviewService.vue'
import SmsTaskInsert from '../../../../netwidget/msg/SmsTaskInsert.vue'
    export default {
  components: { Panel, SmsPlusPreviewContact, SmsPlusPreviewService, SmsTaskInsert },
        name: '',
        data() {
            return {
                serv: { }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let res = this.view.load('active_sms_serv')
                
                if (res) {
                    this.serv = res
                }
            },
            _ser_contact() {
                let cont = this.serv.task
                cont = [
                    cont.named,
                    cont.area,
                    cont.phoned,
                    cont.id,
                    cont.lang,
                ]
                this.serv.contact_json = cont
            },
            async submit() {
                this._ser_contact()
                let res = await this.$refs.insertREF.insert(
                    this.serv
                )

                // console.log('成功 RES =', res)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>