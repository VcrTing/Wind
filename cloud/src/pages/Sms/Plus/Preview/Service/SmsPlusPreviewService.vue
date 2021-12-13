<template>
    <div class="row">
        <div class="col px_em">
            <div v-for="(v, i) in datas" :key="i" class="pb">
                <p>发送时间：{{ v.timed }}</p>
                <p>
                    发送内容：{{ v.msg }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                datas: [
                    {
                        timed: '2021-12-01',
                        msg: '这里是首发'
                    },
                    {
                        timed: '2021-12-04',
                        msg: 'Welcome on board! Congrats! You are logged in as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Collection-Type.'
                    },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>