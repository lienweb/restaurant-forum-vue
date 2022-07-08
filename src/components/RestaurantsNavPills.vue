<template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
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
<!-- <template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
      <router-link class="nav-link" data-bs-toggle="pill" data-bs-target="#pills-profile"  type="button" role="tab"
        aria-controls="pills-profile" aria-selected="false" :to="{ name: 'restaurants' }">全部</router-link>
    </li>
    <li class="nav-item" v-for="category in categories" :key="category.id">
      <router-link class="nav-link" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab"
        aria-controls="pills-profile" aria-selected="false"
        :to="{ name: 'restaurants', query: { categoryId: category.id } }">
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template> -->

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
