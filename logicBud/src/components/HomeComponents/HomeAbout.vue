<template>
    <div class="container-2 about">
        <div class="container-circle"></div>
        <div class="container-content">
            <nav>
              <router-link class="router" :to="{name: 'About'}">About Us
              </router-link>
            </nav>
            <p class="para">
                Backed by an innovation approach, our platform is built on best
                of breed technologies and industry-leading infrustructure
                providers that create smooth managed user experiences. At
                logicbud, our purpose is simple: to innovate and solve problems 
                with a passionate drive to exceed expectation. 
            </p>
            <p class="para">
                To bridge the gap between informal and formal sectors of businesses 
                with excellent financial services.
            </p>
        </div>
    </div>
</template>

<style>
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px; /* Optional space between the boxes */
  width: 100%;
  margin: 20px;
  width: 95vw;
  height: 80vh;
}



.container-circle {
    background:#15014A;
    border-radius: 50%;
    aspect-ratio: 1/1;  
    height: 75%;
    margin: auto;
    width: 60%;
}
.container-content {
  box-sizing: border-box;
  padding: 50px;
  height: 70vh;
  color: #202020;
  font-weight: 400;
  letter-spacing: 0%;
}
.about .container-circle .circle {
  border-radius: 50%;
  background:#1e1c8a;
}
.router {
  font-size: 1.5rem;
  font-weight: bolder;
  color: black;
  margin: 20px;
}
.container-content .para {
  white-space: pre-line;
  max-width: 500px;        
  margin: 50px 0px;        
  line-height: 1.6;         
  color: #4a4a4a;          
  text-align: left;      
}
</style>
