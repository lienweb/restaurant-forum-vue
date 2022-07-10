<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <!--  || \'https://via.placeholder.com/300\??? -->
          <img :src="user.image" width="140px" height="140px">
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge bg-secondary">追蹤人數：{{ user.FollowerCount }}</span>
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
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$RV9wcGC0JZip8.Hc4GGXYujrS2bcVVHW/094Blsd0tyAnizqc7EhS',
      isAdmin: true,
      image: null,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS',
      isAdmin: false,
      image: null,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$AO.O77pnpFTWGbvBvEK/OOBaAxA93X9AlBk7NZOYyck0IRcooLudm',
      isAdmin: false,
      image: null,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false
    }
  ]
}
export default {
  name: 'users-top',
  components: {
    NavTabs
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers () {
      this.users = dummyData.users
    },
    followUser (userId) {
      this.users = this.users.map((user) => {
        if (user.id !== userId) {
          return user
        } else {
          return {
            ...user,
            // Followers: this.user.Followers.push(user)
            FollowerCount: user.FollowerCount + 1,
            isFollowed: true
          }
        }
      })
    },
    unfollowUser (userId) {
      this.users = this.users.map((user) => {
        if (user.id !== userId) {
          return user
        } else {
          return {
            ...user,
            FollowerCount: user.FollowerCount - 1,
            isFollowed: false
          }
        }
      })
    }
  },
  created () {
    this.fetchUsers()
  }
}
</script>
