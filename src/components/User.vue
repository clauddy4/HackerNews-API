<template>
  <div class="container">
    <template v-if="user">
      <h2>{{ user.username }}</h2>
      <p>Created at {{ user.created_at}}</p>
      <p>Karma: {{ user.karma }}</p>
      <p v-html="user.about">{{ user.about }}</p>
      <br />
      <p>Comments:</p>
      <div v-for="user in comments.hits" :key="user.objectID">
        <div class="comment-wrap">
          <div class="comment-block">
            <div class="comment-text" v-html="user.comment_text">{{user.comment_text}}</div>
            <div class="bottom-comment">
              <div class="date">{{ user.created_at }} <p>to story <a :href="user.story_url" target="_blank">{{user.story_title}}</a></p> </div>
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
  import axios from "axios";

  export default {
    name: 'User',
    data: function() {
      return {
        user: {},
        comments: []
      }
    },
    created: function() {
      axios.get("http://hn.algolia.com/api/v1/users/" + this.$route.params.id)
        .then(response => {
          this.user = response.data;
        });

      axios.get("https://hn.algolia.com/api/v1/search?tags=author_" + this.$route.params.id + ",(comment)")
        .then(response => {
          this.comments = response.data;
        });
    },
  }
</script>

<style lang="scss">

</style>
