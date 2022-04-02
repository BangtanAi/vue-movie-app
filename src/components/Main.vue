<template>
  <div class="main">
    <h1 class="main-title">Info about all films</h1>
    <button class="main-button" @click="$router.push('/films')">
      Show films
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main {
  margin-top: 20%;
  text-align: center;
  &-title {
    color: #ffffff;
    margin-bottom: 20px;
  }
  &-button {
    cursor: pointer;
    color: #ffffff;
    background-color: lightsteelblue;
    padding: 10px 20px;
    border-radius: 10px;
    border: 2px solid #ffffff;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.5s;
    &:hover {
      background-color: darken(lightsteelblue, 5%);
    }
  }
}
</style>
