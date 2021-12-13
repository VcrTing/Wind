<template>
    <div class="row">
        <div class="col px_em">

            <p>联络人姓名：Eric</p>
            <p>联络人电话：+852 92779625</p>
            <p>模版语言：zh</p>

            <sms-plus-preview-timerule></sms-plus-preview-timerule>
        </div>
    </div>
</template>

<script>
import SmsPlusPreviewTimerule from '../Service/SmsPlusPreviewTimerule.vue'
    export default {
  components: { SmsPlusPreviewTimerule },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>