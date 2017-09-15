<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	export default {
	  name: 'app'
	}
</script>

<style>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	}
	@import "../static/css/main.css";
	@import "../static/css/el.css";
    @import "../static/css/color-dark.css";   

</style>
