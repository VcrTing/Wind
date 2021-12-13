<template>
    <widget-contact-insert ref="cntREF"></widget-contact-insert>
</template>

<script>
import moment from 'moment'
import WidgetContactInsert from '../contact/WidgetContactInsert.vue'
    export default {
  components: { WidgetContactInsert },
        name: '',
        data() {
            return {
                apply: [ ]
            }
        },
        methods: {
            _send_time(day) {
                let m = moment()
                m = m.add(day, 'd')
                return m.format('YYYY-MM-DD')
            },

            _task(rec) {
                let res = [ ]
                const task = rec.task
                const tr = rec.time_rule

                if (tr) {
                    tr.map(r => {
                        r.contact_json = rec.contact_json
                        r.msg_sms = r.msg_id
                        res.push(r)
                    })
                    /*
                    tr.map(r => {
                        let k = { }
                        Object.assign(k, r, task )
                        k.msg_sms = k.msg_id

                        res.push(k)
                    })
                    */
                }
                return res
            },

            _contact(rec) {
                let task = rec.task
                let ct = task.id

                // ct = ct > 0 ? false : task
                ct = task.is_new ? task : false

                // ct = task
                return ct
            },

            _clear(e) {
                // e.contact_id = e.id + ''
                e.send_date = this._send_time(e.timed)
                delete e.id
                e.ready_send = true
                e.finish_send = false
                // delete e.timed
                // delete e.order
                // delete e.msg_id
                // delete e._option
                delete e.status
                return e
            },

            async _insert(task) {
                let fo = new FormData()
                fo.append("data", JSON.stringify(task))

                let res = await this.conn.post(
                    this.api.task_sms, this.$store.state.token, fo
                )
                return res
            },

            async insert(rec) {
                this.apply = [ ]
                
                let cont = this._contact(rec)
                let res = this._task(rec)

                if (cont) {
                    delete cont.id 
                    cont = await this.$refs.cntREF.insert(cont)

                    if (cont) {
                        res.map(async (e, index) => {
                            e.id = cont.id
                            e = this._clear(e)
                            
                            e = await this._insert(e)
                            this.apply.push( { index, 'res': e } )
                        })
                    }
                    
                } else {
                    res.map(async (e, index) => {
                        e = this._clear(e)

                        e = await this._insert(e)
                        this.apply.push( { index, 'res': e } )
                    })
                }

                return this.apply
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>