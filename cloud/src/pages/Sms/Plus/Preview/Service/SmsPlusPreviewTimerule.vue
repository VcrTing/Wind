<template>
    <div>
        <div>
            时间规则：
            <span v-for="(v, i) in timerule" :key="i">
                {{ v.mark }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                timerule: [
                    {
                        mark: '一天后',
                        id: 1, day: 1,
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>