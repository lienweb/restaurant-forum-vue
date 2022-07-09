<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button type="button" class="btn btn-danger float-end" v-if="currentUser.isAdmin">
          Delete
        </button>
        <h3>
          <router-link to="/">{{ comment.User.name }}</router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.updatedAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../utils/mixins.js'

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'RestaurantComments',
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilter],
  data() {
    return {
      currentUser: dummyUser.currentUser
    }
  }
  // filters: {
  //   fromNow (datetime) {
  //     if (!datetime.length) return '-'
  //     return moment(datetime).fromNow()
  //   }
  // }
}
</script>
