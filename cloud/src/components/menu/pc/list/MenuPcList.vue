<template>
    <div class="v_menu_pc">

        <div class="menu_item"
            v-for="(v, i) in items" :key="i" 
        >

            <div data-bs-toggle="collapse" 
                aria-expanded="false" 

                class="menu_header"
                :id="'header_' + i"
                
                @click="show(i, v.children)"
            >

                <i :class="v.icon" class="v_mark"></i>
                <span>
                    {{ v.txt }}
                </span>
                <i v-if="v.children" class="bi bi-chevron-right v_trg"></i>
            </div>

            <div 
                v-if="v.children" class="collapse"
                :class="{ 'active': v.active }"
                :id="'content_' + i">

                <div class="menu_content" 
                    v-for="(c, k) in v.children" :key="k"
                    :class="{ 'menu_active': c.src == $route.path }"

                    @click="switch_Route(c.src)"
                >
                    <a>
                        {{ c.txt }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {

                items: [
                    {
                        txt: '短信',
                        active: true,
                        icon: 'bi bi-cloud-haze2',
                        children: [
                            {
                                txt: '任务列表',
                                src: '/task_sms/view'
                            },
                            {
                                txt: '新增',
                                src: '/sms/plus/write'
                            },
                        ]
                    },
                    {
                        txt: '联络人',
                        icon: 'bi bi-person',
                        active: true,
                        children: [
                            {
                                txt: '联络人列表',
                                src: '/contact/view'
                            },
                            {
                                txt: '新增',
                                src: '/contact/plus'
                            },
                        ]
                    },
                    {
                        txt: '服务项目',
                        icon: 'bi bi-list-task',
                        active: true,
                        children: [
                            {
                                txt: '服务项目列表',
                                src: '/service_sms/view'
                            },
                            {
                                txt: '新增',
                                src: '/service_sms/plus'
                            },
                        ]
                    },
                    {
                        txt: '其他',
                        icon: 'bi bi-gear'
                    }
                ]
            }
        },
        mounted() {
            console.log(this.$route.path)
        },
        methods: {
            switch_Route(v) {
                console.log(v)
                this.$router.push(v)
            },


            show(index, has_child) {
                console.log('I =', index)
                if (has_child) {
                    let c = this.items[index]
                    c.active = !c.active
                    if (c.active) {
                        document.getElementById('content_' + index).classList.add('active')
                        document.getElementById('header_' + index).classList.add('active-header')
                    } else {
                        document.getElementById('content_' + index).classList.remove('active')
                        document.getElementById('header_' + index).classList.remove('active-header')
                    }
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>