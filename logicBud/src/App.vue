<template>
<header class="container">
    <img src="./assets/Logo-1.png" class="logo" />
    <nav class="nav-1">
        <router-link  :to="{ name: 'Home' }">Home</router-link>
        <router-link  :to="{ name: 'About' }">About Us</router-link>
        <router-link  :to="{ name: 'Service' }">Service</router-link>
        <router-link  :to="{ name: 'Product' }">Product</router-link>
        <router-link  :to="{ name: 'Contact' }">Contact Us</router-link>
    </nav>
</header>
<router-view />
  
</template>

<script>
export default {

}
</script>

<style>





body, #app {
  font-family: 'Inter';
  margin: 0;
  padding: 0;
}
.container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    margin: 20px;
}
.logo {
    height: 20px;
}

.nav-1  {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap:20px;
    font-size: 10px;
    
}

nav a {
    color: #202020;
    text-decoration: none;
}

.router-link-active {
    border-bottom: 2px solid #140047;
    color: #140047
}


body{
  padding: 0;
  margin:0;
  align-items:center;

}
</style>
