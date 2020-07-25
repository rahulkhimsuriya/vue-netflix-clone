<template>
  <div>
    <Banner :url="request.netflixOriginals" />

    <Row
      :title="'NETFLIX ORIGINALS'"
      :url="request.netflixOriginals"
      :isLarge="true"
    />

    <Row :title="'Trending Now'" :url="request.treanding" />

    <Row :title="'Top Rated'" :url="request.topRatedMovies" />

    <Row :title="'Action Movies'" :url="request.actionMovies" />

    <Row :title="'Comedy Movies'" :url="request.comedyMovies" />

    <Row :title="'Animation Movies'" :url="request.animationMovies" />

    <Row :title="'Horror Movies'" :url="request.horrorMovies" />

    <Row :title="'Romance Movies'" :url="request.romanceMovies" />

    <Row :title="'Documentaries'" :url="request.documentaries" />
  </div>
</template>

<script>
import Request from '@/request'
import Banner from '@/components/Banner.vue'
import Row from '@/components/Row.vue'

export default {
  name: 'Home',

  components: { Banner, Row },

  data() {
    return {
      request: Request,
      data: process.env.VUE_APP_API_KEY
    }
  }
}
</script>
