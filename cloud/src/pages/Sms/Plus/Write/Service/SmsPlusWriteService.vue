<template>
    <div>
        <div class="row">
            <div class="col-100">
                <label class="d-b">服務類目<span class="form-must"></span></label>
                <ul class="items items-cate"
                
                    :class="extra_class(true)"
                >
                    <li 
                        v-for="(v, i) in category" :key="i" 

                        @click="() => cate = v.id" 
                        :class="{ 'active': (cate == v.id) }"
                    >
                        <span>
                            {{ v.named }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-100">
                <label class="d-b">服務內容<span class="form-must"></span></label>

                <div class="item-wrapper"
                    v-if="service && service.length > 0"
                >
                    <ul class="items items-service" 
                        :class="extra_class(false)"
                        >
                        <li 
                            v-for="(v, i) in service" :key="i" 

                            @click="() => serv = v.id" 

                            :class="{ 'active': (serv == v.id), }"
                        >
                            <span>
                                {{ v.named }}
                            </span>
                        </li>
                    </ul>
                </div>
                <div v-else class="items-service-empty">
                    <span>
                        無選項
                    </span>
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
                cate: 0,
                serv: 0,
                category: [ ],
                // service: [ ]
            }
        },
        mounted() {
            this.category = this.$store.state.category

            this.cate = (this.category) ? this.category[0].id : 0
        },
        computed: {
            service() {
                return this._service()
            }
        },
        methods: {

            _service() {
                let res = this.category.filter(e => e.id == this.cate)
                if (res && res[0]) { return res[0].children }
                return [ ]
            },

            for_Res(rec) {
                if (!rec) {
                    let res = this._service()
                    res = res ? res.filter(e => e.id == this.serv) : [ ]
                    res = res ? res[0] : null
                    return res
                } else {
                    this.serv = rec.id
                    this.cate = rec.category
                }
            },

            extra_class(v) {
                if (this.cate == 3) {
                    if (v) {
                        return 'item-shop'
                    } else {
                        return 'item-service-shop'
                    }
                }
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>