<template>
    <div class="page main-w_XXL">
        <!--div>
            <breadcrumb-main></breadcrumb-main>
        </div -->

        <slot></slot>
    </div>
</template>

<script>
import BreadcrumbMain from '../nav/BreadcrumbMain.vue'
    export default {
  components: { BreadcrumbMain },
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>