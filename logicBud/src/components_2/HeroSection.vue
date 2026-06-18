<template>
  <div class="hero">
    <div class="text">
      
          <h1 class="header">We provide  efficacious Multi Channel Payment Services</h1>
      
      
  
        <p class="para">Suited for Governments, online merchants, small
           businesses and others currently inadequately serviced
          by traditional payment mechanisms.
        </p>
    
    

      <div class="btns">
        <button>More About Us</button>
      </div> 
    </div>
    <img src="../assets/mng.png" class="hero-img" />
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 2fr 1fr;
  background: #bde3f2;
  border-radius: 12px;
  max-height: 1100px;
  min-height: 70px; 
  width:95%;
  margin: 40px auto;
  position: relative;
  overflow:hidden;  
  box-sizing:border-box;
}

.header, .para {
  max-width: 50%;
}

.hero::after {
  content: "";
  position:absolute;
  background-color:transparent; 
  border-right:0.5px solid #444;
  left:27%;
  top: -60px;
  height: 150%;
  width: 40%;
  border-radius: 200%;
  
}
.text {
  display: flex;
  flex-direction:column;
  font-size: 12px;
  height: auto;
  margin: 20px 20px;
}

.text h1 {
  font-size: 10px;
}
.text p {
  color: #4F4F4F;
  margin-bottom: 15px;
  font-size: 8px;

}


.btns button {
  font-size: 5px;
  padding: 8px 15px;
  border-radius: 10px;
  background: #15014A;
  color: #FFFFFF;
  border: none;
}

.hero img {
  margin:0;
  height:100%;
  width: 100%;
  object-fit: cover;
}


@media (max-width: 425px){


  .hero {
    grid-template-columns: 2fr;
    max-height: none; 
    padding-bottom: 20px;
    font-size: 12px;
    width: 90%;
  }


  

.text {
  display: flex;
  flex-direction:column;
  font-size: 12px;
  width: 100%;
  align-items: left;
  margin-left: 0px;
}

.header, .para {
  min-width: 100%;
  margin-left: 0;   
  margin-right: auto; 
  text-align: left;
}


  .hero-img {
    display: none;
  }



  .text {
    margin: 10px;
    width: 60%;
    text-align: center;
  }

  .btns {
    display: flex;
    justify-content: flex-start; 
    width: 100%;
  }

  .text h1 {
    max-height: 50%;
    font-size: 18px; 
  }

  .text p {
    font-size: 12px;
  }

  
  .hero::after {
    left: -5%; 
    width: 100%;
    top: -40%;
    border-radius: 50%;
  }


}

 @media (min-width: 1024px) and (max-width: 1440px) {
  .hero {
    margin-top: 6rem;
    height: auto;
  
  }
  .text {
    padding: 20px 0px;
    margin: 10px
  }
  .text p {
    font-size: clamp(20px, 1vw, 40px);
    margin-left: 30px;
  }
  .text h1 {
    font-size: clamp(20px, 1.8vw, 40px);
    margin-left: 30px;

  }
  .btns button {
    height: 60px;
    width: 25%;
    margin: 20px 20px;
    font-size: 20px;
    border-radius: 20px;
   }  
}

</style>
