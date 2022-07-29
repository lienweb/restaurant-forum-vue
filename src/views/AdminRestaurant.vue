<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <div class="row" v-else>
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge bg-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img class="img-fluid d-block" :src="restaurant.image | emptyImage" style="width: 250px;margin-bottom: 25px;">
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr>
    <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'AdminRestaurant',
  mixins: [emptyImageFilter],
  components: {
    Spinner
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
        description: ''
      },
      isLoading: true
    }
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        console.log(`fetch:${restaurantId}`)
        const { data } = await adminAPI.restaurants.getDetail(restaurantId)
        const {
          id,
          name,
          CategoryId,
          Category: { name: categoryName },
          image,
          opening_hours: openingHours,
          tel,
          address,
          description
        } = data.restaurant
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          CategoryId,
          categoryName,
          image,
          openingHours,
          tel,
          address,
          description
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
        Toast.fire({
          icon: 'warning',
          title: '無法取得該餐廳資料，請稍後再試'
        })
      }
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to)
    const { id } = to.params
    console.log(id)
    this.fetchRestaurant(id)
    next()
  }
}
</script>
