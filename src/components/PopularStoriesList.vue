<template>
    <div>
        <Item v-for="story in stories" :key="story.data.id" :story="story"></Item>
    </div>
</template>

<script>
    import Item from "./Item";

    export default {
        name: 'PopularStoriesList',
        components: {
            'Item': Item
        },
        data: function () {
            return {
                err: '',
                stories: this.$store.state.topStories,
            }
        },
        created: function () {
            if (this.$store.state.topStories.length === 0) this.$store.dispatch('FETCH_TOP_STORIES')
        }
    }
</script>

<style scoped>

</style>