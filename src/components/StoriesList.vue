<template>
  <div>
    <Item v-for="story in stories.hits" :key="story.id" :story="story"></Item>
  </div>
</template>

<script>
  import axios from "axios";
  import Item from "./Item";

  export default {
    name: 'toriesList',
    components: {
        'Item': Item
    },
    data: function () {
      return {
        err: '',
        stories: [],
      }
    },
    created: function () {
      axios.get("http://hn.algolia.com/api/v1/search?tags=front_page")
        .then(response => {
          this.stories = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
</script>

<style scoped lang="scss">
</style>