<template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
      <!-- 不需要加上data-bs-toggle透過bootstrap控制active，而是改透過vue router加上的active class控制 -->
      <router-link class="nav-link" :to="{ name: 'restaurants' }">
        全部
      </router-link>
    </li>

    <li v-for="category in categories" :key="category.id" class="nav-item">
      <router-link class="nav-link" :to="{ name: 'restaurants', query: { categoryId: category.id } }">
        <!-- 讓這個連結代query string -->
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>
