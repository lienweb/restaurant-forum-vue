<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurantDetail.name }}</h1>
      <p class="badge bg-secondary mt-1 mb-3">
        {{ restaurantDetail.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img class="img-fluid d-block" :src="restaurantDetail.image" style="width: 250px;margin-bottom: 25px;">
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurantDetail.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurantDetail.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurantDetail.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurantDetail.description }}</p>
      <router-link class="btn btn-primary btn-border me-2" :to="{ name: 'restaurants' }">Dashboard</router-link>

      <button type="button" class="btn btn-danger btn-border me-2" v-if="restaurantDetail.isFavorited"
        @click.stop.prevent="deleteFavorite(restaurantDetail.id)">
        移除最愛
      </button>
      <button type="button" class="btn btn-primary btn-border me-2" v-else
        @click.stop.prevent="addFavorite(restaurantDetail.id)">
        加到最愛
      </button>
      <button type="button" class="btn btn-danger like me-2" v-if="restaurantDetail.isLiked"
        @click.stop.prevent="deleteLike(restaurantDetail.id)">
        Unlike
      </button>
      <button type="button" class="btn btn-primary like me-2" v-else @click.stop.prevent="addLike(restaurantDetail.id)">
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialRestaurantDetail: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurantDetail: this.initialRestaurantDetail
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.addFavoriteRest(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurantDetail = {
          ...this.restaurantDetail,
          isFavorited: true
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法將該餐廳加入我的最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavoriteRest(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurantDetail = {
          ...this.restaurantDetail,
          isFavorited: false
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法將該餐廳從我的最愛刪除，請稍後再試'
        })
      }
    },
    async addLike (restaurantId) {
      try {
        const { data } = await usersAPI.addRestLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurantDetail = {
          ...this.restaurantDetail,
          isLiked: true
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法對該餐廳按讚，請稍後再試'
        })
      }
    },
    async deleteLike (restaurantId) {
      try {
        const { data } = await usersAPI.deleteRestLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurantDetail = {
          ...this.restaurantDetail,
          isLiked: false
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法對該餐廳收回讚，請稍後再試'
        })
      }
    }
  },
  watch: {
    initialRestaurantDetail (newValue) {
      this.restaurantDetail = {
        ...this.restaurantDetail,
        ...newValue
      }
    }
  }
}
</script>
