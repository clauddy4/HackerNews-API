<template>
    <div class="story">
        <span class="score">{{ story.data.score }}</span>
        <a :href="story.data.url" target="_blank"><h1>{{ story.data.title }}</h1></a>
        <span>{{  story.data.url | host }}</span>
        <span class="meta">
            by by <router-link :to="'/user/' + story.data.by">{{ story.data.by }}</router-link> {{ story.data.time | getTime }} ago  |
            <router-link class="comments" :to="{path:'/story/' + story.data.id}">{{story.data.descendants}} comments</router-link >
        </span>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: [
            'story'
        ]
    }
</script>

<style scoped>
    .story {
        background-color: #fff;
        padding: 20px 30px 20px 80px;
        border-bottom: 1px solid #eee;
        position: relative;
        line-height: 20px;
    }
    .score {
        color: #f60;
        font-size: 1.1em;
        font-weight: 700;
        position: absolute;
        top: 50%;
        left: 0;
        width: 80px;
        text-align: center;
        margin-top: -10px;
    }
    .story a {
        color: #34495e;
        font-weight: 600;
        text-decoration: none;
    }
    .story a span {
        font-size: 0.85em;
        margin-left: 10px;
        color: #828282;
    }
    .story .meta {
        font-size: 0.85em;
        color: #828282;
    }

    .comments:hover {
        color: #828282;
    }
</style>