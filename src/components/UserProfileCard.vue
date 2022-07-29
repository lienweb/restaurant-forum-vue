<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="userProfile.image" width="300px" height="300px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ userProfile.name }}</h5>
          <p class="card-text">
            {{ userProfile.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{ userProfile.commentsLength }}</strong> 已評論餐廳</li>
            <li><strong>{{ userProfile.favoritedRestaurantsLength }}</strong> 收藏的餐廳</li>
            <li><strong>{{ userProfile.followingsLength }}</strong> followings (追蹤者)</li>
            <li><strong>{{ userProfile.followersLength }}</strong> followers (追隨者)</li>
          </ul>
          <p>
          </p>
          <form action="/following" method="POST" style="display: contents;">
            <router-link type="button" class="btn btn-primary" v-if="currentUser.id === userProfile.id"
              :to="{ name: 'user-edit', params: { id: userProfile.id } }">Edit</router-link>
            <button type="submit" class="btn btn-danger" v-else-if="isFollowed"
              @click.stop.prevent="deleteFollowing(currentUser.id)">取消追蹤</button>
            <button type="submit" class="btn btn-primary" v-else
              @click.stop.prevent="addFollowing(userProfile.id)">追蹤</button>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    userProfile: {
      type: Object,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isFollowed: this.initialIsFollowed,
      isLoading: true
    }
  },
  methods: {
    async addFollowing (userId) {
      try {
        const { data, statusText } = await usersAPI.addUserFollowing(userId)
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.isFollowed = true
      } catch (error) {
        Toast.fire({
          type: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowing (userId) {
      try {
        const { data, statusText } = await usersAPI.deleteUserFollowing(userId)
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.isFollowed = false
        this.$emit('after-follow', { followStatus: this.isFollowed, followers: this.followers })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          Title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  },
  watch: {
    initialIsFollowed (isFollowed) {
      this.isFollowed = isFollowed
    }
  }
}
</script>
