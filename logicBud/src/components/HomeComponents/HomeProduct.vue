<template>
     <div class="product-container">
      <div class="content">
        <router-link class="router" :to="{ name: 'Product' }">Our Product </router-link>
        <p>
          backed by an innovative approach, our<br>
          platform is built on best-of-breed technologies<br>
          and industry leading infrustructure providers<br>
          that create smooth managed
        </p>
      </div>
      <div class="cards">  
        <div class="card-1 card">
          <img src="../../assets/zainpay.png" />
          <p>
             lfjkfk glkutr gkkhjhdl hlhhghnf hhjhjg
             jfj mnvj ijhijohjh nhlhjhog iohurr jgij
             hkgiiorgtuiog lkjlgf lgmmhg lghnlkh hgj
             uhreiuteirt 
          </p>
           <p>
             lfjkfk glkutr gkkhjhdl hlhhghnf hhjhjg<br>
             jfj mnvj ijhijohjh nhlhjhog iohurr jgij <br> 
          </p>
          <a href="#">visit</a>
        </div>
        <div class="card-2 card">
          <img src="../../assets/zainb.png" />
           <p>
             lfjkfk glkutr gkkhjhdl hlhhghnf hhjhjg
             jfj mnvj ijhijohjh nhlhjhog iohurr jgij
             hkgiiorgtuiog lkjlgf lgmmhg lghnlkh hgj
             uhreiuteirt 
          </p>
           <p>
             lfjkfk glkutr gkkhjhdl hlhhghnf hhjhjg<br>
             jfj mnvj ijhijohjh nhlhjhog iohurr jgij <br> 
          </p>
          <a href="#">visit</a>
        </div>
        <div class="card-3 card">
          <img src="../../assets/zainpay.png" />
           <p>
             lfjkfk glkutr gkkhjhdl hlhhghnf hhjhjg
             jfj mnvj ijhijohjh nhlhjhog iohurr jgij
             hkgiiorgtuiog lkjlgf lgmmhg lghnlkh hgj
             uhreiuteirt 
          </p>
           <p>
             lfjkfk glkutr gkkhjhdl hlhhghnf hhjhjg<br>
             jfj mnvj ijhijohjh nhlhjhog iohurr jgij <br> 
          </p>
          <a href="#">visit</a>
        </div>
        <div class="arrow-img">
          <img @click="alert('You scroll left')" class="arrow" src="../../assets/arrow-up.png" />
         <img @click="alert('You scroll right')" class="arrow" src="../../assets/arrow-right.png" />
        </div>
        
      </div>
    </div>
</template>


<script>
export default {
  methods: {
    alert(msg) {
      return msg
    }
  }

}
</script>

<style scoped>
.product-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  margin: 70px 30px;
 /*  width: 100%; */
  min-height: 90vh;
  background: linear-gradient(to right, #0575E6, #021B79);
  border-radius: 10px;
  padding: 20px 30px;
  position: relative;
}
.content {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
}
.content .router  {
  text-underline-offset: 15px;
  color: white;
}
.content p {
  color:white;
}
.cards {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin:  30px;
  height: 100%;
  background: yellow;
  position: relative;
  right: 0;
  top:0;
}
.card {
  background: #fff;
  height: 100%;
  border-radius: 10px;
  margin-top: 40px;
  color: #444;
}
.card p {
  margin: 10px 15px;
  color: #444;
}
.card img {
  width: 150px;
  margin: 30px;
}
 .arrow-img  {
  display:flex;
  gap: 30px;
  padding: 30px;
}

</style>
