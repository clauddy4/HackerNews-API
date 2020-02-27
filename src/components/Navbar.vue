<template>
  <div class="navbar">
      <button class="navbar-item button" onclick='window.location.reload()'><router-link to="/">Hacker News</router-link></button>
  </div>
</template>

<script>

  export default {
    name: "Navbar",
    data: function() {
      return {
        stories: [],
      };
    },
  }
</script>

<style scoped lang="scss">
  .navbar{
    display: flex;
    background-color: #2c3e50;
    padding: 0 0 20px 30px;

    .navbar-item {
      margin: 24px 24px 0 0;
    }

    .button {
      background-color: #2c3e50;
      font: normal 14px/22px 'Tomorrow', sans-serif;
    }

  }


</style>