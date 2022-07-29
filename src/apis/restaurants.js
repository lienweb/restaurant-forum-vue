// get token -> add to http header -> send req
import { apiHelper } from '../utils/helpers'

export default {
  getRestaurants ({ page, categoryId }) {
    // get query string
    const searchParams = new URLSearchParams({ page, categoryId })

    // axios
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds () {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants () {
    return apiHelper.get('/restaurants/top')
  },
  getRestaurantDetail (restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurantDashboard (restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}/dashboard`)
  }
}
