<template>
  <div id="app">
    <div id="nav">
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


<style>
#app {
  padding-left: 20px;
  text-align: left;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
