<template>
    <nav class="contact_menu">
        <ul v-if="!loading"
        
            :class="{ 'nav_y': (users && users.length > 6) }"
        >
            <li
                class="cm_item"
                v-for="(v, i) in users" :key="i"

                @click="choise(i)"
            >
                <user-name-avatar :named="v.named"></user-name-avatar>
            </li>

            <li @click="plus">
                <i class="bi bi-plus-lg"></i>&nbsp;&nbsp;新建用戶
            </li>
        </ul>
        <ul v-else class="contact_menu_empty">
            <li>
                加載中
            </li>
        </ul>

        <widget-contact-filter ref="contREF"></widget-contact-filter>
    </nav>
</template>

<script>
import UserNameAvatar from '@/components/ui/contact/UserNameAvatar.vue'
import WidgetContactFilter from '../filter/WidgetContactFilter.vue'
    export default {
        components: { UserNameAvatar, WidgetContactFilter },
        name: '',
        props: {
            _area: Number,
            _phoned: String
        },
        mounted() {
            
            this.lunching_User()
        },
        methods: {
            plus() {
                this.$emit('res_Father', 1)
            },
            choise(i) {
                this.$emit('res_Father', this.users[i])
            },
            
            async lunching_User() {
                this.users = [ ]

                let res = await this.$refs.contREF.switch_Contact(this._area, this._phoned)
                if (res) {
                    this.users = res
                }

                this.loading = false
            }
        },
        data() {
            return {
                users: [ ],
                loading: true
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>