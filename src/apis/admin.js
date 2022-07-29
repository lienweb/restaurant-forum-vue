import { apiHelper } from '../utils/helpers'

export default {
  categories: {
    get () {
      return apiHelper.get('/admin/categories')
    },
    create ({ name }) { // 屬性與物件同名簡寫
      return apiHelper.post('/admin/categories', { name })
    },
    update ({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name })
    },
    delete (categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    }
  },
  restaurants: {
    getDetail (restaurantId) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get () {
      return apiHelper.get('/admin/restaurants')
    },
    delete (restaurantId) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    update ({ formData, restaurantId }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    }
  }
}
