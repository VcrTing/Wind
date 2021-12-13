<template>
    <div class="main-w">
        
        <div class="pb-3 pt-4 filter_bar"> 
            <select v-model="f_gender" class="form-control input">
                <option value="0">-- 性别过滤 --</option>
                <option value="1">男</option>
                <option value="2">女</option>
            </select>
            <input type="text" class="form-control input_x2" placeholder="搜索内容" v-model="f_search">

            <button class="btn btn-primary" @click="data(1, true)">过滤</button>
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

        <nav aria-label="navigation">
            <input type="number" class="form-control input-page" v-model="now_page" placeholder="页数">

            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" aria-label="Previous"  @click="now_page = 1">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                <li class="page-item" v-for="i in page_gener" :key="i" :class="{ 'active': now_page == i }">
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

    <!-- widget-contact-page-s-imple></widget-contact-page-s-imple-->
</template>

<script>
import WidgetContactPageSImple from '../../netwidget/contact/WidgetContactPageSImple.vue'
    export default {
  components: { WidgetContactPageSImple },
        name: '',
        data() {
            return {
                count: 0,
                limit: 3,

                start_max: 0,
                limit_max: 9,

                items: [ ],
                items_origin: [ ],

                page: 0,
                now_page: 1,

                f_gender: 0,
                f_search: ''
            }
        },
        watch: {
            now_page(n, o) {

                if (this.page == this.now_page) {
                    
                    this.loadData(
                        1
                    )
                }
                this.data(n)
            }
        },
        mounted() {
            /* 
                复杂分页
                在极大数据条目表中，
                先取出 100 条，
                分页在 100 条中进行。

                每次过滤虽然要经过后台，
                但是过滤后的 分页不需要经过后台，
                大大降低了后台的负荷，
            */
            this.data(1, true)
        },
        computed: {
            page_gener() {
                const c = 2
                let res = [ ]
                let start = 0
                const long = 4
                
                if (this.now_page >= c) { start = this.now_page - c }

                for(let i= 1; i<= long; i++ ) {
                    let k = i + start
                    if (k > this.page) break;

                    res.push( k ) 
                }

                return res
            }  
        },
        
        methods: {

            loadData(k) {
                if (k > 0) {
                    
                } else {

                }

                console.log('加载后续数据。。。')
            },

            _build_filter(res = { }) {

                res['_start'] = this.start_max
                res['_limit'] = this.limit_max

                if (this.f_gender && this.f_gender != '0') {
                    res['gender'] = this.f_gender
                }
                if (this.f_search) {
                    res['_q'] = this.f_search
                }
                return res
            },

            _slice_data(origin, n = 1) {
                let res = this.strapi.pager.page_to_condition(n, this.limit, this.page)
                return this.strapi.items.slice_items(
                    origin,
                    res['_start'], this.limit
                )
            },

            data(n = 1, init = false) {
                if (init) {
                    // 获取 指定所有 数据
                    this.userCount(n)
                    let f = this._build_filter()
                    console.log('获取所有数据，并且转到第一页 =', f)
                } else {
                    this.items = this._slice_data(this.items_origin, n)
                }
            },
            // 查询数量
            async userCount(n) {
                let res = await this.conn.get(
                    this.api.build(this.conf.ENDPOINT.contact + '/count'),
                    this.$store.state.token, this._build_filter()
                )

                if (res) {
                    this.count = this.strapi.count(res, this.limit_max) ? this.limit_max : res

                    this.page = this.strapi.pager.pager(this.count, this.limit)

                    console.log(
                        this.count,
                        this.page
                    )

                    await this.userLoading(n)
                }
            },

            // 分页筛选
            async userLoading(n) {
                let res = await this.conn.get(
                    this.api.contact,
                    this.$store.state.token, this._build_filter()
                )
                    console.log( 'RES =', res )

                if (res) {
                    this.items_origin = res
                    this.items = this._slice_data(res)
                }
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