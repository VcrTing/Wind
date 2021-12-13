<template>

    <table-layout>
        <nav class="tr" slot="tr">
            <div class="w-8">编号</div>
            <div class="w-24">
                <span>联络人</span>
                <!--span class="sux sux_purple">共{{ _count }}人</span-->
            </div>
            <div class="w-18">电话号码</div>
            <div class="w-17">
                <p v-if="!edit && !plus">
                    添加时间
                </p>
            </div>
            <div class="w-25">备注</div>
            <div class="w-8"></div>
        </nav>
        <contact-view-body-table 
            @rest_Father="reset"
            ref="tableREF" slot="td"
            
            :items="contact" :count="_count" 

            @status_Father="(v) => { plus = false }" 
            @editing_Father="(v) => { edit = v }"
        ></contact-view-body-table>
        
        <div slot="extra">

            <contact-plus v-if="plus" @cancel_Father="plus = false" :mode="0" @plus_Father="reset">
                {{ _count + 1 }}
            </contact-plus>
            
            <widget-contact-filter ref="contREF"></widget-contact-filter>
        </div>
    </table-layout>
    <!--div class="row panel-data pt">


        <div class="col">
            
            <div class="table hr">
                <nav class="tr">
                    <div class="w-8">编号</div>
                    <div class="w-24">联络人</div>
                    <div class="w-18">电话号码</div>
                    <div class="w-17">添加时间</div>
                    <div class="w-25">备注</div>
                    <div class="w-8"></div>
                </nav>
            </div>
            <contact-view-body-table :items="contact"></contact-view-body-table>
        </div>
        
        <widget-contact-filter ref="contREF"></widget-contact-filter>
    </div-->
</template>

<script>
import TableLayout from '../../../../components/layout/Data/TableLayout.vue'
import Pager from '../../../../components/nav/pager/Pager.vue'
import WidgetContactFilter from '../../../../netwidget/contact/filter/WidgetContactFilter.vue'
import ContactPlus from '../../Option/ContactPlus.vue'
import ContactViewBodyTable from './ContactViewBodyTable.vue'
    export default {
  components: { ContactViewBodyTable, Pager, WidgetContactFilter, TableLayout, ContactPlus },
        name: '',
        props: { _limit: Number, _count: Number },
        data() {
            return {
                loading: true,
                plus: false,
                edit: false,

                contact: [ ],
                funnel: {
                    '_sort': 'created_at:desc'
                }
            }
        },
        mounted() {
            this.reset()
        },
        computed: {
            
        },
        methods: {
            next(now) {
                this.funnel._start = (now - 1) * this._limit
                this.funnel._limit = this._limit

                console.log('FUNNEL =', this.funnel, now)

                this._switch()
            },
            async _switch( ) {
                let cont = await this.$refs.contREF.switching( this.funnel )
                if (cont) {
                    this.contact = cont.map(e => {
                        e.edit = false
                        return e
                    })

                    console.log(this.contact)
                }
            },

            reset() {
                this.next(1)
            },

            open_plus() {
                this.plus = true
                this.$refs.tableREF.editing = false
                this.contact.map(e => e.edit = false)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>