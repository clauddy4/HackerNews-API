<template>
  <div class="container">
    <h2>{{ story.title }}</h2>
    <p>Comments:</p>
    <div v-for="(comment, idx) in comments" :key="idx">
      <div class="comment-wrap">
        <div class="comment-block">
          <div class="comment-text" v-html="comment.text"></div>
          <div class="bottom-comment">
            <router-link :to="'/user/' + comment.by"><p class="author">{{ comment.by }}</p></router-link>
            <div class="date">{{ comment.time | getTime}} ago</div>
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
        axios.get("https://hacker-news.firebaseio.com/v0/item/" + this.$route.params.id + ".json")
          .then(res => {
            this.story = res.data;
            this.story.comments = [];
            this.story.kids.forEach(id => {
              axios.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
                  .then(res => { this.comments.push(res.data);})
            });
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