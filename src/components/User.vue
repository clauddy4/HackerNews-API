<template>
  <div class="container">
    <template v-if="user">
      <h2>{{ user.username }}</h2>
      <p>Created at {{ user.created_at | toNormalTime}}</p>
      <p>Karma: {{ user.karma }}</p>
      <p v-html="user.about">{{ user.about }}</p>

      <p>Comments:</p>
        <div v-for="comment in comments" :key="comment.id">
          <div class="comment-wrap">
            <div class="comment-block">
              <div class="comment-text" v-html="comment.comment_text">{{comment.comment_text}}</div>
              <div class="bottom-comment">
                <div class="date">{{ comment.created_at | toNormalTime}} <p>to story <a :href="comment.story_url" target="_blank">{{comment.story_title}}</a></p> </div>
              </div>
            </div>
          </div>
        </div>
    </template>
    <template v-else-if="user === false">
      <h1>User not found.</h1>
    </template>
  </div>
</template>

<script>

  export default {
    name: 'User',
    data: function() {
      return {
      }
    },
    computed: {
        comments() {
            return this.$store.state.usersComments;
        },
        user () {
            return this.$store.state.user;
        },
    },
    created: function() {

        this.$store.dispatch('FETCH_USER', this.$route.params.id);
        this.$store.dispatch('FETCH_USERS_COMMENTS', this.$route.params.id);
    },
  }
</script>

<style lang="scss">

</style>
