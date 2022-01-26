<template>
  <div class="container">
    <h3>TMDB movie</h3>
    <form @submit="submitHandler">
      <div class="common-filter">
        <label for="filter">Сортировка</label>
        <select name="filter" id="">
          <option value="">по популярности</option>
          <option value="">по названию</option>
          <option value="">по рейтингу</option>
          <option value="">по дате релиза</option>
        </select>
      </div>
    </form>
    <div class="movie">
      <router-view>

      </router-view>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import MainMovie from "./components/MainMovie.vue";
export default {
  components: {
    "main-movie": MainMovie,
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.loadMovies();
  },
  methods: {
    async loadMovies() {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=dc7f375d88a62637385b4eb0dc3727bd&language=en-US&sort_by=popularity.desc&page=1"
      );
      this.movies = data.results;
    },
  },
};
</script>


<style>
.movie{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.container {
  max-width: 1190px;
  margin-left: auto;
  margin-right: auto;
}
.common-filter {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.common-filter label {
  margin-bottom: 10px;
}
.common-filter select {
  padding: 10px 20px;
  border-radius: 10px;
  width: 200px;
}
.common-filter option {
  padding: 10px 20px;
}
</style>
