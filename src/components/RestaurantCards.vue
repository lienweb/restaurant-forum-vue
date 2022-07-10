<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img class="card-img-top" :src="restaurant.image" alt="Card image cap" width="286px" height="180px">
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
          @click.stop.prevent="deleteFavorite">
          移除最愛
        </button>
        <button type="button" class="btn btn-primary btn-border favorite me-2" v-else @click.stop.prevent="addFavorite">
          加到最愛
        </button>
        <button type="button" class="btn btn-danger like me-2" v-if="restaurant.isLiked"
          @click.stop.prevent="deleteFromLike">
          Unlike
        </button>
        <button type="button" class="btn btn-primary like me-2" v-else @click.stop.prevent="addToLike">
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    }
  },
  methods: {
    addFavorite() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: true
      }
      // this.restaurant.isFavorited = true
    },
    deleteFavorite() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: false
      }
      // this.restaurant.isFavorited = false
    },
    addToLike() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isLiked: true
      }
      // this.restaurant.isLiked = true
    },
    deleteFromLike() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isLiked: false
      }
      // this.restaurant.isLiked = false
    }
  }
}
</script>
