<template>
  <form>
    <div class="common-filter">
      <label for="filter">Сортировка</label>
      <select id="sort" v-model="sort" @change="consF">
        <option value="popularity.asc">по популярности</option>
        <option value="original_title.asc">по названию</option>
        <option value="vote_averate.asc">по рейтингу</option>
        <option value="release_date.asc">по дате релиза</option>
      </select>
    </div>
  </form>
  <div class="movie">
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
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      sort: "popular",
      movies: ''
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
      console.log(data.results)
    },
     async consF(){
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=dc7f375d88a62637385b4eb0dc3727bd&language=en-US&sort_by=" + this.sort + "&page=1"
      );
      console.log(this.sort)
      console.log(data.results)
      this.movies = data.results
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
