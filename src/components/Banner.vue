<template>
  <div class="w-full object-cover" :style="styles">
    <div
      class="container mx-auto flex flex-col justify-center relative h-full w-full"
    >
      <div class="text-white w-2/5">
        <h1 class="text-4xl font-bold leading-none">
          {{ movie.original_name }}
        </h1>

        <div class="mt-2">
          <a
            href="/"
            class="inline-block px-4 py-1 bg-black opacity-75 border-0 tracking-wider rounded hover:bg-gray-400 hover:text-black transition-all duration-500 ease-in-out"
            >Play</a
          >
          <a
            href="/"
            class="ml-2 inline-block px-4 py-1 bg-black opacity-75 border-0 tracking-wider rounded hover:bg-gray-400 hover:text-black transition-all duration-500 ease-in-out"
            >My Playlist</a
          >
        </div>

        <p class="mt-4 text-sm font-normal leading-noramal tracking-wide">
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/helpers/axios.js'

export default {
  name: 'Banner',

  props: ['url'],

  data() {
    return {
      movie: {}
    }
  },

  computed: {
    posterImagePath() {
      return `https://image.tmdb.org/t/p/original/${this.movie.backdrop_path}`
    },

    styles() {
      return {
        'background-image': `linear-gradient(45deg, black, transparent),url(${this.posterImagePath})`,
        height: '85vh',
        width: '100%',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover'
      }
    }
  },

  mounted() {
    axios
      .get(this.url)
      .then(({ data }) => {
        this.movie =
          data.results[Math.floor(Math.random() * data.results.length)]
      })
      .catch(error => console.log(error))
  }
}
</script>

<style lang="css" scoped></style>
