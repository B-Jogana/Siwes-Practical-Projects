  <template>
    <section class="our-product">
      <div class="product-container">
        <div class="product-text">
          <h2>Our Product</h2> 
          <div class="underline"></div>
          <p>Backed by an innovative approach, our platform is built on best-of-breed
            technologies and industry-leading infrastructure providers that creates smooth managed
          </p>
        </div>
        <div class="product-cards" ref="cardContainer">
          <div  v-for="card  in products" :key="card.id" class="cards" >
            <img :src="card.logo" :alt="card.name" class="logo"/>
            <p>{{ card.description }}</p>
            <a :href="card.link" class="visit-link">Visit</a>
          </div>
        </div>
      </div>
    
      <div class="nav-arrows">
        <button class="arrow-btn left-arrow" @click="scrollLeft">←</button>
        <button class="arrow-btn right-arrow" @click="scrollRight">→</button>
      </div>
    </section>
  </template>
  <script>
  import zainpayLogo from "../assets/zainpay.png";

  export default {
    name: 'OurProductsSection',
    data() {
      return {
        
        products: [
          {
            id: 1,
            logo: zainpayLogo,
            name: 'Zainpay',
            description: "Zainpay is a secure and flexible payment solution for modern businesses. Streamline your transactions today.",
            link: '#'
          },
          {
            id: 2,
            logo: zainpayLogo,
            name: 'ZainMFB',
            description: "Zain Microfinance Bank provides accessible financial services to help small businesses grow and thrive.",
            link: '#'
          },
          
         {
            id: 3,
            logo: zainpayLogo, 
            name: 'LogicGate',
            description: "An advanced API gateway ensuring your multiple payment channels.",
            link: '#'
          },
          {
            id: 4,
            logo: zainpayLogo, 
            name: 'FutureWallet',
            description: "An advanced payment gateway............",
            link: '#'
          } 
        ]
      }
    },
     methods: {
      scrollLeft() {
      // Accessing the element via this.$refs
        this.$refs.cardContainer.scrollBy({
          left: -120, // Distance to scroll left
          behavior: 'smooth'
        });
      },
      scrollRight() {
        this.$refs.cardContainer.scrollBy({
          left: 120, // Distance to scroll right
          behavior: 'smooth'
        });
      }
  }
}
  
  </script>



  <style>
  .our-product {
    background: linear-gradient(to right, #0575E6, #021B79);
    color: white;
    padding: 40px 10%;
    position: relative; 
    border-radius: 10px;
    max-height: 20%;
    box-sizing: border-box;
    margin: 50px auto;
    width: 95%;
  }
.product-container {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.product-text {
  font-size: 8px;
  flex:1;
  width: 35;
  }

.product-cards {
  display: flex;
  width: 70%;
  overflow-x: auto; 
  scroll-behavior: smooth;
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}

.product-cards::-webkit-scrollbar {
  display: none;
}
.cards {
  background: #fff;
  flex: 0 0 80px; 
  margin: 10px;
  color: #444;
  border-radius: 10px;
  font-size: 8px;
  padding: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  .logo {
    height: 30px;
    width: 60px;
  }
  .underline {
    height: 1px;
    background: white;
    width: 15%;
  }



  .nav-arrows {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .arrow-btn {
    width: 30px;
    height: 30px;
    border: 2px solid rgba(255, 255, 255, 0.5); 
    border-radius: 50%;
    background: transparent;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;

  }

@media (max-width: 425px) {
.product-container {
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.product-text {
  text-align:center;
  font-size: 12px;
}
.underline {
  position:relative;
  left: 35%;
}
.cards {
  background: #fff;
  flex: 0 0  130px ; 
  margin:  20px 0 ;
  color: #444;
  border-radius: 10px;
  font-size: 8px;
  padding: 15px;
  box-sizing:border-box;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  
  .product-cards {
    gap:50px;
  }

}
</style>

