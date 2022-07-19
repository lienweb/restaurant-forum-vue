import { apiHelper } from '../utils/helpers' // get axios

export default {
  signIn ({ email, password }) {
    // axios.post()
    // return一個Promise物件 axios
    return apiHelper.post('/signin', {
      email, password
    })
  }
}
