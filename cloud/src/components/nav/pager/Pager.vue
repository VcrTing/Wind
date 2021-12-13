<template>
    <div class="pager row">
        <div class="col-20"></div>
        <nav class="col-60">
            <ul>
                <li>
                    <a @click="option(-11)">
                        <i class="bi bi-chevron-double-left"></i>
                    </a>
                </li>

                <li>
                    <a @click="option(-1)">
                        <i class="bi bi-chevron-left"></i>
                    </a>
                </li>

                <li v-for="(v, i) in bar" :key="i">
                    <a :class="{ 'active': (v == now)}" @click="() => now = v">
                        <span>{{ v }}</span>    
                    </a>
                </li>

                <li>
                    <a @click="option(-2)">
                        <i class="bi bi-chevron-right"></i>
                    </a>
                </li>

                <li>
                    <a @click="option(-22)">
                        <i class="bi bi-chevron-double-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="col-20">
            
            <!-- div class="pager_fly">
                <input type="text" placeholder="" v-model="fly"
                    @keyup.enter="fly_In()"
                >
                <i class="bi bi-cursor-fill" @click="fly_In()"></i>
            </div -->
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props: {
            pager: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                now: 1,

                fly: ''
            }
        },

        watch: {
            now(n, o) {
                this.$emit('pager_Father', n)
            }
        },

        computed: {
            bar() {
                const c = 4
                let res = [ ]
                let start = 0
                const limit = 7

                if (this.now >= c) { start = this.now - c }
                for (let i= 1; i<= limit; i++ ) { 
                    let k = i + start

                    if (k > this.pager) { break }
                    res.push( k )
                }
                
                return res
            }
        },

        methods: {
            option(index) {
                let res = this.now

                if (index < -10) {
                    if (index == -11) {
                        res = 1
                    } else {
                        res = this.pager
                    }
                } else {
                    if (index == -1) {
                        res -= 1
                    } else {
                        res += 1
                    }
                }

                res = (res > this.pager) ? 1 : res
                res = (res <= 0) ? this.pager : res

                this.now = res
            },

            fly_In() {
                let res = this.fly
                if (!isNaN(res)) {
                    res = (res <= 0) ? 1 : res
                    res = (res > this.pager) ? this.pager : res
                    this.now = res

                } else { res = '' }
                
                this.fly = res
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>