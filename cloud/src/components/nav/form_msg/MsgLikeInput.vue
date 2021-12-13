<template>
    <p class="input_tip_success cr_success" v-if="typed == 1">
        <i class="bi bi-check-circle-fill"></i>&nbsp;
        <slot></slot>
    </p>

    <p class="input_tip_new cr_new" v-else-if="typed == 2">
        <i class="bi bi-info-circle-fill"></i>&nbsp;
        <slot></slot>
    </p>
</template>

<script>
    export default {
        name: '',
        props: {
            typed: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>