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
            <button type="button" class="btn btn-sm btn-outline-success my-2 my-sm-0" @click="logout">
              登出
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>
.navbar-toggler {
  min-width: 70px;
  margin-right: 0;
}

nav.bg-dark {
  padding: 14px 16px;
  background-color: #bd2333 !important;
}

.navbar-brand {
  font-size: 19px;
  padding: 0;
}
</style>
