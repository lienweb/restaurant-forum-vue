<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <a href="#">{{ comment.Restaurant.name }}</a>
        </h4>
        <p>{{ comment.Restaurant.description }}</p>
        <span>by <a href="#">{{ comment.User.name }}</a> at {{ comment.updatedAt | fromNow }}</span>
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
  // filters: {
  //   fromNow (datetime) {
  //     if (!datetime) return '-'
  //     return moment(datetime).fromNow()
  //   }
  // }
}

</script>
