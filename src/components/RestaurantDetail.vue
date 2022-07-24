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
        @click.stop.prevent="deleteFavorite">
        移除最愛
      </button>
      <button type="button" class="btn btn-primary btn-border me-2" v-else @click.stop.prevent="addFavorite">
        加到最愛
      </button>
      <button type="button" class="btn btn-danger like me-2" v-if="restaurantDetail.isLiked"
        @click.stop.prevent="deleteLike">
        Unlike
      </button>
      <button type="button" class="btn btn-primary like me-2" v-else @click.stop.prevent="addLike">
        Like
      </button>
    </div>
  </div>
</template>

<script>
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
    addFavorite () {
      this.restaurantDetail = {
        ...this.restaurantDetail,
        isFavorited: true
      }
    },
    deleteFavorite () {
      this.restaurantDetail = {
        ...this.restaurantDetail,
        isFavorited: false
      }
    },
    addLike () {
      this.restaurantDetail = {
        ...this.restaurantDetail,
        isLiked: true
      }
    },
    deleteLike () {
      this.restaurantDetail = {
        ...this.restaurantDetail,
        isLiked: false
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
