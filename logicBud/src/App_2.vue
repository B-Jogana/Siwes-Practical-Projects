<template>
  <HomePage />
  
</template>

<script>
import HomePage from './views_2/HomePage.vue'
export default {
  components: { HomePage }

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

::-webkit-scrollbar {
  display: none;
}


html, body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI",
   Roboto, Helvetica, Arial, sans-serif;
  -ms-overflow-style: none;
  scrollbar-width: none;  
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom,#B0C3F300 70%,#B0C3F380 100%);  
}


h1, h2, h3, h4, h5, h6, p, span, a, button {
  font-family: 'Inter', sans-serif;
}

section[id], 
header[id], 
footer[id],
div[id] {
  scroll-margin-top: 50px; 
}


.container, .hero, .nav-wrapper {
  max-width: 1440px; 
  margin-left: auto;
  margin-right: auto;
  width: 95%; 
}
</style>
