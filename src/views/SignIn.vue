<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input id="email" name="email" type="email" class="form-control" placeholder="email" autocomplete="username"
          v-model="email" required autofocus>
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input id="password" v-model="password" name="password" type="password" class="form-control"
          placeholder="Password" autocomplete="current-password" required>
      </div>

      <button class="btn btn-lg btn-primary w-100 mb-3" type="submit" :disabled="isProcessing">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization'
import { Toast } from '../utils/helpers'

export default {
  data () {
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit (e) {
      // async await
      // 向後端伺服器驗證使用者資料
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        }

        this.isProcessing = true

        // 使用 authorizationAPI 的 signIn 方法
        // 並且帶入使用者填寫的 email 和 password
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })

        const { data } = response

        if (data.status !== 'success') { // catch error
          throw new Error(data.message)
        }

        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)

        // 成功登入後轉址到餐聽首頁
        this.$router.push('/restaurants')
      } catch (error) {
        this.password = ''
        this.isProcessing = false

        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
      }
      /*
      // Promise
      // 向後端伺服器驗證使用者資料
      authorizationAPI.signIn({
        email: this.email,
        password: this.password
      }).then(response => {
        // 取得 API 請求後的資料
        const { data } = response

        // error handling: app層級的
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'error',
            title: '未輸入帳號密碼，請重新輸入'
          })
          // throw new Error(data.message)
          return
        }

        // 將 token 存放在 localStorage 內
        localStorage.setItem('token', data.token)

        // 轉址到landing page
        this.$router.push('/restaurants')
        // 因為成功登入就會轉址，所以不用還原 isProcessing 的狀態
      }).catch(error => {
        // 代表請求已處理完畢
        this.isProcessing = false

        // 將密碼欄位清空
        this.password = ''

        // http層級錯誤
        // 顯示錯誤提示
        Toast.fire({
          icon: 'error',
          title: 'email或密碼輸入錯誤，請重新輸入'
        })
        console.log('error', error)
      })
      */

      /*
      //dummy data
       console.log(`email:[${this.email}]`)
       console.log(`password:[${this.password}]`)
       const data = JSON.stringify({
         email: this.email,
         password: this.password
       })
       console.log(data)
      */
    }
  }
}
</script>

<style>
.colored-toast.swal2-icon-success {
  background-color: #a5dc86 !important;
}

.colored-toast.swal2-icon-error {
  background-color: #f27474 !important;
}

.colored-toast.swal2-icon-warning {
  background-color: #f8bb86 !important;
}

.colored-toast.swal2-icon-info {
  background-color: #3fc3ee !important;
}

.colored-toast.swal2-icon-question {
  background-color: #87adbd !important;
}

.colored-toast .swal2-title {
  color: white;
}

.colored-toast .swal2-close {
  color: white;
}

.colored-toast .swal2-html-container {
  color: white;
}
</style>
