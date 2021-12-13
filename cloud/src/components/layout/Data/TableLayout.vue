<template>
    <div class="table">
        <div class="tr_hui">
            <slot name="tr"></slot>
        </div>
        <div>
            <slot name="td"></slot>
        </div>
        <slot name="extra"></slot>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>