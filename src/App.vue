<template>
  <div id="restaurant-forum">
    <Navbar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
      <!-- router-view: where render happens -->
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    // 註冊元件
    Navbar
  }
}
</script>

<style scoped>
main {
  margin-top: 65px !important;
}
</style>
