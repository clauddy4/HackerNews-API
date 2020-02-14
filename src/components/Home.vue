<template>
  <div>
    <h1>This is a home page</h1>
    <div v-for="story in stories" :key="story">{{ story }}</div>
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
