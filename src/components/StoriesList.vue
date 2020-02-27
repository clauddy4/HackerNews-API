<template>
  <div>
    <div class="searchBar">
      <form>
        <input v-model="query" class="search navbar-item" type="search" placeholder="Search...">
        <router-link :query="query" :to="'/' + query"><button @click="getItems(query)" class="button" type="submit">&#9658;</button></router-link>
      </form>

      <select @change="getItems(query)" class="select" v-model="selectedTag">
        <option value="story">story</option>
        <option>comment</option>
      </select>
      <h2>by</h2>
      <select @change="getItems(query)" class="select" v-model="selectedBy">
        <option value="">relevance</option>
        <option value="_by_date">date</option>
      </select>
    </div>
      <Item v-for="item in items" :key="item.id" :item="item"></Item>

  </div>
</template>

<script>
  import Item from "./Item";

  export default {
    name: 'storiesList',
    components: {
        'Item': Item
    },
    data: function () {
      return {
        selectedTag: 'story',
        selectedBy: '',
        query: '',

      }
    },
    created: function () {
        this.$store.dispatch('FETCH_STORIES');
    },
    computed: {
      items: {
        get () {
          return this.$store.state.results;
        },
        set (value) {
          this.$store.commit("APPEND_SEARCH_RESULTS", value);
        }
      }
    },
    methods: {
      getItems(id) {
        if (id !== '') {
          this.items = this.$store.dispatch('FETCH_SEARCH_RESULTS', {id, tag: this.selectedTag, by: this.selectedBy });
          return this.items;
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  .searchBar {
    display: flex;

    .select, .search{
      height: 25px;
      margin: auto 10px;
      border-width: 0;
      border-radius: 4px 0 0 4px;
      background: #e6e6e6;
      color: #2c3e50;
      font-size: 16px;
    }

    .search {
      margin-top: 16px;
    }

    .button {

      background: #e6e6e6;
      color: #828282;
      font-size: 18px;
      border-radius: 0 4px 4px 0;
      border-style: none;
      cursor: pointer;
      margin-left: -10px;
      height: 25px;
    }

    .button:hover {
      color: #2c3e50;
    }
  }
</style>