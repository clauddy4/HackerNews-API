<template>
  <div class="root">
    <form class="searchBar">
      <div class="container">
        <input v-model="query" class="text-field" type="search" placeholder="Search..." />

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

      <router-link :query="query" :to="'/' + query">
        <button @click="getItems(query)" class="button" type="submit"></button>
      </router-link>
    </form>

    <Preloader v-if="isLoading"></Preloader>
    <Item v-for="item in items" :key="item.id" :item="item"></Item>

  </div>
</template>

<script>
  import Item from "./Item";
  import Preloader from "./Preloader";

  export default {
    name: 'storiesList',
    components: {
      'Item': Item,
      'Preloader': Preloader
    },
    data: function () {
      return {
        selectedTag: 'story',
        selectedBy: '',
        query: '',
        points: 0,
        isLoading: true,
      }
    },
    created: function () {
      this.$store.dispatch('FETCH_STORIES');
      this.switchLoading();
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
          this.isLoading = true;
          if (this.points == '') this.points = 0;
          this.items = this.$store.dispatch('FETCH_SEARCH_RESULTS', {
            id: id,
            tag: this.selectedTag,
            sort:  this.selectedBy,
            points: this.points,
          });
          this.switchLoading()
          return this.items;
        }
      },
      switchLoading() {
        setTimeout(() => {
          this.isLoading = false
        }, 1000)
      }
    }
  }
</script>

<style scoped lang="scss">
  .root {
    .searchBar {
      display: flex;

      .container {
        display: flex;
        padding: 0;
      }

      .select, .text-field{
        height: 25px;
        border-width: 0;
        border-radius: 4px;
        background: #e6e6e6;
        color: #2c3e50;
        font-size: 16px;
      }

      .select {
        margin: auto 10px auto 10px;
      }

      .text-field {
        margin: 12px 0 auto;
        padding-left: 4px;
      }

      .points {
        width: 60px;
        margin: auto 10px;
      }

      .button {
        background-color: #f0f2fa;
        width: 50px;
        cursor: pointer;
        margin: 12px 0;
      }

      .button:before {
        content: "\f002";
        color: #989898;
        font: 28px FontAwesome;
      }
    }
  }
</style>