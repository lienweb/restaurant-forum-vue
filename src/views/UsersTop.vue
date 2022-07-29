<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template>
      <h1 class="mt-5">美食達人</h1>
      <hr>
      <div class="row text-center">
        <div class="col-3" v-for="user in users" :key="user.id">
          <router-link :to="{ name: 'user', params: { id: user.id } }">
            <!--  || \'https://via.placeholder.com/300\??? -->
            <img :src="user.image" width="140px" height="140px">
          </router-link>
          <h2>{{ user.name }}</h2>
          <span class="badge bg-secondary">追蹤人數：{{ user.followerCount }}</span>
          <p class="mt-3">
            <button type="button" class="btn btn-danger" v-if="user.isFollowed" @click="unfollowUser(user.id)">
              取消追蹤
            </button>
            <button type="button" class="btn btn-primary" v-else @click="followUser(user.id)">
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import usersAPI from '../apis/users.js'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'users-top',
  components: {
    NavTabs,
    Spinner
  },
  data () {
    return {
      users: [],
      isLoading: true
    }
  },
  // 這要放得比fetchTopUsers()前面，不然會執行不到
  created () {
    this.fetchTopUsers()
  },
  methods: {
    async fetchTopUsers () {
      try {
        const { data } = await usersAPI.getTopUsers()
        // if (!data.users) {
        //   Toast.fire({
        //     icon: 'info',
        //     title: '無美食達人資料'
        //   })
        //   return
        // }

        // 取部分資料
        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人資料，請稍後再重試'
        })
      }
    },
    async followUser (userId) {
      try {
        const { data } = await usersAPI.addUserFollowing(userId)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true
            }
          }
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再重試'
        })
      }
    },
    async unfollowUser (userId) {
      try {
        const { data } = await usersAPI.deleteUserFollowing(userId)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false
            }
          }
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再重試'
        })
      }
    }
  }
}
</script>
