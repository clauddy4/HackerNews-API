<template>
  <div>
  <div>
    <nav class="toolbar">
      <h2>Search</h2>
      <select class="select" v-model="selectedTag">
        <option value="">all</option>
        <option value="story">story</option>
        <option>comment</option>
      </select>
      <h2>by</h2>
      <select class="select" v-model="selectedBy">
        <option value="">relevance</option>
        <option value="_by_date">date</option>
      </select>
    </nav>
    <Item v-for="item in items" :key="item.id" :story="item"></Item>
  </div>
  </div>
</template>

<script>
  import Item from "./Item";

  export default {
    name: "Search",
    data: function() {
      return {
        selectedTag: '',
        selectedBy: '',
      };
    },
    components: {
        'Item': Item
    },
    mounted() {
        this.items = this.getItems(this.id)
    },
    beforeRouteUpdate ( to, from , next ) {
        this.items = this.getItems(to.params.id);
        next();
    },
    methods: {
      getItems(id) {
        this.items = this.$store.dispatch('FETCH_SEARCH_RESULTS', {id, tag: this.selectedTag, by: this.selectedBy })
        return this.items;
      },
      updateItems(state, newItems) {
          state.searchResults = newItems;
      }
    },
    created: function() {
      this.getItems(this.$route.params.id);
    },
    computed: {
      items() {
        return this.$store.state.searchResults;
      },
    },
  }
</script>

<style lang="scss">
  .toolbar {
    display: flex;

    .select {
      height: 25px;
      margin: auto 10px;
      border-width: 0;
      border-radius: 4px;
      background: #e6e6e6;
      color: #2c3e50;
      font-size: 16px;
    }
  }
</style>