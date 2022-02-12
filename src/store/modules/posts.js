import axios from "axios"


export default {
  state: {
    posts: []
  },
  getters: {
    allPosts: state => state.posts
  },
  mutations: {
    setPosts: (state, posts) => state.posts = posts,
    pushPost: (state, post) => state.posts.unshift(post),
    deletePost: (state, id) => state.posts = state.posts.filter(post => post.id !== id)
  },
  actions: {
    async fetchPosts({commit}) {
      const res = await axios.get(`/posts`)
      commit("setPosts", res.data)
    },
    async delPost({commit}, id) {
      await axios.delete(`/posts/${id}`)
      commit("deletePost", id)
    },
    async addPost({commit}, payload) {
      const res = await axios.post(`/posts`, payload)
      commit("pushPost", res.data)
    }
  },
  modules: {}
}
