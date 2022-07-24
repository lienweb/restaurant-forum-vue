<template>
  <div class="container py-5">
    <AdminRestaurantForm :initial-restaurant="restaurant" @after-submit="handleAfterSubmit"
      :is-processing="isProcessing" />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

/* eslint-disable */
export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      // 看可編輯欄位有哪些
      restaurant: {
        id: -1,
        name: '',
        categoryId: -1,
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false
    }
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail(restaurantId)
        const { id, name, tel, address, description, image, opening_hours, CategoryId } = data.restaurant

        this.restaurant = {
          ...this.restaurant, // default
          id,
          name,
          tel,
          address,
          description,
          image,
          openingHours: opening_hours,
          categoryId: CategoryId
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'warning',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async handleAfterSubmit(formData) {
      try {
        // 透過 API 將表單資料送到伺服器
        for (const [name, value] of formData.entries()) {
          console.log(name + ': ' + value)
        }
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({
          formData, restaurantId: this.restaurant.id
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        //if update success, 轉址
        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'warning',
          title: '無法編輯餐廳資料，請稍後再試'
        })
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料SPA
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  }
}
</script>
