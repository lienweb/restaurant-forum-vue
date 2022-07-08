<template>
  <ul class="nav nav-tabs mb-4">
    <li class="nav-item" v-for="tab in tabs" :key="tab.id">
      <router-link class="nav-link" aria-current="page" :to="tab.path">
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data () {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: '首頁',
          path: '/restaurants'
        },
        {
          id: uuidv4(),
          title: '最新動態',
          path: '/restaurants/feeds'
        },
        {
          id: uuidv4(),
          title: 'TOP 10 人氣餐廳',
          path: '/restaurants/top'
        },
        {
          title: '美食達人',
          path: '/users/top'
        }
      ]
    }
  }
}
</script>
