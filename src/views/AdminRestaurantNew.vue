<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

export default {
  components: {
    AdminRestaurantForm
  },
  methods: {
    handleAfterSubmit (form) {
      // debug
      for (const [name, value] of form.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>
