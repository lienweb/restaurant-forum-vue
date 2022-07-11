<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group mb-3">
        <label for="name">Name</label>
        <input id="name" type="text" name="name" class="form-control" placeholder="Enter Name" v-model="user.name"
          required>
      </div>

      <div class="form-group mb-3">
        <label for="image">Image</label>
        <img class="d-block img-thumbnail" :src="user.image | emptyImage" alt="" v-if="user.image">
        <input id="image" type="file" name="image" accept="image/*" class="form-control-file"
          @change="handleFileChange">
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'

const dummyUser = {
  currentUser: {
    id: 1,
    name: 'user1',
    email: 'user1@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: false
  },
  isAuthenticated: true
}

export default {
  name: 'UserEdit',
  mixins: [emptyImageFilter],
  data () {
    return {
      user: {
        id: -1,
        name: '',
        image: ''
        // isAdmin: true
      }
    }
  },
  methods: {
    fetchUserProfile () {
      const { id, name, image } = dummyUser.currentUser
      this.user = {
        ...this.user,
        id,
        name,
        image
      }
    },
    handleFileChange (e) {
      // console.log(e.target) // <input>
      const fileList = e.target.files
      // console.log(this.files) //fail cuz this in vue means data()

      if (!fileList.length) {
        this.user.image = ''
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(fileList[0])
        this.user.image = imageURL
      }
    },
    handleSubmit (e) {
      // console.log(e.target) //<form>
      const formData = new FormData(e.target)

      // 模擬送出表單
      for (const [key, value] of formData) {
        console.log(`${key}: ${value}\n`)
      }
    }
  },
  created () {
    this.fetchUserProfile()
  }
}
</script>
