<template>
    <div class="story">
        <span class="score">{{ story.data.score }}</span>
        <router-link :to="{path: '/story/' + story.data.id}">{{story.data.title}}<span>{{  story.data.url | host }}</span></router-link>
    </div>
</template>

<script>
    export default {
        name: "Item"
    }
</script>

<style scoped>

</style>