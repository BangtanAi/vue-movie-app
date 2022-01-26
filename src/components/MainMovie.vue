<template>
  <div
    @click="openDetail(movie.id)"
    class="main-movie"
    v-for="movie in movies"
    :key="movie.id"
  >
    <img :src="'http://image.tmdb.org/t/p/w500' + movie.poster_path" alt="" />
    <h3 class="movie-name">{{ movie.original_title }}</h3>
    <span class="date">{{ movie.release_date }}</span>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    openDetail(id) {
      this.$router.push({ name: "detail", params: { id: id } });
    },
    async loadMovies() {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=dc7f375d88a62637385b4eb0dc3727bd&language=en-US&sort_by=popularity.desc&page=1"
      );
      this.movies = data.results;
    },
  },
  mounted() {
    this.loadMovies();
  },
};
</script>
<style>
.main-movie img {
  width: 250px;
  border-radius: 10px;
}
.main-movie h3 {
  width: 250px;
  margin-bottom: 5px;
}
.main-movie {
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
