<template>
  <div class="mt-4">
    <h2 class="ml-4 text-2xl text-white font-bold">{{ title }}</h2>
    <div class="mt-1 ml-4 flex gap-4 py-6 overflow-x-auto">
      <img
        v-for="movie in movies"
        :key="movie.id"
        :src="getMoviePosterPath(movie.poster_path)"
        :alt="movie.original_title"
        class="h-32 w-48 object-cover opacity-75 rounded transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-105 shadow hover:shadow-lg"
        :class="{ 'h-full': isLarge }"
      />
    </div>
  </div>
</template>

<script>
import axios from '@/helpers/axios.js'

export default {
  name: 'Row',

  props: {
    title: {
      type: String,
      required: true
    },

    url: {
      type: String,
      required: true
    },

    isLarge: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      movies: {}
    }
  },

  created() {
    axios
      .get(this.url)
      .then(({ data }) => (this.movies = data.results))
      .catch(error => console.log(error))
  },

  methods: {
    getMoviePosterPath(poster_path) {
      return `https://image.tmdb.org/t/p/original/${poster_path}`
    }
  }
}
</script>

<style lang="css" scoped>
.hover\:scale-105:hover {
  transform: scale(1.1);
}

::-webkit-scrollbar {
  display: none;
}
</style>
