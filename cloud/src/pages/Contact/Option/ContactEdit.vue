<template>
    <contact-plus @cancel_Father="$emit('cancel_Father')" ref="editREF" @res_Father="update">
        <slot></slot>
    </contact-plus>
</template>

<script>
import ContactPlus from './ContactPlus.vue'
    export default {
  components: { ContactPlus },
        name: '',
        props: {
            _contact: Object
        },
        mounted() {

            this.$refs.editREF.contact = this._contact
        },
        data() {
            return {
                
            }
        },
        methods: {
            update(v) {
                console.log('UPDATE =', v)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>