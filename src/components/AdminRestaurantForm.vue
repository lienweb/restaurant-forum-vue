<template>
  <form @submit.prevent.stop="handleSubmit">
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

    <button type="submit" class="btn btn-primary">
      送出
    </button>
  </form>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    },
    {
      id: 6,
      name: '美式料理',
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    }
  ]
}

export default {
  props: {
    initialRestaurant: {
      type: Object,
      // 當資料不是必填時，用 default 設定一組預設值
      // Object or array defaults must be returned from
      // a factory function -- see props validation
      default: () => { // this is functionin js
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

      // arrow function: return object literal
      // default: () => ({  //return object
      //   name: '',
      //   categoryId: '',
      //   tel: '',
      //   address: '',
      //   description: '',
      //   image: '',
      //   openingHours: '',
      // })
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
      }
    }
  },
  methods: {
    fetchCategories () {
      this.categories = dummyData.categories
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
      const form = e.target // <form></form>
      const formData = new FormData(form)

      this.$emit('after-submit', formData)
    }
  },
  created () {
    this.fetchCategories()
    this.fetchInitialRestaurant()
  }
}
</script>
