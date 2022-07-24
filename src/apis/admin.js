import { apiHelper } from '../utils/helpers'

const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get () {
      return apiHelper.get('/admin/categories', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create ({ name }) { // 屬性與物件同名簡寫
      return apiHelper.post('/admin/categories', { name }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update ({ categoryId, formData }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    delete ({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  restaurants: {
    getDetail (restaurantId) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    get () {
      return apiHelper.get('/admin/restaurants', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    delete (restaurantId) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update ({ formData, restaurantId }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  }
}
