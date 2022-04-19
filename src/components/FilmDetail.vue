<template>
  <div class="film-detail">
    <img :src="backdropPath" alt="" />
    <h4>{{ title }}</h4>
    <span class="detail-text">{{ overview }}</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      overview: "",
      backdropPath: "",
    };
  },
  methods: {
    async loadMovie() {
      await axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            this.$route.params.id +
            "?api_key=dc7f375d88a62637385b4eb0dc3727bd&language=en-US"
        )
        .then((resp) => {
          this.title = resp.data.original_title;
          this.overview = resp.data.overview;
          this.backdropPath =
            "http://image.tmdb.org/t/p/w500" + resp.data.backdrop_path;
            console.log(resp.data)
        });
    },
  },
  mounted() {
    this.loadMovie();
    console.log(this.$route);
  },
};
</script>
<style scoped lang="scss">
.film {
  &-detail {
    padding-top: 30px;
    text-align: center;
    img{
      border-radius: 5px;
      margin-bottom: 20px;
    }
    h4{
      margin-bottom: 15px;
    }
  }
}
</style>
