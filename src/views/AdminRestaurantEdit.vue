<template>
  <div class="container py-5">
    <AdminRestaurantForm :initial-restaurant="restaurant" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'

const dummyData = {
  restaurant: {
    id: 2,
    name: 'Eldora Rodriguez Sr.',
    tel: '188.929.7442 x776',
    address: '26185 Cruickshank Mall',
    opening_hours: '08:00',
    description: 'non eos aliquid',
    image: 'https://loremflickr.com/320/240/restaurant,food/?random=87.58085476753624',
    CategoryId: 4
  },
  isFavorited: false,
  isLiked: false
}

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
      }
    }
  },
  methods: {
    fetchRestaurant(restaurantId) {
      const { restaurant } = dummyData
      const { id, name, tel, address, description, image, opening_hours, CategoryId } = restaurant

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

      // this.restaurant = {
      //   ...this.restaurant,
      //   id: restaurantId,
      //   name: restaurant.name,
      //   categoryId: restaurant.CategoryId,
      //   tel: restaurant.tel,
      //   address: restaurant.address,
      //   description: restaurant.description,
      //   image: restaurant.image,
      //   openingHours: restaurant.opening_hours
      // }
    },
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (const [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  }
}
</script>
