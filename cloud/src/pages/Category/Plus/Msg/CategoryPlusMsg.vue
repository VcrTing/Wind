<template>
    <div>

        <div class="row pt_s">
            <div class="col-100 px_em">

                <nav class="" v-for="(v, i) in msgs" :key="i">
                    <div class="fx-s">
                        <p>
                            规则一
                        </p>
                        <button>启用</button>
                    </div>
                    <div class="row">
                        <div class="col-20">
                            <label>单位</label>
                            <select v-model="v.unit">
                                <option value="DD">天</option>
                                <option value="XQ">星期</option>
                                <option value="MM">月</option>
                            </select>
                        </div>
                        <div class="col-40">
                            <label>值</label>
                            <input type="number" v-model="v.num">
                        </div>

                        <div class="col-20"></div>
                        <div class="col-20"></div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                msgs: [
                    {
                        day: 30,
                        mark: '',
                        num: 1,
                        unit: 'MM',

                        msg_ch: '',
                        msg_en: ''
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>