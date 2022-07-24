<template>
  <form @submit.prevent.stop="handleSubmit" v-show="!isLoading">
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" type="text" class="form-control" name="name" placeholder="Enter name" v-model="restaurant.name"
        required>
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select id="categoryId" class="form-control" name="categoryId" v-model="restaurant.categoryId" required>
        <option value="-1" selected disabled>
          --請選擇--
        </option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input id="tel" type="text" class="form-control" name="tel" placeholder="Enter telephone number"
        v-model="restaurant.tel">
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input id="address" type="text" class="form-control" placeholder="Enter address" name="address"
        v-model="restaurant.address">
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input id="opening-hours" type="time" class="form-control" name="opening_hours" v-model="restaurant.openingHours">
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea id="description" class="form-control" rows="3" name="description"
        v-model="restaurant.description"></textarea>
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img v-if="restaurant.image" :src="restaurant.image" class="d-block img-thumbnail mb-3" width="200" height="200">
      <input id="image" type="file" name="image" accept="image/*" class="form-control-file" @change="handleFileChange">
    </div>

    <button type="submit" class="btn btn-primary" :disabled="isProcessing">
      {{ isProcessing ? '處理中' : '送出' }}
    </button>
  </form>
</template>

<script>
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      // 當資料不是必填時，用 default 設定一組預設值
      default: () => { // this is function in js
        return {
          name: '',
          categoryId: -1,
          tel: '',
          address: '',
          description: '',
          image: '',
          openingHours: ''
        }
      }
    },
    isProcessing: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      categories: [],
      restaurant: {
        id: -1,
        name: '',
        categoryId: -1,
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: ''
      },
      isLoading: true
    }
  },
  methods: {
    async fetchCategories () {
      try {
        const { data } = await adminAPI.categories.get()

        this.categories = data.categories
        this.isLoading = false // show form until fetch categories
      } catch (error) {
        console.log(error)
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '表單無法取得餐廳類別資料，請稍後再試'
        })
      }
    },
    fetchInitialRestaurant () {
      this.restaurant = {
        ...this.restaurant,
        ...this.initialRestaurant
      }
    },
    handleFileChange (e) {
      const { files } = e.target

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.restaurant.image = ''
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    handleSubmit (e) {
      if (!this.restaurant.name) {
        Toast.fire({
          icon: 'warning',
          title: '請填寫餐廳名稱'
        })
        return
      } else if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: 'warning',
          title: '請選擇餐廳類別'
        })
        return
      }
      const form = e.target // <form></form>
      const formData = new FormData(form)

      this.$emit('after-submit', formData)
    }
  },
  created () {
    this.fetchCategories()
    this.fetchInitialRestaurant()
  },
  watch: {
    // 因initialRestaurant後來的更新不會被偵測，故設定
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant, // ˊ避免沒有資料傳遞給的預設值
        ...newValue
      }
    }
  }
}
</script>
