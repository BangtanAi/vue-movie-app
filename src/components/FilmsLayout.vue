<template>
  <div class="container">
    <div class="header">
      <h3 class="header-title">TMDB movie</h3>
      <button class="main-button" @click="getPrevUrl">Back</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  methods: {
    getPrevUrl(){
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
.header{
  text-align: center;
  &-title{
    margin-top: 40px;
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
  }
}
</style>
