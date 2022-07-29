<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div>
        <h1>{{ topRestaurant.name }}</h1>
        <span class="badge bg-secondary mt-1 mb-3">
          {{ topRestaurant.categoryName }}
        </span>
      </div>

      <hr>

      <ul>
        <li>評論數： {{ topRestaurant.commentsLength }}</li>
        <li>瀏覽次數： {{ topRestaurant.viewCounts }}</li>
      </ul>

      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
    </template>
  </div>
</template>

<script>
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    Spinner
  },
  data () {
    return {
      topRestaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      }
    }
  },
  methods: {
    async fetchTopRestaurant () {
      try {
        const { id: restaurantId } = this.$route.params
        const { data } = await restaurantsAPI.getRestaurantDashboard(restaurantId)
        if (data.restaurant === null) {
          throw new Error('restaurant not found')
        }
        const { id, name, viewCounts, Category, Comments } = data.restaurant
        this.topRestaurant = {
          id,
          name,
          categoryName: Category.name ? Category.name : '未分類',
          commentsLength: Comments.length,
          viewCounts
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '找不到該餐廳，請稍後再試'
        })
      }
    }
  },
  created () {
    this.fetchTopRestaurant()
  }
}

</script>
