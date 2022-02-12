<template>
  <div>
    <MainAddTodo/>
    <b-row class="container-fluid mt-1 mx-auto">
      <b-card
        v-for="todo in allTodos"
        :key="todo.id"
        class="w-24 mb-1 d-flex flex-column rounded text-light bg-success mx-1"
        :class="{'is-completed' : todo.completed}"
        border-variant="dark"
        @dblclick="onDblClick(todo)"
      >
        <b-card-text
          class="mt-auto"
        >
          <p class="mb-4">{{ todo.title }}</p>
        <b-icon-trash
          scale="1.5"
          class="mt-2 justify-content-end"
          variant="light"
          style="right: 14px; bottom: 14px; position: absolute; cursor: pointer;"
          @click="deleteTodo(todo.id)"
        ></b-icon-trash>
        </b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex"
  import MainAddTodo from "./MainAddTodo"

  export default {
    name: "MyTodos",
    components: {MainAddTodo},
    methods: {
      ...mapActions(["fetchTodos", 'updatingTodo', 'deleteTodo']),
      onDblClick(todo) {
        const updTodo = {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed
        }
        this.updatingTodo(updTodo)
      }
    },
    computed: {
      ...mapGetters(["allTodos"])
    },
    created() {
      this.fetchTodos()
    }
  }
</script>

<style scoped>
  .w-24 {
    width: 24%;
  }
  .is-completed {
    background-color: #222 !important;
    text-decoration: line-through;
  }
</style>