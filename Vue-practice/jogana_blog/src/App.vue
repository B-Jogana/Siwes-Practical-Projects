<template>
  <nav>
    <router-link :to="{ name: 'HomeView_1' }">Home1</router-link> |
    <router-link :to="{ name: 'homeView_2' }">Home2</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
