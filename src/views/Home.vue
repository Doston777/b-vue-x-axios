<template>
  <div class="home">
    <MainAddPost />
    <MainPosts />
  </div>
</template>

<script>
// @ is an alias to /src

import MainAddPost from "../components/MainAddPost"
import MainPosts from "../components/MainPosts"
export default {
  name: 'Home',
  components: {
    MainAddPost,
    MainPosts

  }
}
</script>

<style scoped>
  body {
    background-color: #aebde9
  }
</style>