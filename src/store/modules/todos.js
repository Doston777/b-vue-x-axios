import axios from 'axios'

export default {
  state: {
    todos: []
  },
  getters: {
    allTodos: state => state.todos
  },
  mutations: {
    setTodos: (state, todos) => state.todos = todos,
    pushTodo: (state, todo) => state.todos.unshift(todo),
    updateTodo: (state, updTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updTodo.id)
      if(index !== -1) {
        state.todos.splice(index, 1, updTodo)
      }
    },
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
  },
  actions: {
    async fetchTodos({commit}) {
      const res = await axios.get(`/todos`)
      commit('setTodos', res.data)
    },
    async addTodo({commit, rootState}, payload) {
      const res = await axios.post(`/todos`, payload)
      const data = res.data
      data.id = rootState.todos.todos.length + 1
      commit('pushTodo', data)
    },
    async updatingTodo({commit}, updTodo) {
      const res = await axios.put(`/todos/${updTodo.id}`, updTodo)
      commit('updateTodo', res.data)
    },
    async deleteTodo({commit}, id) {
      await axios.delete(`/todos/${id}`)
      commit('removeTodo', id)
    }
  }
}