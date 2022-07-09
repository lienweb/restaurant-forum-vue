<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <!-- 回到上一頁 previousPage -->
      <li class="page-item">
        <router-link :class="['page-link', { disabled: previousPage === 1 }]" :to="{
          name: 'restaurants',
          query: { categoryId, page: previousPage }
        }" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <!-- 頁碼 -->
      <li v-for="page in totalPage" :key="page" :class="['page-item', { active: currentPage === page }]">
        <router-link class="page-link" :to="{ name: 'restaurants', query: { categoryId, page } }">
          {{ page }}
        </router-link>
      </li>

      <!-- 前往下一頁 nextPage -->
      <li class="page-item">
        <router-link :class="['page-link', { disabled: nextPage === totalPage.length }]" aria-label="Next" :to="{
          name: 'restaurants',
          query: { categoryId, page: nextPage }
        }">
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: [String, Number],
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Array,
      required: true
    },
    previousPage: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Number,
      required: true
    }
  },
  methods: {

  }
}
</script>
