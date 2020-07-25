<template>
  <div id="app" class="min-h-screen">
    <header id="nav">
      <NavBar />
    </header>

    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>

<style>
@import url('./assets/css/tailwind.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #111;
}
</style>
