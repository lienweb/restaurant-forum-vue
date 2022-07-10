<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div class="card mb-3" style="max-width: 540px;margin: auto;" v-for="restaurant in restaurants"
      :key="restaurant.id">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image">
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge bg-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
              class="btn btn-primary me-2">Show
            </router-link>

            <button type="button" class="btn btn-danger me-2" v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteLike(restaurant.id)">
              移除最愛
            </button>
            <button type="button" class="btn btn-primary" v-else @click.prevent.stop="addLike(restaurant.id)">
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: 'Jovany Tromp',
      tel: '(628) 103-8357 x131',
      address: '404 Jessica Manor',
      opening_hours: '08:00',
      description: 'Voluptas ab illo perspiciatis aut eos sint modi eu',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=12.671019539178797',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 49,
      name: 'Luella Mitchell',
      tel: '1-811-936-7012 x770',
      address: '44027 Anderson Way',
      opening_hours: '08:00',
      description: 'Voluptates fuga eius pariatur aut corrupti aliquid',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=68.0514481293508',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 48,
      name: 'Zion Thompson',
      tel: '(087) 370-5855 x33853',
      address: '4534 Bechtelar Dam',
      opening_hours: '08:00',
      description: 'aut repudiandae nihil',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=13.425463360365297',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 47,
      name: 'Emmie Reichel',
      tel: '694-324-7471 x6975',
      address: '300 Balistreri Camp',
      opening_hours: '08:00',
      description: 'et',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=69.65442308198624',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 46,
      name: 'Reginald Bartoletti',
      tel: '(217) 067-7629 x511',
      address: '0824 Gleason Mountains',
      opening_hours: '08:00',
      description: 'laboriosam',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=96.84271017569459',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 45,
      name: "Carley O'Keefe",
      tel: '1-424-306-3247',
      address: '914 Grant Corners',
      opening_hours: '08:00',
      description: 'Eligendi est numquam possimus in est et sunt.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=11.017929450680718',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 44,
      name: 'Everette Borer III',
      tel: '461.696.7708 x82592',
      address: '33016 Gorczany Shoals',
      opening_hours: '08:00',
      description: 'Optio in et architecto est. Quia explicabo nemo ve',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=29.1824875633532',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 43,
      name: 'Ms. Fausto Zemlak',
      tel: '971.062.4712 x698',
      address: '181 Kerluke Crest',
      opening_hours: '08:00',
      description: 'Eum et quod nesciunt eos. Iure sed sit necessitati',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=9.791609076152241',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 42,
      name: 'Jorge King MD',
      tel: '(085) 840-9397 x395',
      address: '9524 Dylan Freeway',
      opening_hours: '08:00',
      description: 'Facere dolor porro aut. Eius molestias rerum sapie',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=48.22252300535701',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 41,
      name: 'Lilian Harris DVM',
      tel: '(751) 949-5503 x5298',
      address: '0650 Lebsack Burgs',
      opening_hours: '08:00',
      description: 'Est qui quasi molestiae exercitationem.',
      image: 'https://loremflickr.com/320/240/restaurant,food/?random=30.37709554547172',
      viewCounts: 0,
      createdAt: '2022-07-07T09:45:55.000Z',
      updatedAt: '2022-07-07T09:45:55.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
}

export default {
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: []
    }
  },
  methods: {
    fetchTopRestaurants () {
      this.restaurants = dummyData.restaurants
    },
    addLike (id) {
      this.restaurants = this.restaurants.map(restaurant => {
        return restaurant.id !== id ? restaurant : {
          ...restaurant,
          isFavorited: true,
          FavoriteCount: restaurant.FavoriteCount + 1
        }
      })
    },
    deleteLike (id) {
      this.restaurants = this.restaurants.map(restaurant => {
        return restaurant.id !== id ? restaurant : {
          ...restaurant,
          isFavorited: false,
          FavoriteCount: restaurant.FavoriteCount - 1
        }
      })
    }
  },
  created () {
    this.fetchTopRestaurants()
  }
}
</script>
