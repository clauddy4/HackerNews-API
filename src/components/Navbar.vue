<template>
  <div class="navbar-container">
    <nav class="navbar">
      <router-link class="navbar-item" to="/">Hacker News</router-link>
      <form>
        <input v-model="message" class="search navbar-item" type="search" placeholder="Search...">
        <router-link :nessage="message" :to="'/search/' + message"><button>Хоба</button></router-link>
      </form>
    </nav>
  </div>
</template>

<script>

  export default {
    name: "Navbar",
    data: function() {
      return {
        message: "",
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

    .search {
      border-width: 0;
      border-radius: 2px;
      padding: 4px;
      background: #e6e6e6;
    }
  }


</style>