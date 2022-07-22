<template>
  <div class='container py-5'>
    <NavTabs />
    <h1 class='mt-5'>最新動態</h1>
    <div class='row'>
      <div class='col-md-6'>
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class='col-md-6'>
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  methods: {
    async fetchFeeds () {
      try {
        const response = await restaurantsAPI.getFeeds()
        // console.log(response)
        this.restaurants = response.data.restaurants
        this.comments = response.data.comments
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得最新餐廳資料，請稍後再重試'
        })
        console.log(error)
      }
    }
  }
}
</script>
