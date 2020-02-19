<template>
  <div class="user-view">
    <template v-if="user">
      <h2>{{ user.username }}</h2>
      <p>Created at {{ user.created_at}} ago</p>
      <p>Karma: {{ user.karma }}</p>
      <p v-html="user.about">{{ user.about }}</p>
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
      }
    },
    created: function() {
      axios.get("http://hn.algolia.com/api/v1/users/" + this.$route.params.id)
              .then(response => {
                this.user = response.data;
              })
    },
  }
</script>

<style scoped>

</style>
