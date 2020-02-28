<template>
  <div class="login">
    <div id="app">
      <div class="container">
        <div class="close">
          <span class="iconfont iconicon-test"></span>
        </div>
        <div class="logo">
          <span class="iconfont iconnew"></span>
        </div>
        <div class="inputs">
          <hminput placeholder="请输入用户名/手机号码" msg_err="用户名不规范" v-model="users.username"  type="text" :rules="/^1\d{10}$/"></hminput>
          <!-- <hminput placeholder="请输入用户名" :value="users.username" @input="handleinputs"></hminput> -->
          <br />
      <hminput placeholder="请输入密码" type="password" msg_err="密码不能为空"  v-model="users.password"></hminput>

        </div>
        <p class="tips">
          没有账号？
          <a href="#/register" class>去注册</a>
        </p>
        <!-- <div data-v-4bc01e24 class="button">登录按钮</div> -->
        <hmbtn text="登录按钮" @btnhandle="hanglebtn"></hmbtn>
      </div>
    </div>
  </div>
</template>

<script>
import { userlogin } from '@/api/user.js'
import hminput from '@/components/hminput.vue'
import hmbtn from '@/components/hmbtn.vue'
export default {
  components: {
    hmbtn,
    hminput
  },
  data () {
    return {
      users: {
        username: '100861',
        password: '123'
      }
    }
  },
  methods: {
    hanglebtn () {
      console.log(this.users)

      userlogin(this.users).then(res => {
        console.log(res)
        if (res.data.message === '登录成功') {
          localStorage.setItem('mytoken', res.data.data.token)

          this.$toast.success('登录成功')
          this.$router.push({ path: `/personal/${res.data.data.user.id}` })
        } else {
          this.$toast.fail(this.data.message)
        }
      })
        .catch(err => {
          console.log(err)

          this.$toast.fail('404,服务器请求失败')
        })
    },
    handleinputs (data) {
      console.log(data)

      this.users = data
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
}

.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}

.tips {
  text-align: right;
  margin-bottom: 20px;

  a {
    color: #3385ff;
  }
}
</style>
