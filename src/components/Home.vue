<template>
  <div>
    <div v-for="story in stories" :key="story.id">
      <h4>{{ story.data.title }}</h4>
      <p>Type: {{ story.data.type }}</p>
      <p>Link: {{ story.data.url }}</p>
      <p>Score: {{ story.data.score }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data: function () {
    return {
      err: '',
      stories: [],
    }
  },
  created: function () {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(result => {
        this.results = result.data.slice(0, 10);
        this.results.forEach(element => {
          axios
            .get(
                    "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              this.stories.push(result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        this.err = err
      })
  }
}
</script>

<style scoped>

</style>