<template>
    <div>
        <panel>
            <div class="row pb_s">
                <div class="col-50">
                    <p class="h5 tis">查找联络人</p>
                </div>
                <div class="col-50 fx-r"></div>
            </div>
            <contact-view-filter></contact-view-filter>
        </panel>

        <div class="pb fx-l pl_x2">
            <span class="pr_s">
                <b>联络人列表</b>
                &nbsp;&nbsp;
            </span>
            <button class="btn_primary" @click="$refs.bodyREF.open_plus()">添加联络人</button>
        </div>

        <panel class="panel_zero">
            <contact-view-body :_limit="limit" :_count="count" ref="bodyREF"></contact-view-body>
        </panel>

        <div>
            <pager @pager_Father="$refs.bodyREF.next" :pager="Math.ceil(count / limit)" v-if="count"></pager>

            <widget-contact-count ref="countREF"></widget-contact-count>
        </div>
    </div>
</template>

<script>
import BreadcrumbMain from '../../../components/nav/BreadcrumbMain.vue'
import Pager from '../../../components/nav/pager/Pager.vue'
import Panel from '../../../components/ui/panel/Panel.vue'
import WidgetContactCount from '../../../netwidget/contact/filter/WidgetContactCount.vue'
import ContactPlus from '../Option/ContactPlus.vue'
import ContactViewFilter from './Bar/ContactViewFilter.vue'
import ContactViewBody from './Body/ContactViewBody.vue'
    export default {
  components: { Panel, ContactViewBody, ContactViewFilter, BreadcrumbMain, Pager, WidgetContactCount, ContactPlus },
        name: '',
        data() {
            return {
                limit: 5,
                count: 0   
            }
        },
        async mounted() {
            this.count = await this.$refs.countREF.count()
        }
    }
</script>

<style lang="sass" scoped>
    
</style>