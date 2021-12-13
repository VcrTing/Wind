<template>
    <div id="app">
        <layout></layout>
    </div>
</template>

<script>
import Layout from './Layout.vue'

    export default {
        components: { Layout },
        name: '',
        data() {
            return {
                shimmer: true,
                loading: false,
            }
        },
        mounted() {
            console.log('APP')
        },
        methods: {
            

            root_router() {
                return new Promise((rej, rev) => {

                    this.$router.onReady(() => {
                        rej( _layout )
                    })
                })
            },

            do_shimmer(v) { this.shimmer = v }
        },
        beforeDestroy() {
            
        },
        created() {
            // STORE
            if (sessionStorage.getItem("store")) {
                this.$store.replaceState(
                    Object.assign(
                        { }, 
                        this.$store.state,
                        JSON.parse(
                            sessionStorage.getItem("store")
                        )
                    )
                )
            }
            window.addEventListener("beforeunload", () => {
                sessionStorage.setItem(
                    "store", 
                    JSON.stringify(this.$store.state)
                )
            })
        },
    }
</script>

<style lang="sass">
@import "@/air/sass/base.sass"
@import "@/air/sass_self/sass_self.sass"
</style>