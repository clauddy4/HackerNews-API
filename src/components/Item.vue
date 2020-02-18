<template>
  <div class="story">
    <span class="score">{{ story.score }}</span>
    <a :href="story.data.url" target="_blank"><h1>{{ story.data.title }}</h1></a>
    <span class="meta">
      by <router-link :to="'/user/' + story.data.by">{{ story.data.by }}</router-link> {{ story.data.time | getTime }} ago  |
      <router-link class="comments" :to="{path:'/story/' + story.data.id}">{{story.data.descendants}} comments</router-link >
    </span>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: [
        'story'
    ]
  }
</script>

<style scoped lang="scss">
  .story {
    background-color: #fff;
    padding: 10px 30px 10px 80px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 20px;

      .score {
        color: #f60;
        font-weight: 600;
        font-size: 1.3em;
        position: absolute;
        top: 50%;
        left: 0;
        width: 70px;
        text-align: center;
        margin-top: -10px;
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