<template>
  <header class="nav-container" :class="{'is-open': isOpen}">
    <img src="../assets/Logo-1.png" class="logo" />

  

    <nav class="nav-links">
      <ul v-show="isOpen">
        <li><a href="#home"  @click="closeMenu">Home</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#service" @click="closeMenu" >Services</a></li>
        <li><a href="#product" @click="closeMenu">Our Product</a></li>
        <li><a href="#contact" @click="closeMenu">Contact us</a></li>
      </ul>
    </nav>

    <button class="menu-btn" @click="toggleMenu" >
      <span v-if="!isOpen">☰</span>
      <span v-else>✖</span> 
    </button>
  </header>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      isOpen: false,      
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen= !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    }
  },
  
  }


</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; 
  padding: 0 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: #fff;
  height: 40px; 
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out; 
  overflow: hidden;
  box-sizing:border-box;


}

.logo {
   height: 20px; 
   width: auto;
   }

.nav-links ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
  font-size: 12px;
  
}
.nav-container.is-open {
    padding: 5px 20px;
    height:auto;
  }
  .nav-links {
    width: 90%; 
    order: 3; 
  }

.nav-links ul  a {
  color: black;
  text-decoration: none;
}
.menu-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: none;
  box-shadow: 0 2px 5px rgba(0,0,1,0.2);
  border-radius: 5px;
  height: 20px;
  width: 20px;
  font-size: 12px;
  margin-right: 15px;
  outline: none;
}



@media (max-width: 425px) {
  .nav-container {
    min-height: 35px;
    flex-wrap: wrap;
    transition: all 0.5s ease-in-out; 
    overflow: hidden;
    border-radius: 15px;
  }
  .nav-container.is-open {
    padding: 4px 20px;
    height: auto;
  }
  .nav-links {
    width: 85%; 
    order: 3; 
  }
  .nav-links ul {
    display: flex;
    gap: 10px;
    padding-top: 20px;
    align-items: center;
    font-size: 8px;
    font-weight:bolder;

  }
}

@media (min-width: 1024px) and (max-width: 1440px) {
  .nav-container {
    min-height: 80px;
    flex-wrap: wrap;
    transition: all 0.5s ease-in-out; 
    overflow: hidden;
    border-radius: 0px;
    font-size: 40px;
  }
    .nav-container.is-open {
    padding: 15px 40px;
  }
  .nav-links {
    width: 100%; 
    order: 3; 
  }
  .nav-links ul {
    display: flex;
    gap: 30px;
    align-items: center;
    font-size: 20px;

  }
  .logo {
   height: 40px; 
   width: auto;
  }
  .menu-btn {
    height: 40px;
    width: auto;
    font-size: 40px;
    box-shadow: 1px 2px 5px #444;
  } 
}



</style>
