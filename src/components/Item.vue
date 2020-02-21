<template>
  <div class="story">
      <span class="points">{{ story.points }}</span>
      <a :href="story.url" target="_blank"><h1 class="title">{{ story.title }}</h1></a>
      <p v-html="story.comment_text">{{story.comment_text}}</p>
      <span class="meta">
        by <router-link class="author" :to="'/user/' + story.author">{{ story.author }}</router-link> {{ story.created_at }}
        <router-link v-if="story.title" class="comments" :to="{path:'/comments/' + story.objectID}"><span class="comments-title">Comments</span></router-link >
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

      .title {
          font-size: 15px;
      }

      a {
        color: #34495e;
        font-weight: 600;
        text-decoration: none;
      }
      a span {
        color: #828282;
      }
      .meta .comments{
        font-size: 0.85em;
        color: #828282;
      }

      .comments:before {
          content: "|";
          margin: 0 5px 0 2px;
      }

      .comments-title:hover {
        color: #34495e;
      }
  }
</style>