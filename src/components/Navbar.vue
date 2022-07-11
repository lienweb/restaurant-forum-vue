<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        餐廳評論網
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="navbar-nav">
          <!-- is user is admin -->
          <router-link to="/admin" class="nav-link text-white mr-3" v-if="currentUser.isAdmin">
            管理員後台
          </router-link>

          <template v-if="isAuthenticated">
            <!-- is user is login -->
            <router-link :to="{ name: 'user', params: { id: currentUser.id } }" class="nav-link text-white mr-3">
              {{ currentUser.name || '使用者' }} 您好
            </router-link>
            <button type="button" class="btn btn-sm btn-outline-success my-2 my-sm-0">
              登出
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// eslint disable
// seed data:模擬API傳入資料
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  // Vue 會在沒有資料時使用此預設值
  data () {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    /**
     * 會向API拉取資料
     */
    fetchUser () {
      this.currentUser = {
        // 少了最外層的物件：因為若屬性相同，後面會蓋掉前面
        ...this.currentUser, // default
        ...dummyUser.currentUser // API拉取資料後
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  }
}
</script>
