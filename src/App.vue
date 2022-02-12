<template>
  <div id="app">
    <div id="nav">
      <MainHeader />
    </div>
    <router-view/>
  </div>
</template>

<script>
  import MainHeader from "./components/MainHeader"
  export default {
    components: {MainHeader}
  }
</script>