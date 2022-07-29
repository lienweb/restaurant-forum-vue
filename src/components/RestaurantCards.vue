<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4" v-show="!isLoading">
      <img class="card-img-top" :src="restaurant.image" alt="Card image cap" width="286px" height="180px"
        @load="changeLoading">
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{
            name: 'restaurant',
            params: { id: restaurant.id }
          }">
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge bg-secondary">{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-danger btn-border favorite me-2" v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite(restaurant.id)">
          移除最愛
        </button>
        <button type="button" class="btn btn-primary btn-border favorite me-2" v-else
          @click.stop.prevent="addFavorite(restaurant.id)">
          加到最愛
        </button>
        <button type="button" class="btn btn-danger like me-2" v-if="restaurant.isLiked"
          @click.stop.prevent="deleteFromLike(restaurant.id)">
          Unlike
        </button>
        <button type="button" class="btn btn-primary like me-2" v-else @click.stop.prevent="addToLike(restaurant.id)">
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant,
      isLoading: true,
      isProcessing: false
    }
  },
  methods: {
    async addFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.addFavoriteRest(restaurantId)
        // console.log(data)

        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: true
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入我的最愛，請稍後再重試'
        })
        console.log(error)
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavoriteRest(restaurantId)

        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: false
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳從我的最愛刪除，請稍後再重試'
        })
        console.log(error)
      }
    },
    async addToLike (restaurantId) {
      try {
        const { data } = await usersAPI.addRestLike(restaurantId)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isLiked: true
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法對餐廳按讚，請稍後再重試'
        })
        console.log(error)
      }
    },
    async deleteFromLike (restaurantId) {
      try {
        const { data } = await usersAPI.deleteRestLike(restaurantId)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isLiked: false
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法對餐廳取消讚，請稍後再重試'
        })
        console.log(error)
      }
    },
    changeLoading (e) {
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}

.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>
