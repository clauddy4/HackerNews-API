<template>
    <div class="navbar-container">
        <nav class="navbar">
            <router-link class="navbar-item" to="/">Newest Stories</router-link>
            <router-link class="navbar-item" to="/popular">Most Popular Stories</router-link>
            <form>
                <input class="search navbar-item" type="search" placeholder="Search...">
            </form>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .navbar{
        display: flex;
    }

    .navbar-item {
        margin: 24px 24px 0 0;
    }

</style>