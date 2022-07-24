// get token -> add to http header -> send req
import { apiHelper } from '../utils/helpers'

const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants ({ page, categoryId }) {
    // get query string
    const searchParams = new URLSearchParams({ page, categoryId })

    // axios
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds () {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants () {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurantDetail (restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurantDashboard (restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}/dashboard`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
