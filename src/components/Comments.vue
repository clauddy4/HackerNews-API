<template>
  <div>
    <p>Comments:</p>
    <div v-for="object in comments" :key="object.id">
      <div v-for="comment in object.hits" :key="comment.objectID">
        <div class="comment-wrap">
          <div class="comment-block">
            <div class="comment-text" v-html="comment.comment_text">{{comment.comment_text}}</div>
            <div class="bottom-comment">
              <router-link :to="'/user/' + comment.author"><p class="author">{{ comment.author }}</p></router-link>
              <div class="date">{{ comment.created_at | toNormalTime}} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Comments",
    data: function() {
      return {
        comment: {},
        comments: this.$store.state.storyComments,
      };
    },
    created: function() {
        if (this.$store.state.storyComments.length === 0)this.$store.dispatch('FETCH_STORY_COMMENTS', this.$route.params.id)
      },
    }
</script>

<style lang="scss">

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

</style>