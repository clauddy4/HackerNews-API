<template>
  <div>
    <h1>SEARCH</h1>
    <Item v-for="item in items.hits" :key="item.id" :story="item"></Item>
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
        axios.get("http://hn.algolia.com/api/v1/search?query=" +  id + "&tags=story")
          .then(response => {
            this.items = response.data;
          })
        return this.items;
      }
    },
    created: function() {
      axios.get("http://hn.algolia.com/api/v1/search?query=" + this.$route.params.id  + "&tags=story")
        .then(response => {
          this.items = response.data;
        })
    },
  }
</script>

<style scoped>

</style>