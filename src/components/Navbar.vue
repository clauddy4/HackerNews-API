<template>
    <div class="navbar-container">
        <nav class="navbar">
            <ul class="navbar-item">
                <li><router-link to="/">Newest Stories</router-link></li>
            </ul>
            <ul class="navbar-item">
                <li><router-link to="/popular">Most Popular Stories</router-link></li>
            </ul>
            <form>
                <ul class="navbar-item search">
                    <li><input type="search" placeholder="Search..."></li>
                </ul>
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