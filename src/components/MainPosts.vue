<template>
  <b-row class="container-fluid mt-2 mx-auto">
    <b-card
      class="mb-1 w-25 d-flex flex-column"
      v-for="post in allPosts"
      :key="post.id"
      :title="post.title"
      :img-src="`http://picsum.photos/600/300/?image${post.id}`"
    >
      <b-card-text>{{ post.body }}</b-card-text>
      <b-card-text class="mt-auto float-right mb-0"><b-icon
        icon="x-circle"
        cursor="pointer"
        @click="delPost(post.id)"
        scale="2"
        variant="danger"
        style="bottom: 20px; right: 20px; position: absolute; cursor: pointer;"
      ></b-icon>
      </b-card-text>
    </b-card>
  </b-row>
</template>

<script>
  import { mapGetters, mapActions } from "vuex"

  export default {
    name: "MainTodos",
    methods: {
      ...mapActions(["fetchPosts", "delPost"])
    },
    computed: {
      ...mapGetters(["allPosts"])
    },
    created() {
      this.fetchPosts()
    }
  }
</script>

<style scoped>

</style>