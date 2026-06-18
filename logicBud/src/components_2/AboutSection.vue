<template>
  <div class="about-container">
    <div class="about-circle">
      <div class="circle"></div>
    </div>
    <div class="about-content">
      <h1 class="h1-about">About Us</h1>
  
      <div :key="para.id" v-for="para in paragraphs">
        <p>{{ para.text }}</p>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
       paragraphs: [
        { 
          text: `Backed by an innovative approach, our platform is built\n
            on best-of-breed technologies and industry-leading infrastructure\n
            providers that creates smooth managed user experiences. At\n
            At Logicbud, our purpose is simple: to innovate and solve problems\n
            with a passionate drive to exceed expectations.`,
          id:1,
        },
        {
          text: `To bridge the gap between informal and formal sectors of\n
            businesses with excellent financial services.`,
          id: 2  

        }

       
    ]
    }
  }
}
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  color: #444;
  width: 95%;
  align-items: center;
  height: 200%;
}
.about-circle {
  width:100%;
  height: 100%;


}
.circle {
  aspect-ratio: 1/1;
  width:70%;
  height: 10%;
  border-radius: 50%;
  background: #15014A;
  margin: 10px auto;

}

.about-content  {
  width: 50%;
  margin-left: 0;
  font-size: 8px;
  padding: 30px;
}
 .h1-about {
  color: black;
  position: relative;
}
.h1-about::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 15%;
  height: 1.5px;
  background-color: #15014A;
  margin-bottom:5px;

}


@media (max-width: 425px) {
  .about-container {
    display: flex;
    flex-direction:column;
  }
  .circle {
  aspect-ratio: 1/1;
  width:50%;
  height: 10%;
  border-radius: 50%;
  background: #15014A;
  margin: 10px auto;

}
  .about-content {
    margin: 10px auto;
    padding: 20px;
    width:80%;
  
  }
  .about-content p {
    text-align:center;
    max-width: 100%;
  }
  .about-content h1 {
    width: 100%;
    text-align:center;
  }
 .h1-about::after {
  content: "";
  position: absolute;
  left: 45%;
  bottom: -10px;
  width: 10%;
  height: 1px;

}
}


</style>
