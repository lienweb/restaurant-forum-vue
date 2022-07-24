<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button type="button" class="btn btn-danger float-end" v-if="currentUser.isAdmin"
          @click.stop.prevent="handDeleteButtonClick(comment.id)">
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.User.id } }">{{ comment.User.name }}</router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../utils/mixins.js'
import commentsAPI from '../apis/comments'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers.js'

export default {
  name: 'RestaurantComments',
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilter],
  methods: {
    async handDeleteButtonClick (commentId) {
      try {
        const { data } = await commentsAPI.delete(commentId)
        // data: status, message, RestaurantId
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$emit('after-delete-comment', commentId)
        Toast.fire({
          icon: 'success',
          title: '成功刪除該評論'
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍後再重試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
