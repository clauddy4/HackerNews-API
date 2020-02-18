<template>
  <div class="container">
    <p>Comments:</p>
    <div v-for="story in comments.hits" :key="story.objectID">
      <div class="comment-wrap">
        <div class="comment-block">
          <div class="comment-text" v-html="story.comment_text">{{story.comment_text}}</div>
          <div class="bottom-comment">
            <router-link :to="'/user/' + story.author"><p class="author">{{ story.author }}</p></router-link>
            <div class="date">{{ story.created_at }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Comments",
    data: function() {
      return {
        story: {},
        comments: []
      };
      },
      created: function() {
        axios.get("https://hn.algolia.com/api/v1/search?tags=story_" + this.$route.params.id + ",(comment)")
          .then(res => {
            this.comments = res.data;
          })
      },
    }
</script>

<style lang="scss">
  .container {

    h2 {
      font-size: 22px;
    }

    .comment-wrap {
      margin-bottom: 5px;
      width: 100%;
      min-height: 5.3125rem;

      .comment-block {
        padding: 1rem;
        background-color: #fff;
        border-radius: 0.1875rem;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
      }

      .comment-text {
        margin-bottom: 1.25rem;
      }

      .bottom-comment {
        color: #acb4c2;
        font-size: 0.875rem;

        .author {
          margin-bottom: 5px;
          color: #ff6600;
        }
      }
    }
  }

</style>