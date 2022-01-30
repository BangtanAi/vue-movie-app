<template>
  <div class="container">
    <h3>TMDB movie</h3>
    <button @click="getPrevUrl">Back</button>
    <router-view></router-view>
  </div>
</template>

<script>
import MainMovie from "./components/MainMovie.vue";
export default {
  components: {
    "main-movie": MainMovie,
  },
  data() {
    return {};
  },
  methods: {
    getPrevUrl(){
      this.$router.back()
    }
  },
};
</script>


<style>
.movie {
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
