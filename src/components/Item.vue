<template>
  <div class="story">
    <div>
      <span v-if="item.points" class="points">{{ item.points }}</span>
      <span v-else class="points">0</span>
      <a :href="item.url" target="_blank"><h1 class="title">{{ item.title }}</h1></a>
      <p v-html="item.comment_text">{{item.comment_text}}</p>

      <span class="meta">by
        <router-link class="author" :to="'/user/' + item.author">{{ item.author }}</router-link> {{item.created_at | toNormalTime}}

        <span v-if="item.story_title">
            | to story: <a :href="item.story_url" target="_blank">{{item.story_title}}</a>
        </span>

        <router-link v-if="item.title" class="comments" :to="{path:'/comments/' + item.objectID}">
            <span class="comments-title">{{item.num_comments}} Comments</span>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: [
        'item'
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
        color: #2c3e50;
      }

      a {
        font-weight: 600;
        text-decoration: none;
      }
      a span {
        color: #828282;
      }
      .meta .comments {
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