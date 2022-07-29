<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea class="form-control" rows="3" name="text" v-model="text"></textarea>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
      <button type="submit" class="btn btn-primary me-0" :disabled="isProcessing">
        {{ isProcessing ? '提交中' : 'Submit' }}
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from '../apis/comments'
import { Toast } from '../utils/helpers'

export default {
  name: 'CreateComments',
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      text: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit () {
      // 透過API向伺服器請求發POST新增一筆comment
      try {
        if (!this.text.trim()) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫任何評論'
          })
          return
        }

        this.isProcessing = true
        const { data } = await commentsAPI.create({
          restaurantId: this.restaurantId,
          text: this.text.trim()
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 伺服器新增 Comment 成功後...
        this.$emit('after-create-comment', {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        })
        this.text = '' // 將表單內的資料清空
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>
