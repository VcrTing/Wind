<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods: {

            ser_Category(res) {
                let category = [ ]

                if (res) {
                    let cates = { }

                    res.map((v, i) => {
                        cates[v.category.id] = v.category
                    })

                    for (let k in cates) {
                        const cc = cates[k]
                        cc.children = [ ]

                        res.map((v, i) => {
                            if (v.category.id == cc.id) {
                                v.category = v.category.id
                                cc.children.push(v)
                            }
                        })
                    }

                    for (let k in cates) { category.push(cates[k]) }
                }

                return category
            },

            async switch_Msg() {

                let res = await this.conn.get(
                    this.api.mag_group, this.$store.state.token, { }
                )

                return this.ser_Category(res)
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>