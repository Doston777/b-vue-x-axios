<template>
  <div class="container">
    <h2 class="mb-2">Our Programmers</h2>
    <div
      v-for="user in allUsers"
      :key="user.id"
    >
      <img :src="`http://picsum.photos/id/${user.id}/300/300`" height="30" width="30" alt="image" class="rounded-circle"
           style="border: solid black .1px;">
      <h5>{{ user.name }}</h5>
      <pre>
        E-mail: {{ user.email }}
        Street: {{ user.address.street }}
        City: {{ user.address.city }}
        Phone: {{ user.phone }}
      </pre>
    </div>
    <hr>
    <h4 class="text-center">Our Progers Data</h4>
    <b-table
      striped
      hover
      bordered
      :items="allUsers"
    ></b-table>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex"

  export default {
    name: "MainUsers",
    methods: {
      ...mapActions(["fetchUsers"])
    },
    computed: {
      ...mapGetters(["allUsers"])
    },
    created() {
      this.fetchUsers()
    }
  }
</script>

<style scoped>

</style>