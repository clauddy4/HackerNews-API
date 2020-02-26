<template>
  <div>
    <Item v-for="story in stories" :key="story.id" :story="story"></Item>
  </div>
</template>

<script>
  import Item from "./Item";

  export default {
    name: 'storiesList',
    components: {
        'Item': Item
    },
    data: function () {
      return {
        err: '',
      }
    },
    created: function () {
        this.$store.dispatch('FETCH_STORIES');
        console.log(this.$store.state.stories);
    },
    computed: {
      stories() {
        return this.$store.state.stories;
      },
    },
  }
</script>

<style scoped lang="scss">
</style>