<template>
    <div>
        <panel>
            <h5 class="px_em">基本信息</h5>
            <category-plus-dimple></category-plus-dimple>
        </panel>

        <panel>
            <h5 class="px_em">发送规则</h5>
            <category-plus-msg></category-plus-msg>
        </panel>
    </div>
</template>

<script>
import Panel from '../../../../components/ui/panel/Panel.vue'
import CategoryPlusDimple from '../Dimple/CategoryPlusDimple.vue'
import CategoryPlusMsg from '../Msg/CategoryPlusMsg.vue'
    export default {
  components: { Panel, CategoryPlusDimple, CategoryPlusMsg },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>