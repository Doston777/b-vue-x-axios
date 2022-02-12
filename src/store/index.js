import Vue from "vue"
import Vuex from "vuex"

import users from "./modules/users"
import posts from "./modules/posts"
import todos from "./modules/todos"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    posts,
    todos
  }
})