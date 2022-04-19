<template>
  <form>
    <div class="common-filter">
      <label for="filter">Sort by:</label>
      <select id="sort" v-model="$store.state.sort" @change="sortBy">
        <option value="popularity.desc">descending popularity</option>
        <option value="popularity.asc">ascending popularity</option>
        <option value="original_title.desc">descending popularity</option>
        <option value="original_title.asc">ascending popularity</option>
        <option value="vote_averate.desc">descending rating</option>
        <option value="vote_averate.asc">ascending rating</option>
        <option value="release_date.desc">descending date</option>
        <option value="release_date.asc">ascending date</option>
        <option value="original_title.desc">descending title</option>
        <option value="original_title.asc">ascending title</option>
      </select>
    </div>
  </form>
  <div class="movie">
    <router-link
      :to="{ path: `/films/${movie.id}` }"
      class="main-movie"
      v-for="movie in $store.state.movies"
      :key="movie.id"
    >
      <img
        v-if="movie.poster_path"
        :src="'http://image.tmdb.org/t/p/w500' + movie.poster_path"
        alt=""
      />
      <img
        v-if="!movie.poster_path"
        :src="'https://filmchatting.files.wordpress.com/2017/05/cinema-22.jpg'"
        alt=""
      />
      <h3 class="movie-name">{{ movie.original_title }}</h3>
      <span class="date">{{ movie.release_date }}</span>
    </router-link>
    <button class="main-button" @click="loadMore">More films</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Films",
  methods: {
    loadMovies() {
      this.$store.dispatch("loadAllMovies");
    },
    sortBy() {
      this.$store.dispatch("sortByFunc");
    },
    loadMore() {
      this.$store.dispatch("loadMoreFilms");
    },
  },
  created() {
    this.loadMovies();
  },
};
</script>
<style lang="scss">
.main-movie img {
  width: 250px;
  border-radius: 10px;
  height: 300px;
  object-fit: cover;
}
.main-movie h3 {
  width: 250px;
  margin-bottom: 5px;
}
.main-movie {
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 25px;
  cursor: pointer;
  color: black;
  outline: none;
  text-decoration: none;
  text-align: center;
}
.common-filter {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  margin-top: 20px;
}
.common-filter label {
  margin-right: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
}
.common-filter select {
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 10px;
  width: 230px;
  border: 2px solid #ffffff;
  background-color: lightsteelblue;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  &.active {
    border: 2px solid #ffffff;
  }
  &:hover {
    background-color: darken(lightsteelblue, 5%);
  }
}
.common-filter option {
  padding: 10px 20px;
}
</style>
