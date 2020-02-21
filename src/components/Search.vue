<template>
  <div>
  <div>
    <nav class="toolbar">
      <h2>Search</h2>
      <select class="select" v-model="selectedTag">
        <option value="">story</option>
        <option>comment</option>
      </select>
      <h2>by</h2>
      <select class="select" v-model="selectedBy">
        <option value="">relevance</option>
        <option>date</option>
      </select>
    </nav>
    <Item v-for="item in items.hits" :key="item.id" :story="item"></Item>
  </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Item from "./Item";

  export default {
    name: "Search",
    data: function() {
      return {
        items: [],
        selectedTag: '',
        selectedBy: ''
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
        axios.get("http://hn.algolia.com/api/v1/search?query=" +  id + "&tags=" + this.selectedTag)
          .then(response => {
            this.items = response.data;
          })
        return this.items;
      }
    },
    created: function() {
      axios.get("http://hn.algolia.com/api/v1/search?query=" + this.$route.params.id  + "&tags=" + this.selectedTag)
        .then(response => {
          this.items = response.data;
        })
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