<template>
    <div>
        <div class="row pt_s">
            <div class="col-40">
                <label for="phoned" class="d-b fx-l">
                    <!--i class="bi bi-telephone-fill cr_accent i-09 i-label mr_s"></i-->
                    电话號碼<span class="form-must"></span>
                </label>
                <div class="input-attch">
                    <select class="attch_left" id="area" v-model="task.area" @change="valida_Area">
                        <option value="852">+ 852</option>
                        <option value="853">+ 853</option>
                    </select>
                    <input 
                        class="attch_right" id="phoned" 
                        v-model="task.phoned" 

                        @blur="valida_Phoned"
                        @change="valida_Phoned"
                        :class="{ 'input-error': (tip_phoned != true) }"
                        type="text" placeholder="請填入有效的電話號碼" />
                </div>
            </div>
            <div class="col-30">
                <label for="lang" class="d-b">
                    短信語言<span class="form-must"></span>
                </label>
                <select class="w-100" id="lang" v-model="task.lang">
                    <option value="zh">繁體中文</option>
                    <option value="en">通用英文</option>
                </select>
            </div>
        </div>

        <div class="row pt-3">
            <div class="col-40">
                <label for="named" class="d-b">
                    姓名<span class="form-must"></span>
                </label>

                <div>
                    <input 
                        class="w-100" id="named" 
                        v-model="task.named" 

                        @blur="valida_Named"
                        @change="valida_Named"
                        :class="{ 'inp ut-error': (tip_named != true) }"
                        type="text" placeholder="請填入聯絡人的姓名" />

                    <contact-select-menu v-if="show_contact_menu" @res_Father="contact" :_area="Number.parseInt(task.area)" :_phoned="task.phoned"></contact-select-menu>
                </div>
            </div>
            <div class="col-50">
                <label for="named">
                    &nbsp;
                </label>

                <msg-like-input :typed="msg_typed" v-if="msg_typed >= 0">
                    {{ contact_msg[msg_typed] }}
                </msg-like-input>

                <button @click="show_contact_menu = true" v-if="re_choise">
                    <i class="bi bi-arrow-clockwise"></i>
                    重选
                </button>

                <widget-contact-count ref="countREF"></widget-contact-count>
            </div>
        </div>
    </div>
</template>

<script>
import MsgLikeInput from '@/components/nav/form_msg/MsgLikeInput.vue'
import ContactSelectMenu from '@/netwidget/contact/sms/ContactSelectMenu.vue'
import WidgetContactCount from '../../../../../netwidget/contact/filter/WidgetContactCount.vue'
    export default {
  components: { MsgLikeInput, ContactSelectMenu, WidgetContactCount },
        name: '',
        data() {
            return {
                msg_typed: -1,
                contact_msg: {
                    0: '該號碼為新用戶',
                    1: '已存在相同號碼的聯絡人',
                },

                tip_named: true,
                tip_phoned: true,
                task: {
                    area: 852,
                    phoned: '',
                    lang: 'zh',
                    named: '',

                    id: 0,
                    is_new: true,
                    _option: 1
                },

                re_choise: false,
                show_contact_menu: false
            }
        },
        methods: {
            async same() {
                let res = await this.$refs.countREF.contact_same(
                    this.task.area,
                    this.task.phoned
                )

                this.re_choise = false
                if (res && res > 0) {
                    this.msg_typed = 1; this.show_contact_menu = true
                } else {
                    this.msg_typed = 0
                    this.task.is_new = true
                }
                // 
            },

            contact(rec) {
                if (rec == 1) {
                    this.task.id = 0
                    // this.task.named = ''
                    this.task._option = 1

                    this.task.is_new = true
                    document.getElementById('named').focus()
                } else {
                    this.task.id = rec.id
                    this.task._option = 0
                    this.task.area = rec.area
                    this.task.named = rec.named
                    this.task.phoned = rec.phoned

                    this.task.is_new = false
                }

                setTimeout(e => { this.msg_typed = -1; this.re_choise = true }, 1000)
                this.show_contact_menu = false
            },

            valida_Phoned() {
                const v = this.task.phoned.trim()
                this.tip_phoned = this.validate.val_phoned( v, '聯絡人號碼' )
                this.task.phoned = v.replace('.', '').trim()

                if (this.tip_phoned == true) { this.same() }
                if (this.task.phoned == ' ') { this.tip_phoned = true; this.show_contact_menu = false }
            },
            valida_Named() {
                const v = this.task.named.trim()
                this.tip_named = this.validate.val_length( v, '聯絡人號碼', 2, 60 )
            },

            valida_Area() {
                const p = this.task.phoned.trim()
                if (p) {
                    this.valida_Phoned()
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>