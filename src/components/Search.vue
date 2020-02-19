<template>
  <div>
    <h1>SEARCH</h1>
    <Item v-for="story in stories.hits" :key="story.id" :story="story"></Item>
  </div>
</template>

<script>
  import axios from "axios";
  import Item from "./Item";

  export default {
    name: "Search",
    data: function() {
      return {
        stories: [],
      };
    },
    components: {
        'Item': Item
    },
    created: function() {
      axios.get("http://hn.algolia.com/api/v1/search?query=" +this.$route.params.id  + "&tags=story")
        .then(response => {
          this.stories = response.data;
        })
    },
  }
</script>

<style scoped>

</style>