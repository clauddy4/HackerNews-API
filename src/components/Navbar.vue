<template>
  <div class="navbar-container">
    <nav class="navbar">
      <router-link class="navbar-item" to="/">Hacker News</router-link>
      <form>
        <input v-model="message" class="search navbar-item" type="search" placeholder="Search...">
        <router-link :nessage="message" :to="'/search/' + message"><button class="button" type="submit">&#9658;</button></router-link>
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
      border-radius: 4px 0 0 4px;
      padding: 4px;
      background: #e6e6e6;
    }

    .button {
      position: relative;
      top: 1px;
      background: #e6e6e6;
      color: #828282;
      font-size: 18px;
      border-radius: 0 4px 4px 0;
      border-style: none;
      margin: -24px;
      cursor: pointer;
      height: 23px;
    }

    .button:hover {
      color: #2c3e50;
    }
  }


</style>