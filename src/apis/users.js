import { apiHelper } from '../utils/helpers'

export default {
  getCurrentUser () {
    return apiHelper.get('/get_current_user')
  },
  get ({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  update ({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  addFavoriteRest (restaurantId) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavoriteRest (restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addRestLike (restaurantId) {
    return apiHelper.post(`/like/${restaurantId}`)
  },
  deleteRestLike (restaurantId) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getTopUsers () {
    return apiHelper.get('/users/top')
  },
  addUserFollowing (userId) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteUserFollowing (userId) {
    return apiHelper.delete(`/following/${userId}`)
  }
}
