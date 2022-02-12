<template>
  <b-form @submit="onSubmit" class="container">
    <b-form-group
      id="input-g-1"
      label="Post title:"
      label-for="title"
    >
      <b-form-input
        id="title"
        type="text"
        v-model="title"
        placeholder="Title text"
        size="md"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-g-2"
      label="Post body:"
      label-for="body"
    >
      <b-form-input
        id="body"
        type="text"
        v-model="body"
        placeholder="Body text"
        size="md"
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Add Post</b-button>
  </b-form>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: "MainAddPost",
    data() {
      return {
        title: '',
        body: ''
      }
    },
    methods: {
      ...mapActions(['addPost']),
      onSubmit(e) {
        e.preventDefault()
        this.addPost({title:this.title, body:this.body})
        this.title = ''
        this.body = ''
      }
    }
  }
</script>

<style scoped>

</style>