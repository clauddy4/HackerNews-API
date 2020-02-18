<template>
  <div class="story">
    <div v-for="story in stories.hits" :key="story.objectID">
      <span class="points">{{ story.points }}</span>
      <a :href="story.url" target="_blank"><h1>{{ story.title }}</h1></a>
      <span class="meta">
      by <router-link :to="'/user/' + story.author">{{ story.author }}</router-link> {{ story.created_at }} |
      <router-link class="comments" :to="{path:'/comments/' + story.id}"> Comments </router-link >
    </span>
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
  .story {
    background-color: #fff;
    padding: 0 30px 10px 80px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 20px;

    .points {
      color: #f60;
      font-weight: 600;
      font-size: 1.3em;
      width: 70px;
      text-align: center;
      position: relative;
      top: 45px;
      right: 55px;
    }

    a {
      color: #34495e;
      font-weight: 600;
      text-decoration: none;
    }
    a span {
      margin-left: 10px;
      color: #828282;
    }
    .meta .comments{
      font-size: 0.85em;
      color: #828282;

    }

    .comments:hover {
      color: #34495e;
    }
  }
</style>