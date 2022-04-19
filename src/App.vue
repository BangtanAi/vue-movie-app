<template>
  <router-view></router-view>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {};
  },
  methods: {
    getPrevUrl() {
      this.$router.back();
    },
    add(){
      this.$store.dispatch('asyncAdd', 10)
    }
  },
  mounted(){
    console.log(this.$store)
  }
};
</script>

<style lang="scss">
body {
  background-color: lightsteelblue;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.movie {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 30px;
}
.container {
  max-width: 1190px;
  margin-left: auto;
  margin-right: auto;
}
</style>
