<template>
  <div class="container py-5">
    <NavTabs />
    <NavPills :categories="categories" />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <div class="row mt-5">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCards v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
      <!-- :restaurantsList="" -->
      <!-- 分頁標籤 RestaurantPagination -->
    </div>
    <RestaurantsPaginationVue :current-page="currentPage" :total-page="totalPage" :category-id="categoryId" :previous-page="previousPage" :next-page="nextPage" />
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NavPills from '../components/RestaurantsNavPills.vue'
import RestaurantCards from '../components/RestaurantCards.vue'
import RestaurantsPaginationVue from '../components/RestaurantsPagination.vue'

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: 'Remington Shields',
      tel: '(664) 474-5747 x14320',
      address: '9340 Cornell Field',
      opening_hours: '08:00',
      description: 'Et beatae molestiae optio quaerat dolores autem.\nD',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=14.732919933876175',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 2,
      name: 'Eldora Rodriguez Sr.',
      tel: '188.929.7442 x776',
      address: '26185 Cruickshank Mall',
      opening_hours: '08:00',
      description: 'non eos aliquid',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=87.58085476753624',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 3,
      name: 'Augusta Luettgen',
      tel: '447.715.8122',
      address: '229 Chasity Keys',
      opening_hours: '08:00',
      description: 'Eligendi quam consequuntur perferendis laborum.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=34.64276134119248',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 4,
      name: 'Anya White',
      tel: '(289) 467-2073 x09712',
      address: '85452 Shanie River',
      opening_hours: '08:00',
      description: 'Ducimus voluptatem accusantium aspernatur nihil.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=21.76748712838723',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 5,
      name: 'Dennis Roob',
      tel: '237.534.9979 x3430',
      address: '40675 Romaguera Isle',
      opening_hours: '08:00',
      description: 'laborum quaerat nesciunt',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=36.01734362458031',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 6,
      name: 'Marshall Crona',
      tel: '758-664-6132',
      address: '301 Ella Forge',
      opening_hours: '08:00',
      description: 'Reiciendis cumque laborum qui. Quisquam non tempor',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=59.37747828093032',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 7,
      name: 'Ernesto Little',
      tel: '854-517-5215',
      address: '889 Laney Manors',
      opening_hours: '08:00',
      description: 'explicabo',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=34.62872218497235',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 8,
      name: 'Zoie Mertz IV',
      tel: '1-060-880-1600',
      address: '850 Schumm Row',
      opening_hours: '08:00',
      description: 'Quis facilis quo quos facilis commodi minima maior',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=17.996061571087573',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 9,
      name: 'Martina VonRueden DDS',
      tel: '1-850-334-4090',
      address: '50160 Eva Terrace',
      opening_hours: '08:00',
      description: 'Sit dolor impedit ut.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=20.25102349309713',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    },
    {
      id: 10,
      name: 'Presley Hermann',
      tel: '972.063.6173 x9915',
      address: '940 Collins Parkways',
      opening_hours: '08:00',
      description: 'ratione',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=39.852711573668365',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-07-07T09:45:55.000Z',
        updatedAt: '2022-07-07T09:45:55.000Z'
      },
      isFavorited: false,
      isLiked: false
    }
  ],
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
  ],
  categoryId: '',
  page: 1,
  totalPage: [
    1,
    2,
    3,
    4,
    5
  ],
  prev: 1,
  next: 2
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    NavPills,
    RestaurantCards,
    RestaurantsPaginationVue
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      // 用解構變數比較快
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>
