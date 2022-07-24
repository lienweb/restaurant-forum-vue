<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant-detail="restaurant" />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurantComments="restaurantComments" @after-delete-comment="afterDeleteComment" />
    <!-- 新增評論 CreateComment -->
    <CreateComments :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComments from '../components/CreateComments.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'Restaurant',
  components: { // 註冊才能用
    RestaurantDetail,
    RestaurantComments,
    CreateComments
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurantDetail(restaurantId)
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const {
          restaurant: { id, name, Category, image, opening_hours: openingHours, tel, address, description, Comments: comments },
          isFavorited,
          isLiked
        } = data

        this.restaurant = {
          id,
          name,
          categoryName: Category.name ? Category.name : '未分類',
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked
        }

        this.restaurantComments = comments
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得該餐廳資料，請稍後再試'
        })
      }
    },
    afterDeleteComment (commentId) {
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment (payload) {
      const { commentId, restaurantId, text } = payload

      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
      console.log(payload)
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  }
}
</script>
