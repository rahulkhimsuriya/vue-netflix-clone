const API_KEY = process.env.VUE_APP_API_KEY

const request = {
  treanding: `/trending/all/week?api_key=${API_KEY}&language=en-US&sort_by=popularity`,
  netflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`,
  topRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=true&page=1`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US&sort_by=popularity.desc&include_adult=true&page=1`,
  animationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US&sort_by=popularity.desc&include_adult=true&page=1`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US&sort_by=popularity.desc&include_adult=true&page=1`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US&sort_by=popularity.desc&include_adult=true&page=1`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US&sort_by=popularity.desc&include_adult=true&page=1`
}

export default request
