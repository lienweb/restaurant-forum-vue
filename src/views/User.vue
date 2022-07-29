<template>
  <div class="container">
    <!-- user profile card -->
    <UserProfileCard :user-profile="profile" :current-user="currentUser" :initial-is-followed="isFollowed" />

    <div class="row">
      <div class="col-md-4">
        <!-- followings -->
        <UserFollowingsCard :followings="followings" />
        <!-- follower -->
        <UserFollowersCard :followers="followers" />
      </div>

      <div class="col-md-8">
        <!-- comments card -->
        <UserCommentsCard :comments="comments" />
        <!-- favorite restaurants -->
        <UserFavoritedRestaurantsCard :favorited-restaurants="favoritedRestaurants" />
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
import UserProfileCard from '../components/UserProfileCard.vue'
import UserFollowingsCard from '../components/UserFollowingsCard.vue'
import UserFollowersCard from '../components/UserFollowersCard.vue'
import UserCommentsCard from '../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from '../components/UserFavoritedRestaurantsCard.vue'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'user',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data() {
    return {
      // 改資料結構
      profile: {
        id: -1,
        name: '',
        email: '',
        image: '',
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followersLength: 0,
        followingsLength: 0
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false,
    }
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        //get user profile, then get current login user
        const { data, statusText } = await usersAPI.get({ userId })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        const { profile, isFollowed } = data
        const { id, name, email, image, Comments, FavoritedRestaurants: favoritedRestaurants,
          Followers: followers, Followings: followings } = profile

        // STEP 5: 處理 comment.Restaurant 可能有空值的情況:假設尚未評論餐廳
        this.comments = Comments.filter(comment => comment.Restaurant)
        this.favoritedRestaurants = favoritedRestaurants
        this.followers = followers
        this.followings = followings
        this.isFollowed = isFollowed
        this.profile = {
          id,
          name,
          email,
          image,
          commentsLength: this.comments.length,
          favoritedRestaurantsLength: this.favoritedRestaurants.length,
          followersLength: this.followers.length,
          followingsLength: this.followings.length
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchUserProfile(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUserProfile(id)
    next()
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
