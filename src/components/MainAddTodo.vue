<template>
  <b-form @submit="onSubmit" class="container d-flex flex-column">
    <b-form-group
      label="Todo:"
      label-for="input-todo"
      class="w-50 mx-auto"
    >
      <b-form-input
        type="text"
        id="input-todo"
        v-model="title"
        placeholder="Add todo"
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" class="w-50 mx-auto mb-2" variant="info">Add todo</b-button>
  </b-form>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: "MainAddTodo",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      onSubmit(e) {
        e.preventDefault()
        this.addTodo({title:this.title})
        this.title = ''
      }
    }
  }
</script>

<style scoped>

</style>