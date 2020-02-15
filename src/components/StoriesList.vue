<template>
    <div>
        <Item v-for="story in stories" :key="story.data.id" :story="story"></Item>
    </div>
</template>

<script>
    import Item from "./Item";

    export default {
        name: 'StoriesList',
        components: {
            'Item': Item
        },
        data: function () {
            return {
                err: '',
                stories: this.$store.state.newStories,
            }
        },
        created: function () {
            if (this.$store.state.newStories.length === 0) this.$store.dispatch('fetch_new_stories')
        }
    }
</script>

<style scoped>

</style>