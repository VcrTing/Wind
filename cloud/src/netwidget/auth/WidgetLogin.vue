<template>
    
    <!-- 登录 -->
    <form class="login">
        <div class="mb-3">
            <label for="em" class="form-label">邮箱</label>
            <input v-model="named" type="email"  class="form-control" id="em" aria-describedby="emailHelp">
            <!-- div class="form-text">We'll never share your email with anyone else.</div -->
        </div>
        <div class="mb-3">
            <label for="pwd" class="form-label">密码</label>
            <input v-model="pass" type="password" class="form-control" id="pwd">
        </div>
        <div class="mb-3 login_sub fs_c">
            <a>注册，</a>
            <a>忘记密码？</a>
        </div>

        <div class="btn_login">
            <button type="button" class="btn btn_primary" @click="login">登录</button>
        </div>
    </form>

</template>

<script>
    export default {
        name: '',
        data() {
            return {
                named: 'qiong@163.com',
                pass: '123456'
            }
        },
        methods: {
            success(data) {
                this.$store.commit('saveLogin', data)
                alert('登录成功！！！')
                this.$router.push('/')
            },
            async _login() {
                let res = await this.conn.token(
                    this.named,
                    this.pass
                )
                console.log('登录状况 =', res)
                if (res) {
                    this.success(res)
                }
            },
            login() {
                
                this._login()
            }
        }
    }
</script>

<style lang="sass" scoped>
    
.login
    width: 380px
    margin: 24px auto
</style>