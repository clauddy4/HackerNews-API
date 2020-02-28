<template>
  <div>
    <div class="searchBar">
      <form>
        <input v-model="query" class="text-field" type="search" placeholder="Search..." />
        <router-link :query="query" :to="'/search/' + query">
          <button @click="getItems(query)" class="button" type="submit">&#9658;</button>
        </router-link>
      </form>

      <select @change="getItems(query)" class="select" v-model="selectedTag">
        <option value="story">story</option>
        <option>comment</option>
      </select>

      <h3>by </h3>
      <select @change="getItems(query)" class="select" v-model="selectedBy">
        <option value="">relevance</option>
        <option value="_by_date">date</option>
      </select>

      <h3>from</h3>
      <input v-model="points" @change="getItems(query)" class="text-field navbar-item points" type="search" placeholder="0" />
      <h3>points</h3>
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
        points: 0,
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
          if (this.points == '') this.points = 0;
          this.items = this.$store.dispatch('FETCH_SEARCH_RESULTS', {
            id: id,
            tag: this.selectedTag,
            sort:  this.selectedBy,
            points: this.points,
          });
          return this.items;
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  .searchBar {
    display: flex;

    .select, .text-field{
      height: 25px;
      border-width: 0;
      border-radius: 4px 0 0 4px;
      background: #e6e6e6;
      color: #2c3e50;
      font-size: 16px;
    }

    .select {
      margin: auto 10px auto 10px;
    }

    .text-field {
      margin: 12px 10px auto 0;
      padding-left: 4px;
    }

    .points {
      width: 60px;
      padding-left: 4px;
      margin-left: 10px;
    }

    .button {
      position: relative;
      right: 9px;
      bottom: 3px;
      background: #e6e6e6;
      color: #828282;
      font-size: 8px;
      border-radius: 0 4px 4px 0;
      border-style: none;
      cursor: pointer;
      height: 25px;
      width: 25px;
    }

    .button:hover {
      color: #2c3e50;
    }
  }
</style>