<template>
  <div>
    <div v-for="object in stories" :key="object.id">
      <Item v-for="story in object.hits" :key="story.id" :story="story"></Item>
    </div>
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
         stories: this.$store.state.stories,
      }
    },
    created: function () {
        if (this.$store.state.stories.length === 0)this.$store.dispatch('FETCH_STORIES')
    },
  }
</script>

<style scoped lang="scss">
</style>