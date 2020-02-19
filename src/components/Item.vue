<template>
  <div class="story">
      <span class="points">{{ story.points }}</span>
      <a :href="story.url" target="_blank"><h1 class="title">{{ story.title }}</h1></a>
      <span class="meta">
        by <router-link class="author" :to="'/user/' + story.author">{{ story.author }}</router-link> {{ story.created_at }} |
        <router-link class="comments" :to="{path:'/comments/' + story.objectID}">Comments </router-link >
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

      .points {
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