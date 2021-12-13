<template>
    <div class="main-w">
        
        <div class="pb-3 pt-4 filter_bar"> 
            <select v-model="f_gender" class="form-control input">
                <option value="0">-- 性别过滤 --</option>
                <option value="1">男</option>
                <option value="2">女</option>
            </select>
            <input type="text" class="form-control input_x2" placeholder="搜索内容" v-model="f_search">

            <button class="btn btn-primary" @click="data(1)">过滤</button>
        </div>

        <table class="table table-hover contact_table">
            <tr>
                <td>Avatar</td>
                <td>Named</td>
                <td>Area</td>
                <td>Phoned</td>
                <td>Gender</td>
                <td>Birthday</td>
                <td>Status</td>
            </tr>
            <tbody> 
                <tr v-for="(v, i) in items" :key="i">
                    <td>
                        <img :src="v.avatar" class="avatar">
                    </td>
                    <td>
                        {{ v.named }}
                    </td>
                    <td>
                        {{ v.area }}
                    </td>
                    <td>
                        {{ v.phoned }}
                    </td>
                    <td>
                        <i class="bi bi-gender-female" v-if="v.gender == 2"></i>
                        <i class="bi bi-gender-male" v-else-if="v.gender == 1"></i>
                        <i class="bi bi-gender-ambiguous" v-else></i>
                    </td>
                    <td>
                        {{ v.birth }}
                    </td>
                    <td>
                        <button v-if="v.status" type="button" class="btn btn-success">
                            <i class="bi bi-check-circle-fill"></i>
                        </button>
                        <button v-else type="button" class="btn btn-danger">
                            <i class="bi bi-exclamation-circle-fill"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <nav aria-label="Page navigation example fx-c">
            <input type="number" class="form-control input-page" v-model="now_page" placeholder="页数">

            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" aria-label="Previous"  @click="now_page = 1">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                <li class="page-item" v-for="i in page" :key="i" :class="{ 'active': now_page == i }">
                    <a class="page-link" @click="now_page = i">
                        {{ i }}
                    </a>
                </li>

                <li class="page-item">
                    <a class="page-link" aria-label="Next"  @click="now_page = page">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {

                items: [ ],

                count: 0, // 数据量
                limit: 3, // 限定数量
                page: 0, // 总 页面
                now_page: 1, // 现在 页面

                f_gender: 0,
                f_search: ''
            }
        },
        mounted() {


            /* 
            
                普通分页方法
                每一个页面对应一个分页，
                每一个分页都要经过后台查询，
                单人项目中这种分页占优势，便捷开发
            */
            this.init()
        },
        watch: {
            // 监听分页面
            async now_page(n, o) {
                this.items = await this.userLoading(n)
            } 
        },
        methods: {

            async init(n = 1) {
                let res = await this.userCount(n)

                if (res) {
                    this.count = res
                    this.page = this.strapi.pager.pager(this.count, this.limit)
                    this.items = await this.userLoading(n)
                }
            },

            // 制造 Filter
            filter(_now, _count = false) {
                let res = { }
                if (!_count) {
                    res = this.strapi.pager.page_to_condition(_now, this.limit, this.page)
                }

                if (this.f_gender > 0) {
                    res['gender'] = this.f_gender
                }
                if (this.f_search) {
                    res['_q'] = this.f_search
                }
                return res
            },

            // 查询数量
            async userCount(n) {
                return await this.conn.get(
                    this.api.build(this.conf.ENDPOINT.contact + '/count'),
                    this.$store.state.token, this.filter(n, true)
                )
            },

            // 分页筛选
            async userLoading(n) {
                let res = await this.conn.get(
                    this.api.contact, this.$store.state.token,
                    this.filter(n, false)
                )
                res = res ? res : [ ]
                return res
            }
        }
    }
</script>

<style lang="sass" scoped>
.input,
.input_x2
    max-width: 130px
    display: inline-block
.input_x2
    max-width: 240px

.bi-gender-male,
.bi-gender-female
    color: #FFF
    padding: 2px 4px
    border-radius: 4px

.bi-gender-male
    background: skyblue
.bi-gender-female
    background: pink

.main-w
    max-width: 800px
    margin: 12px auto

.contact_table
    width: 100%
    td
        vertical-align: middle
        *
            cursor: pointer

nav,
.filter_bar
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center

.filter_bar
    flex-wrap: nowrap
    justify-content: space-between

.pagination
    margin: 24px auto
    li > a
        padding: 6px 18px
        cursor: pointer
    *
        user-select: none

.input-page
    width: 60px
    border-radius: 4px
</style>