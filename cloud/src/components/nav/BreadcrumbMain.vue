<template>
    <nav class="">
        <ul class="breadcrumb">
            <li
            
                v-for="(v, i) in srcs" :key="i"

                :class="{
                    'active': in_page(i)
                }"
                :aria-current="in_page(i) ? 'page' : ''"
            >
                <a :href="v.src" v-if="!in_page(i)">
                    {{ v.txt }}
                </a>
                <a v-else >
                    {{ v.txt }}
                </a>

                <i class="bi bi-chevron-right" v-if="i < srcs.length - 1"></i>&nbsp;
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                srcs: [
                    {
                        txt: '短信任務管理系統',
                        src: '/'
                    },
                ],
                named: {
                    sms: '短信任務',
                    plus: '申請操作',
                    write: '數據填入',
                    contact: '联络人',
                    view: '查询展示',
                    preview: '任務預覽',
                    service_sms: '服务项目',
                }
            }
        },
        mounted() {
            this._urls()
        },
        methods: {
            _urls() {
                let rs = this.$route.path.split('/').filter(e => e != '')
                let p = ''
                rs = rs.map(e => {
                    p += ('/' + e)
                    return {
                        txt: this.crunm(e),
                        src: p
                    }
                })
                this.srcs = rs
            },

            crunm(n) {
                return this.named[n]
            },

            in_page(i) {
                return (i >= (this.srcs.length - 1))
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>