<template>
  <div id="app">
    <CanvasDemo />
  </div>
</template>

<script>
import CanvasDemo from './components/CanvasDemo.vue'

export default {
  name: 'app',
  components: {
    CanvasDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
