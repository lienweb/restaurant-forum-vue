import { apiHelper } from "../utils/helpers"  //get axios

export default {
  signIn({ email, password }) {
    //axios.post()
    apiHelper.post('/signin',{
      email, password
    })
  }
}