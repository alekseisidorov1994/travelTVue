<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  created() {
    this.$store.dispatch('downloadData')
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
</style>
