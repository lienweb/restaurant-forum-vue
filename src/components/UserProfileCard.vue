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
            <li><strong>{{ userProfile.comments.length }}</strong> 已評論餐廳</li>
            <li><strong>{{ userProfile.favoritedRestaurants.length }}</strong> 收藏的餐廳</li>
            <li><strong>{{ userProfile.followings.length }}</strong> followings (追蹤者)</li>
            <li><strong>{{ userProfile.followers.length }}</strong> followers (追隨者)</li>
          </ul>
          <p>
          </p>
          <form action="/following" method="POST" style="display: contents;">
            <button type="button" class="btn btn-primary" v-if="currentUserId === userProfile.id"
              @click.stop.prevent="handleEdit">Edit</button>
            <button type="submit" class="btn btn-danger" v-else-if="isFollowed"
              @click.stop.prevent="deleteFollowing">取消追蹤</button>
            <button type="submit" class="btn btn-primary" v-else @click.stop.prevent="addFollowing">追蹤</button>
          </form>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userProfile: {
      type: Object,
      required: true
    },
    follow: {
      type: Boolean,
      required: true
    },
    currentUserId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      isFollowed: this.follow
    }
  },
  methods: {
    addFollowing () {
      this.isFollowed = true
      this.$emit('after-follow', this.isFollowed)
    },
    deleteFollowing () {
      this.isFollowed = false
      this.$emit('after-follow', this.isFollowed)
    }
  }
}
</script>
