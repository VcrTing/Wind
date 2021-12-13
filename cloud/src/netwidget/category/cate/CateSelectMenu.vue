<template>
    <div class="fx-s">
        <select class="mr" id="lang" v-model="cate">
            <option :value="v.id" v-for="(v, i) in categories" :key="i">
                {{ v.named }}
            </option>
        </select>
        <button class="btn_primary_thin">
            申请新分类
            <widget-cate-filter ref="cateREF"></widget-cate-filter>
        </button>
    </div>
</template>

<script>
import WidgetCateFilter from './WidgetCateFilter.vue'
    export default {
  components: { WidgetCateFilter },
        name: '',
        data() {
            return {
                cate: 0,
                categories: [

                ]
            }
        },
        mounted() {
            this.cateLunch()
        },
        methods: {
            async cateLunch() {
                // let res = await this.$refs.cateREF.switch_Category()
                this.categories = this.$store.state.category
                this.cate = this.categories ? this.categories[0].id : '0'
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>