<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <a href="#">{{ restaurant.name }}</a>
          <small>{{ restaurant.Category.name || '未分類' }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>{{ restaurant.updatedAt | fromNow }}
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
    restaurants: {
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
