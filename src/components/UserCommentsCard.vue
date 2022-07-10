<template>
  <div class="card">
    <div class="card-header">
      <strong>40</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link v-for="comment in comments" :key="comment.id"
        :to="{ name: 'restaurant', params: { id: comment.RestaurantId } }">
        <img :src="comment.Restaurant.image" width="60" height="60" class="avatar me-1">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
  // data() {
  //   return {
  //     comments: [],
  //     restaurant: {}
  //   }
  // },
  // methods: {
  //   fetchComments() {

  //   }
  // },
  // created() {
  //   this.fetchComments()
  // }
}
</script>
