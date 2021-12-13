<template>
    <div class="contact_option contact_option_active mt td contact_plus">
        <div class="w-8">
            #<slot></slot>
        </div>
        <div class="w-24">
            <input class="w-100" placeholder="请输入联络人姓名" v-model="contact.named">
        </div>
        <div class="w-35">
            <div class="input-attch">
                <area-select @choise_Father="(v) => contact.area = v"></area-select>
                <input class="w-100" placeholder="请输入电话号码" v-model="contact.phoned">
            </div>
        </div>
        <div class="w-18">
            
            <input class="w-100" placeholder="备注" v-model="contact.mark">
        </div>
        <div class="w-8 fx-r">
            <button class="btn_primary" @click="save">保存</button>
        </div>
        <div class="w-7 fx-r">
            <button class="btn-primary cancel" @click="$emit('cancel_Father')">取消</button>
        </div>

        <widget-contact-plus ref="plusREF"></widget-contact-plus>
    </div>
</template>

<script>
import AreaSelect from '../../../components/element/form/AreaSelect.vue'
import WidgetContactPlus from '../../../netwidget/contact/option/WidgetContactPlus.vue';
    export default {
        components: { AreaSelect, WidgetContactPlus },
        name: '',
        props: {
            mode: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {

                contact: {
                    named: '',
                    area: 852,
                    phoned: '',
                    mark: ''
                }
            }
        },
        methods: {
            save() {
                if (!this.contact.named) { alert('联络人姓名未填！'); return }
                if (!this.contact.phoned) { alert('电话号码未填！'); return }
                
                if (this.mode == 1) { this.$emit('res_Father', this.contact); return }

                let res = this.$refs.plusREF.plus(this.contact)

                if (res) {
                    this.$emit('plus_Father', res)
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>