<template>
  <b-container id="app">
    <mes-board />
  </b-container>
</template>

<script>
  import MesBoard from "@/components/MesBoard";
  export default {
    name: 'App',
    components: {
      MesBoard
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
