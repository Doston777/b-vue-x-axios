import axios from 'axios'


export default {
  state: {
    users: []
  },
  getters: {
    allUsers: state => state.users
  },
  mutations: {
    setUsers: (state, users) => state.users = users
  },
  actions: {
    async fetchUsers({commit}) {
      const res = await axios.get(`/users`)
      commit('setUsers', res.data)
    }
  }
}