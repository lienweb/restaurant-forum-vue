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
  }
}
