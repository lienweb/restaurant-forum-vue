<template>
  <div class="container py-5">
    <div>
      <h1>{{ topRestaurant.name }}</h1>
      <span class="badge bg-secondary mt-1 mb-3">
        {{ topRestaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ topRestaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ topRestaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: 'Remington Shields',
    tel: '(664) 474-5747 x14320',
    address: '9340 Cornell Field',
    opening_hours: '08:00',
    description: 'Et beatae molestiae optio quaerat dolores autem.\nDolorem et iste.',
    image: 'https://loremflickr.com/320/240/restaurant,food/?random=14.732919933876175',
    viewCounts: 1,
    createdAt: '2022-07-07T09:45:55.000Z',
    updatedAt: '2022-07-09T15:27:59.000Z',
    CategoryId: 2,
    Category: {
      id: 2,
      name: '日本料理',
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z'
    },
    Comments: [
      {
        id: 1,
        text: 'Architecto molestiae illum.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS',
          isAdmin: false,
          image: null,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z'
        }
      },
      {
        id: 51,
        text: 'Vel dolores veniam voluptas adipisci nihil placeat voluptates perspiciatis rerum.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password: '$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS',
          isAdmin: false,
          image: null,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z'
        }
      },
      {
        id: 101,
        text: 'Quasi nesciunt quasi rerum et fugit deleniti et laboriosam eligendi.',
        UserId: 3,
        RestaurantId: 1,
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password: '$2a$10$AO.O77pnpFTWGbvBvEK/OOBaAxA93X9AlBk7NZOYyck0IRcooLudm',
          isAdmin: false,
          image: null,
          createdAt: '2022-07-07T09:45:55.000Z',
          updatedAt: '2022-07-07T09:45:55.000Z'
        }
      }
    ]
  }
}

export default {
  data () {
    return {
      topRestaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      }
    }
  },
  methods: {
    fetchTopRestaurant () {
      const { id, name, viewCounts, Category, Comments } = dummyData.restaurant
      this.topRestaurant = {
        id,
        name,
        categoryName: Category.name ? Category.name : '未分類',
        commentsLength: Comments.length,
        viewCounts
      }
    }
  },
  created () {
    this.fetchTopRestaurant()
  }
}

</script>
