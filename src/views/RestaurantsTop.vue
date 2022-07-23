<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div class="card mb-3" style="max-width: 540px;margin: auto;" v-for="restaurant in restaurants"
      :key="restaurant.id">
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
            <img class="card-img" :src="restaurant.image">
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge bg-secondary">收藏數：{{ restaurant.favoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
              class="btn btn-primary me-2">Show
            </router-link>

            <button type="button" class="btn btn-danger me-2" v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorite(restaurant.id)">
              移除最愛
            </button>
            <button type="button" class="btn btn-primary" v-else @click.prevent.stop="addToFavorite(restaurant.id)">
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import restaurantsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import usersAPI from '../apis/users'

export default {
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchTopRestaurants()
  },
  methods: {
    async fetchTopRestaurants () {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants()
        if (!data.restaurants.length) {
          Toast.fire({
            icon: 'info',
            title: '無人氣餐廳資料'
          })
          return
        }
        // this.restaurants = data.restaurants.map(restaurant => ({
        //   id: restaurant.id,
        //   name: restaurant.name,
        //   image: restaurant.image,
        //   favoriteCount: restaurant.FavoriteCount,
        //   description: restaurant.description,
        //   isFavorited: restaurant.isFavorited
        // }))

        this.restaurants = data.restaurants.map(({
          id, name, image, FavoriteCount, description, isFavorited
        }) => ({
          id,
          name,
          image,
          favoriteCount: FavoriteCount,
          description,
          isFavorited
        }))
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳資料，請稍後再重試'
        })
      }
    },
    async addToFavorite (id) {
      try {
        const { data } = await usersAPI.addFavoriteRest(id)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          return restaurant.id !== id ? restaurant : {
            ...restaurant,
            isFavorited: true,
            favoriteCount: restaurant.favoriteCount + 1 // for 即時顯示
          }
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法加入我的最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite (id) {
      try {
        const { data } = await usersAPI.deleteFavoriteRest(id)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map(restaurant => {
          return restaurant.id !== id ? restaurant : {
            ...restaurant,
            isFavorited: false,
            favoriteCount: restaurant.favoriteCount - 1
          }
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法從我的最愛刪除，請稍後再試'
        })
      }
    }
  }
}
</script>
