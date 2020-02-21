<template>
  <div class="app container">
    <div class="nav">
      <Navbar></Navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  export default {
    name: "App",
    components: {
      Navbar
    }
  };
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Tomorrow&display=swap');
@import url('./style/reset.css');

.app {
  font: normal 14px/22px 'Tomorrow', sans-serif;
  color: #2c3e50;

  .nav a{
    font-weight: bold;
    color: #fff;
  }

  .nav a.router-link-exact-active {
    color: #f60;
  }
}
</style>
