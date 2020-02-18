<template>
  <div>
    <div v-for="story in stories.hits" :key="story.objectID">
      <h2>{{ story.title }}</h2>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'NewStoriesList',
    data: function () {
      return {
        err: '',
        stories: [],
      }
    },
    created: function () {

        axios.get("http://hn.algolia.com/api/v1/search_by_date?tags=story")
            .then(response => {
                this.stories = response.data;
            })
            .catch(err => {
                console.log(err);
            });
    },
  }
</script>

<style scoped>

</style>