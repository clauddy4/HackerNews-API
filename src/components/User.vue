<template>
    <div class="user-view">
        <template v-if="user">
            <h1>User : {{ user.id }}</h1>
            <ul class="meta">
                <li><span class="label">Created:</span> {{ user.created | getTime }} ago</li>
                <li><span class="label">Karma:</span> {{ user.karma }}</li>
                <li v-if="user.about" v-html="user.about" class="about"></li>
            </ul>
            <p class="links">
                <a :href="'https://news.ycombinator.com/submitted?id=' + user.id" target="_blank">submissions</a> |
                <a :href="'https://news.ycombinator.com/threads?id=' + user.id" target="_blank">comments</a>
            </p>
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
                user: {}
            }
        },
        created: function() {
            axios.get("https://hacker-news.firebaseio.com/v0/user/" + this.$route.params.id + ".json")
                .then(res => {
                    this.user = res.data;
                    this.user.forEach(id => {
                        axios.get("https://hacker-news.firebaseio.com/v0/user/" + id + ".json")
                            .then(res => {
                                this.$nextTick(() => {
                                    this.user.push(res.data);
                                })
                                    .catch(err => {
                                        console.log(err);
                                    });
                            });
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        },
        title () {
            return this.user
                ? this.user.id
                : 'User not found'
        },
    }
</script>

<style scoped>

</style>
