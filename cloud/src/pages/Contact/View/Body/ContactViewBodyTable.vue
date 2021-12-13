<template>
    <div>
        <div v-for="(v, i) in items" :key="i">
            <nav class="td">
                <div class="w-8">100{{ i }}</div>
                <div class="w-24 pr_s ">
                    <i class="bi bi-person ti s"></i>
                    <span class="t-pri">{{ v.named }}</span>
                </div>
                <div class="w-18">
                    <span class="ti s">+{{ v.area }}</span>
                    {{ v.phoned }}
                </div>
                <div class="w-17">{{ view.ser_timed( v.created_at, true ) }}</div>
                <div class="w-25">{{ v.mark }}</div>
                <div class="w-8 td-option fx-r">          
                    <!-- i class="bi bi-trash"></i -->
                    <i class="bi bi-pencil-square" @click="status(v, true)" v-if="!editing"></i>&nbsp;&nbsp;
                    <i class="bi bi-trash" @click="trash(v)"></i>
                </div>
            </nav>

            <contact-edit v-if="v.edit" :_contact="v" @cancel_Father="status(v, false)">
                {{ count + 1 }}
            </contact-edit>
        </div>

        <widget-contact-trash ref="trashREF"></widget-contact-trash>
    </div>
</template>

<script>
import WidgetContactTrash from '../../../../netwidget/contact/option/WidgetContactTrash.vue'
import ContactEdit from '../../Option/ContactEdit.vue'
    export default {
  components: {ContactEdit, WidgetContactTrash  },
        name: '',
        props: {
            items: Array,
            count: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                editing: false
            }
        },
        watch: {
            editing(n, o) {
                this.$emit('editing_Father', n)
            }
        },
        methods: {
            async trash(v) {
                if (confirm(`你确定要删除【${v.named}】吗？`)==true) {
                    const res = await this.$refs.trashREF.trash(v)
                    if (res) {
                        this.$emit('rest_Father')
                    }
                }
            },
            status(v, f) {
                v.edit = f
                this.editing = f
                this.$emit('status_Father', f)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>