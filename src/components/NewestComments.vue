<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <router-link :to="{ name: 'restaurant', params: { id: comment.Restaurant.id } }">{{ comment.Restaurant.name }}
          </router-link>
        </h4>
        <p>{{ comment.Restaurant.description }}</p>
        <span>by <a href="#">{{ comment.User.name }}</a> at {{ comment.createdAt | fromNow }}</span>
        <hr>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* scoped讓css只影響此範圍 */
small {
  font-size: 10px;
}
</style>

<script>
import { fromNowFilter } from '../utils/mixins'

export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilter]
}

</script>
