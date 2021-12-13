<template>
    <select v-model="area" @change="$emit('choise_Father', area)">
        <option v-for="(v, i) in items" :key="i" :value="v.area">
            +&nbsp;{{ v.area }}
        </option>
    </select>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                area: 852,
                items: [
                    {
                        area: 852
                    },
                    {
                        area: 853
                    },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>