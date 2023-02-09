<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-link to="/1expandingCard">1expandingCard</router-link>
    <router-link to="/2progress">2progress</router-link>
    <router-link to="/3rotate">3rotate</router-link>
    <router-link to="/4search">4search</router-link>
    <router-link to="/5blur">5blur</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
