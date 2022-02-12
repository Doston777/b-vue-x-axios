import { apiUrl } from "../constants/config"
import axios from "axios"

export default {
  install: (Vue) => {
    axios.defaults.headers.common["Content-Type"] = "application/json"
    axios.defaults.headers.common.Accept = "application/json"
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
    axios.defaults.baseURL = apiUrl

    Vue.prototype.$axios = axios
    Vue.prototype.$http = axios
  }
}