<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant-detail="restaurant"/>
    <!-- 餐廳評論 RestaurantComments -->
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
/* eslint-disable */
import RestaurantDetail from '../components/RestaurantDetail.vue'

const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Remington Shields",
    "tel": "(664) 474-5747 x14320",
    "address": "9340 Cornell Field",
    "opening_hours": "08:00",
    "description": "Et beatae molestiae optio quaerat dolores autem.\nDolorem et iste.",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.732919933876175",
    "viewCounts": 1,
    "createdAt": "2022-07-07T09:45:55.000Z",
    "updatedAt": "2022-07-09T15:27:59.096Z",
    "CategoryId": 2,
    "Category": {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-07-07T09:45:55.000Z",
      "updatedAt": "2022-07-07T09:45:55.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
    "Comments": [
      {
        "id": 101,
        "text": "Quasi nesciunt quasi rerum et fugit deleniti et laboriosam eligendi.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$AO.O77pnpFTWGbvBvEK/OOBaAxA93X9AlBk7NZOYyck0IRcooLudm",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-07-07T09:45:55.000Z",
          "updatedAt": "2022-07-07T09:45:55.000Z"
        }
      },
      {
        "id": 51,
        "text": "Vel dolores veniam voluptas adipisci nihil placeat voluptates perspiciatis rerum.",
        "UserId": 2,
        "RestaurantId": 1,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "User": {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-07-07T09:45:55.000Z",
          "updatedAt": "2022-07-07T09:45:55.000Z"
        }
      },
      {
        "id": 1,
        "text": "Architecto molestiae illum.",
        "UserId": 2,
        "RestaurantId": 1,
        "createdAt": "2022-07-07T09:45:55.000Z",
        "updatedAt": "2022-07-07T09:45:55.000Z",
        "User": {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$SJp6xLGGUfwp4xZyow1x9eZMPicZcccBu7SkC5syFab6J/1HQ7UXS",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-07-07T09:45:55.000Z",
          "updatedAt": "2022-07-07T09:45:55.000Z"
        }
      }
    ]
  },
  "isFavorited": false,
  "isLiked": false
}

export default {
  name: 'Restaurant',
  components: { // 註冊才能用
    RestaurantDetail
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      // id: this.$route.params.id
    }
  },
  methods: {
    // fetchRestaurant(id) {
    //   this.restaurant = dummyData.restaurant
    // }
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      // 解構dummyData
      const { restaurant, isFavorited, isLiked } = dummyData
      const {
        id, name, Category, image, opening_hours, tel, address, description
      } = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category.name ? Category.name : '未分類',
        image,
        openingHours: opening_hours,
        tel,
        address,
        description,
        isFavorited,
        isLiked
      }

      // this.restaurant = {
      //   id: dummyData.restaurant.id,
      //   name: dummyData.restaurant.name,
      //   categoryName: dummyData.restaurant.Category.name,
      //   image: dummyData.restaurant.image,
      //   openingHours: dummyData.restaurant.opening_hours,
      //   tel: dummyData.restaurant.tel,
      //   address: dummyData.restaurant.address,
      //   description: dummyData.restaurant.description,
      //   isFavorited: dummyData.isFavorited,
      //   isLiked: dummyData.isLiked,
      // }

      this.restaurantComments = dummyData.restaurant.Comments
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  }
}
</script>
