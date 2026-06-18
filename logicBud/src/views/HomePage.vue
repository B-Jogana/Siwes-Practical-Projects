<template>
  <div class="home-container">
    <HeroSection />
    <HomeAbout />
    <HomeService />
    <HomeProduct />
    <HomeContact />
    
  
    <div class="footer">
      <p> 2021 All right reserved | Logicbud solution Ltd.</p>
    </div>
  </div>
</template>

<script>
import HomeAbout from '../components/HomeComponents/HomeAbout.vue'
import HomeService from '../components/HomeComponents/HomeService.vue'
import HomeProduct from '../components/HomeComponents/HomeProduct.vue'
import HomeContact from '../components/HomeComponents/HomeContact.vue'
import HeroSection from '../components/HomeComponents/HeroSection.vue'

export default {
  components: { 
    HeroSection,
    HomeAbout,
    HomeService,
    HomeProduct,
    HomeContact,


  },
 
}
</script>


<style >
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  height: auto;      
  width: 100%;
  overflow-y: auto; 
}
.container-1 {
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  background: #27c5ec;
  width: 95vw;
  height: 60vh;    align-self:center;
  border-radius:10px;
}
.content-11 {
  display: grid;
  align-items: center;
  /* Divide into 3 equal parts: 2 parts for the first, 1 part for the second */
  grid-template-columns: 2fr 1fr;
  width: 100%;
}
.Ellipse4 {
    width: 30vw;
    height: 60vh;
}
.mng {
  width: 35vw;
  height: 60vh;
  border-radius:  10px;
}
.content-12 {
  margin: 50px 0px 0px 150px;
}
.content-12 h1 {
  margin-bottom: 30px;
  line-height: 0.5;

}
.content-12 p {
  color: #6d6c6c;
}
.btn {
  margin-top: 30px;
}
.btn button {
  background: #1e1c8a;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  outline: none;
  color: white;
  outline:none;
  border: none;
}
.footer {
  text-align: center;
  background: blue;
  color: white;
}


@media (max-width: 900px) {
 .container-1 {
    flex-direction: row; /* Stack the image and text */
    height: auto;           /* Let content define the height */
    padding: 20px;
  }
  
  .content-11 {
    grid-template-columns: 1fr ; /* Stack text above Ellipse */
    line-height: 1rem;
  }
   .content-11 {
    line-height: 1.5rem;
   }

  .content-12 {
    margin: 20px 0; /* Remove that large 150px left margin */
    text-align: center;
  }
  .Ellipse4 {
    display: none;
  }

  .mng {
    width: 50%;    /* Images should take full width on mobile */
    height: auto;
  }
}

@media (max-width: 600px) {
  .ourservice {
    flex-wrap: wrap; /* Allows tabs to drop to the next line */
    gap: 10px;
  }

  .ourservice .router {
    font-size: 1.1rem; /* Shrink text slightly for mobile */
    margin: 5px;
  }
  
}

@media (max-width: 768px) {
  .about {
    grid-template-columns: 1fr;
    height: auto;
  }

  .container-circle {
    width: 200px; /* Give it a fixed size on mobile */
    margin: 20px auto; /* Center it */
  }

  .container-content {
    padding: 20px;
    text-align: center;
  }
}

@media (max-width: 1024px) {
    .product-container {
        grid-template-columns: 1fr; /* Stack content above cards on tablets */
    }
    .cards {
        grid-template-columns: 1fr 1fr; /* 2 cards per row on tablets */
    }
}

@media (max-width: 600px) {
    .cards {
        grid-template-columns: 1fr; /* 1 card per row on mobile */
    }
    .content-12 h1 {
        font-size: 1.8rem; /* Shrink text so it doesn't overflow */
    }
}

</style>
