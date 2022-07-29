<template>
  <div class="container py-5">
    <NavTabs />
    <NavPills :categories="categories" />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="row mt-5">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantCards v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
        <!-- :restaurantsList="" -->
        <div v-if="restaurants.length < 1">此餐廳類別目前無資料</div>

        <!-- 分頁標籤 RestaurantPagination -->
      </div>
      <RestaurantsPaginationVue v-if="totalPage.length > 1" :current-page="currentPage" :total-page="totalPage"
        :category-id="categoryId" :previous-page="previousPage" :next-page="nextPage" />
    </template>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NavPills from '../components/RestaurantsNavPills.vue'
import RestaurantCards from '../components/RestaurantCards.vue'
import RestaurantsPaginationVue from '../components/RestaurantsPagination.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    NavPills,
    RestaurantCards,
    RestaurantsPaginationVue,
    Spinner
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isLoading: true
    }
  },
  created () {
    // 判斷網址列
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })

    // 若這樣寫，當手輸網址時會出錯
    // this.fetchRestaurants({
    //   queryPage: '',
    //   queryCategoryId: ''
    // })
  },
  // 使用 beforeRouteUpdate 方法取得使用者路由變化
  beforeRouteUpdate (to, from, next) {
    // console.log('to', to)
    // console.log('from', from)
    // 給定預設值，避免例外狀況發生
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchRestaurants ({ queryPage, queryCategoryId }) {
      // 用解構變數比較快
      // api ->帶token->query參數
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId
        }) // return response
        // console.log(response)

        // // 除非自己輸入頁碼或關鍵字搜尋
        // if (!response.data.restaurants.length) {
        //   // throw new Error(response.data.message)
        //   Toast.fire({
        //     icon: 'error',
        //     title: '無法取得餐廳資料，請重新點選，回到餐廳列表...'
        //   })
        //   // refresh page
        //   this.$router.go()
        // }

        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next
        } = response.data
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再重試'
        })
        console.log(error)
      }
    }
  }
}
</script>
