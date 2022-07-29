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

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import { emptyImageFilter } from '../utils/mixins'
import { mapState } from 'vuex'

export default {
  name: 'UserEdit',
  mixins: [emptyImageFilter],
  data () {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: ''
      },
      isProcessing: false
    }
  },
  methods: {
    setUser (userId) {
      const { id, name, image, email } = this.currentUser
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: 'not-found' })
        return
      }

      this.user = {
        ...this.user,
        id,
        name,
        image,
        email
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
    async handleSubmit (e) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫姓名'
          })
          return
        }
        const formData = new FormData(e.target)
        this.isProcessing = true
        usersAPI.update({ userId: this.user.id, formData }).then(res => {
          // const { data, statusText } = res

          this.$router.push({ name: 'user', params: { id: this.user.id } })
        }).catch(error => { throw new Error(error) })
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法編輯使用者資料，請稍後再試'
        })
        console.log(error)
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser (user) {
      if (user.id === -1) return
      const { id } = this.$route.params
      this.setUser(id)
    }
  },
  created () {
    if (this.currentUser.id === -1) return
    const { id } = this.$route.params
    this.setUser(id)
  },
  beforeRouteUpdate (to, from, next) {
    if (this.currentUser.id === -1) return
    const { id } = to.params
    this.setUser(id)
    next()
  }
}
</script>
