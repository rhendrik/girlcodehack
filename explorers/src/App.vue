<template>
  <div id="app" class=" notification is-warning">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <div class="notification is-link hero">
      <div class="hero-body">
        <i class="material-icons has-text-warning">wb_sunny</i>
        <h1 class="notification is-link has-text-white hero-title">FloodLight</h1>
        <p class="hero-text">shining light on women's safety</p>
      </div>
    </div>
    <dash></dash>

<div class="notification is-warning">
  <footer class="notification is-link has-text-white">explorers</footer> 
</div>
</div>
</template>

<script>
  import Dashboard from './components/Dashboard.vue'

  export default {
    name: 'App',
    components: {
      dash: Dashboard,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
