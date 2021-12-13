<template>
    <div>
        <div class="row pt_s">
            <div class="col-40">
                <label for="phoned" class="d-b">
                    服务名称<span class="form-must"></span>
                </label>
                
                    <input 
                        class="w-100" id="named" 
                        v-model="task.named" 

                        @blur="valida_Named"
                        @change="valida_Named"
                        :class="{ 'input-error': (tip_named != true) }"
                        type="text" placeholder="請填入短信服务项目的名称" />
            </div>
            <div class="col-60">
                <label for="lang" class="d-b">
                    服务分类<span class="form-must"></span>
                </label>

                <cate-select-menu></cate-select-menu>
            </div>
        </div>
    </div>
</template>

<script>
import CateSelectMenu from '../../../../netwidget/category/cate/CateSelectMenu.vue'
    export default {
  components: { CateSelectMenu },
        name: '',
        data() {
            return {
                task: {
                    cate: 1,
                    named: ''
                },
                tip_named: true
            }
        },
        methods: {

            valida_Named() {
                const v = this.task.named.trim()
                this.tip_named = this.validate.val_length( v, '服务名称', 2, 60 )
            },

        }
    }
</script>

<style lang="sass" scoped>
    
</style>