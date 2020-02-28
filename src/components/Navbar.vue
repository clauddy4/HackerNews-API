<template>
  <div class="navbar">
    <button @click="getTopStories" class="navbar-item button">
      <router-link to="/">Hacker News</router-link>
    </button>
  </div>
</template>

<script>

  export default {
    name: "Navbar",
    methods: {
      getTopStories () {
        return this.$store.dispatch('FETCH_STORIES');
      }
    },
    created: function () {
      this.getTopStories();
    },
  }

</script>

<style scoped lang="scss">
  .navbar {
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