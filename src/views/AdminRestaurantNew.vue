<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm :is-processing="isProcessing" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit (form) {
      try {
        for (const [name, value] of form.entries()) {
          console.log(name + ': ' + value)
        }
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.create({ form })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        // STEP 4: 成功的話則轉址到 `/admin/restaurants`
        this.$router.push({ name: 'admin-restaurants' })
        // 因轉址所以不需重設isProcessing
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'warning',
          title: '無法建立餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>
