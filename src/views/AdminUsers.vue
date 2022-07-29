<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <table class="table" v-else>
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th scope="col" width="140">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'Admin' : 'User' }}</td>
          <td>
            <button type="button" class="btn btn-link" v-show="!user.isAdmin"
              @click.prevent.stop="toggleUserRole(user.id, user.isAdmin)">
              set as admin
            </button>
            <button type="button" class="btn btn-link" v-show="user.isAdmin" v-if="currentUser.id !== user.id"
              @click.prevent.stop="toggleUserRole(user.id, user.isAdmin)">
              set as user
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import adminAPI from '../apis/admin'
import { mapState } from 'vuex'
import Spinner from '../components/Spinner.vue'
import { Toast } from '../utils/helpers'

export default {
  components: {
    AdminNav,
    Spinner
  },
  data () {
    return {
      users: [],
      isLoading: true
    }
  },
  methods: {
    async fetchUsers () {
      try {
        const { data, statusText } = await adminAPI.users.get()
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.users = data.users
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          Title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
    async toggleUserRole (userId, isAdmin) {
      try {
        const isAdminStr = (!isAdmin).toString()
        const { data, statusText } = await adminAPI.users.update({ userId, isAdmin: isAdminStr })
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          }
          return {
            ...user,
            isAdmin: !isAdmin
          }
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          Title: '無法更新使用者權限'
        })
      }
    }
  },
  created () {
    this.fetchUsers()
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
