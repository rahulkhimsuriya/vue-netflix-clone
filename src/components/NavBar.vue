<template>
  <nav
    ref="main-navbar"
    class="flex items-center justify-between absolute w-full px-8 py-6 z-10 transition-all duration-500 ease-in-out"
  >
    <a href="/">
      <img src="../assets/image/logo.png" alt="Netflix" class="h-8" />
    </a>

    <div>
      <span
        ><img
          src="../assets/image/avatar.jpg"
          alt="Avatar"
          class="h-8 w-8 rounded-full object-cover border-2 border-gray-300"
      /></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',

  data() {
    return {
      isActive: false
    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        this.$refs['main-navbar'].classList.remove('absolute')
        this.$refs['main-navbar'].classList.add('fixed', 'bg-black', 'top-0')
      } else {
        this.$refs['main-navbar'].classList.add('absolute')
        this.$refs['main-navbar'].classList.remove('fixed', 'bg-black', 'top-0')
      }
    })
  }
}
</script>

<style lang="css" scoped></style>
